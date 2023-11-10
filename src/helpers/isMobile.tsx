function isMobile() {
  return typeof window !== "undefined" && window.outerWidth < 959;
}

export default isMobile;
