// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import microphone from "~icons/mdi/microphone";
import globe from "~icons/mdi/globe";
import monkey from "~icons/game-icons/gorilla";
import terminal from "~icons/mdi/terminal";
import moon from "~icons/solar/moon-bold";
import book from "~icons/el/book";
import email from "~icons/mdi/email";
import notification from "~icons/mingcute/notification-fill";

export const SITE_TITLE = "Tyler Nickerson";

export const SITE_DESCRIPTION = "The personal homepage of Tyler Nickerson";

export const TAGS: Record<string, string> = {
  Svelte: "https://svelte.dev",
  TypeScript: "https://typescriptlang.org",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Go: "https://go.dev",
  Kotlin: "https://kotlinlang.org",
  Deno: "https://deno.land",
  Tailwind: "https://tailwindcss.com",
};

export const ICONS: Record<string, astroHTML.JSX.Element> = {
  microphone,
  globe,
  monkey,
  terminal,
  moon,
  book,
  email,
  notification,
};
