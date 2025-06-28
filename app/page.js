"use client";              // keep!  App Router pages must mark client code
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  async function add() {
    if (!url) return alert("Paste a product link first!");
    await fetch("/api/add", { method: "POST", body: url });
    alert("✅ Now watching: " + url);
    setUrl("");
  }

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>SupplierGuard 🔔</h1>
      <p>Paste an AliExpress / CJ product link. We’ll email you if price or stock change.</p>
      <input
        style={{ padding: 8, width: 420 }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.aliexpress.com/item/…"
      />
      <button style={{ marginLeft: 12 }} onClick={add}>Add URL</button>
    </main>
  );
}
