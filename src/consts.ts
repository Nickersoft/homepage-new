// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { SvelteComponent } from "svelte";

export const SITE_TITLE = "Tyler Nickerson";

export const SITE_DESCRIPTION = "Welcome to my website!";

export const TAGS: Record<string, string> = {
  Svelte: "https://svelte.dev",
  TypeScript: "https://typescriptlang.org",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Go: "https://go.dev",
  Kotlin: "https://kotlinlang.org",
  Deno: "https://deno.land",
  Tailwind: "https://tailwindcss.com",
};

export const ICONS: Record<
  string,
  Promise<{ default: astroHTML.JSX.Element }>
> = {
  microphone: import("~icons/mdi/microphone"),
  globe: import("~icons/mdi/globe"),
  monkey: import("~icons/game-icons/gorilla"),
  terminal: import("~icons/mdi/terminal"),
  moon: import("~icons/solar/moon-bold"),
  book: import("~icons/el/book"),
  notification: import("~icons/mingcute/notification-fill"),
};
