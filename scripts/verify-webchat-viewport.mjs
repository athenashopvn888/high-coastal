import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const chat = await readFile(new URL("../app/delivery/HighCoastalWebChat.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/delivery/HighCoastalWebChat.css", import.meta.url), "utf8");

for (const expected of [
  "window.visualViewport",
  'viewport?.addEventListener("resize", syncVisualViewport)',
  'viewport?.addEventListener("scroll", syncVisualViewport)',
  'viewport?.removeEventListener("resize", syncVisualViewport)',
  'viewport?.removeEventListener("scroll", syncVisualViewport)',
  "viewport?.height ?? window.innerHeight",
  "viewport?.width ?? window.innerWidth",
  "viewport?.offsetTop ?? 0",
  "viewport?.offsetLeft ?? 0",
  "--sod-chat-viewport-height",
  "--sod-chat-viewport-width",
  "--sod-chat-viewport-offset-top",
  "--sod-chat-viewport-offset-left",
]) {
  assert.ok(chat.includes(expected), `Missing visual viewport contract: ${expected}`);
}

assert.match(
  chat,
  /\{!token \?[\s\S]*?: <><div className="sod-chat-scroll">[\s\S]*?<\/div><form className="sod-chat-composer"/,
  "An active chat must keep its composer mounted outside the scrolling transcript",
);
assert.equal(chat.match(/className="sod-chat-composer"/g)?.length, 1, "Expected exactly one active-chat composer");

for (const expected of [
  'grid-template-areas:"header" "availability" "content" "composer" "notice"',
  "grid-template-rows:auto auto minmax(0,1fr) auto auto",
  ".sod-chat-panel > header { grid-area:header",
  ".sod-availability-banner { grid-area:availability",
  ".sod-chat-start { grid-area:content",
  ".sod-chat-scroll { grid-area:content",
  ".sod-chat-composer { grid-area:composer",
  ".sod-chat-notice { grid-area:notice",
  "top:var(--sod-chat-viewport-offset-top,0px)",
  "left:var(--sod-chat-viewport-offset-left,0px)",
  "width:var(--sod-chat-viewport-width,100dvw)",
  "height:var(--sod-chat-viewport-height,100dvh)",
  ".sod-chat-panel{position:absolute;inset:0;width:100%;height:100%",
]) {
  assert.ok(styles.includes(expected), `Missing mobile composer CSS contract: ${expected}`);
}

console.log("High Coastal mobile Web Chat viewport contract passed.");
