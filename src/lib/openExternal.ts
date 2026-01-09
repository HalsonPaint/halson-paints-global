import { EXTERNAL_TARGET } from "@/lib/external";

export const openExternal = (url: string) => {
  // In some embedded/sandboxed environments, opening a new tab can be blocked.
  // We try a real navigation first; if blocked, we fall back to same-frame navigation.
  const win = window.open(url, EXTERNAL_TARGET, "noopener,noreferrer");

  if (win) {
    try {
      // Extra safety: ensure the opened page can't reach back to this window.
      // (May throw in some browsers)
      win.opener = null;
    } catch {
      // ignore
    }
    return true;
  }

  try {
    // If we're embedded, attempt top navigation; otherwise same-tab navigation.
    if (EXTERNAL_TARGET === "_top") {
      window.top?.location.assign(url);
    } else {
      window.location.assign(url);
    }
  } catch {
    window.location.assign(url);
  }

  return false;
};
