"use client";

import { useEffect } from "react";

export default function HelloAssoWidget() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const dataHeight = e.data?.height;
      const widget = document.getElementById(
        "haWidget",
      ) as HTMLIFrameElement | null;
      if (
        widget &&
        dataHeight &&
        dataHeight > parseFloat(widget.style.height || "0")
      ) {
        widget.style.height = dataHeight + "px";
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <iframe
      id="haWidget"
      src="https://www.helloasso.com/associations/histoire-et-patrimoine-du-pardailhan/formulaires/1/widget"
      style={{ width: "100%", height: "750px", border: "none" }}
      title="Formulaire de don — Histoire et Patrimoine du Pardailhan"
    />
  );
}
