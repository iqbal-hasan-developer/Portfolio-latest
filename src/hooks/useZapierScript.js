// hooks/useZapierScript.js
import { useEffect } from "react";

let scriptLoaded = false;

export function useZapierScript() {
  useEffect(() => {
    if (scriptLoaded) return;

    const script = document.createElement("script");
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    scriptLoaded = true;
  }, []);
}