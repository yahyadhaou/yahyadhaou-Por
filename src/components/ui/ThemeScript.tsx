"use client";

import { useSyncExternalStore } from "react";

// Runs before paint so the saved or system theme never flashes the wrong colors.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

const subscribe = () => () => {};

// React 19 warns when it creates a <script> in the browser (e.g. after a language switch
// re-renders the layout). The script is only needed in the server HTML, so it renders
// there and during hydration, and is skipped on any later client render.
export function ThemeScript() {
  const isServerOrHydrating = useSyncExternalStore(subscribe, () => false, () => true);
  if (!isServerOrHydrating) return null;
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} suppressHydrationWarning />;
}
