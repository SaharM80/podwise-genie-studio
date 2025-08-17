// src/api/index.ts
const BASE_URL =
  (import.meta as any)?.env?.VITE_API_BASE?.trim?.() || "/api";

export async function generateTranscript(topic: string) {
  const r = await fetch(`${BASE_URL}/generate_transcript`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic }),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function generatePodcast(topic: string) {
  const r = await fetch(`${BASE_URL}/generate_podcast`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic }),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
