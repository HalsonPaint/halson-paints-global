export const EXTERNAL_TARGET: "_blank" | "_top" = (() => {
  try {
    return window.self !== window.top ? "_top" : "_blank";
  } catch {
    return "_top";
  }
})();
