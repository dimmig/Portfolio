import { React, createContext } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./assets/styles/index.css";

export const ContextManager = createContext(null);

const animate = (elements, delay) => {
  const slide = [
    { transform: "translateX(-10%)", opacity: "0" },
    { transform: "translateX(0)", opacity: "1" },
  ];

  const options = {
    duration: 500,
    iterations: 1,
    delay: delay,
  };

  for (const el of elements) {
    options.delay += 100;

    el.animate(slide, options);
    setTimeout(() => {
      el.classList.remove("transperent");
    }, 500);
  }

  if (elements[0].parentElement.id === "about-content") {
    const graph = document.getElementById("graph");

    graph.animate(slide, delay);

    graph.classList.remove("transperent");
  }
};

const isElementVisible = (element) => {
  if (element) {
    const elementTop = element.getBoundingClientRect().top;

    return elementTop <= window.innerHeight;
  }
};

const handleScrollAnimation = (elements) => {
  for (const el of elements) {
    if (isElementVisible(el) && el.classList.contains("scrolled")) {
      el.classList.remove("scrolled");
      animate(el.querySelectorAll(".animatable"), 100);
    }
  }
};

window.addEventListener("scroll", () =>
  handleScrollAnimation([
    document.getElementById("about-content"),
    document.getElementById("projects"),
    document.getElementById("faq"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextManager.Provider value={{ animate }}>
    <App />
  </ContextManager.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
