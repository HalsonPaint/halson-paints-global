export const openExternal = (url: string) => {
  // In some embedded/sandboxed environments, opening a new tab can be blocked.
  // We try a real new tab first; if blocked, we fall back to same-tab navigation.
  const win = window.open(url, "_blank", "noopener,noreferrer");

  if (win) {
    try {
      // Extra safety: ensure the opened page can't reach back to this window.
      win.opener = null;
    } catch {
      // ignore
    }
    return true;
  }

  try {
    window.top?.location.assign(url);
  } catch {
    window.location.assign(url);
  }

  return false;
};
