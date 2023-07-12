// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

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

export const ICONS: Record<
  string,
  { default: astroHTML.JSX.Element }
> = {
  microphone: await import("~icons/mdi/microphone"),
  globe: await import("~icons/mdi/globe"),
  monkey: await import("~icons/game-icons/gorilla"),
  terminal: await import("~icons/mdi/terminal"),
  moon: await import("~icons/solar/moon-bold"),
  book: await import("~icons/el/book"),
  email: await import("~icons/mdi/email"),
  notification: await import("~icons/mingcute/notification-fill"),
};
