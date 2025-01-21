const scrollValues = ["auto", "scroll"];

export const isScrollableElement = (element: HTMLElement) => {
  const { overflow, overflowY } = window.getComputedStyle(element);

  const isOverflowing =
    scrollValues.includes(overflow) || scrollValues.includes(overflowY);

  const isContextMenu = element.closest("#context-menu");
  const isPopup = element.classList.contains("popup");
  const isDialog = element.getAttribute("role") === "dialog";
  const isAriaHasPopup = element.getAttribute("aria-haspopup") === "true";

  return (
    isOverflowing && !isContextMenu && !isPopup && !isDialog && !isAriaHasPopup
  );
};
