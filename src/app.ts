import { isScrollableElement } from "./helpers/is-scrollable-element";

async function main() {
  const optimization = () => {
    const elements = document.querySelectorAll<HTMLElement>("*");

    elements.forEach((element) => {
      const isScrollable = isScrollableElement(element);
      const isOptimized = element.hasAttribute("data-optimized");

      if (isScrollable && !isOptimized) {
        element.style.willChange = "transform";
        element.style.transform = "translate3d(0, 0, 0)";
        element.setAttribute("data-optimized", "true");
      }
    });
  };

  const observer = new MutationObserver(optimization);
  observer.observe(document.body, { childList: true, subtree: true });

  const pushState = history.pushState;
  history.pushState = function (...args) {
    pushState.apply(this, args);
    setTimeout(optimization, 100);
  };

  window.addEventListener("popstate", () => setTimeout(optimization, 100));

  optimization();
}

export default main;
