<script lang="ts">
  import { fly } from "svelte/transition";
  import { TAGS } from "../../consts";

  export let title: string;
  export let tagline: string;
  export let tags: string[];
  export let body: string;
  export let slug: string;
  export let site: string | undefined = undefined;
  export let code: string;

  function blurOut(node: HTMLElement, { delay = 0, duration = 400 } = {}) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    return {
      delay,
      duration,
      css: (t: number, u) => `
        opacity: ${t * +style.opacity};
        filter: blur(${6 * (1 - t)}px);
        transform: ${transform} scale(${1 - 0.05 * u});
      `,
    };
  }
</script>

<article
  out:blurOut
  in:fly={{ y: 10, delay: 400, duration: 600 }}
  id={slug}
  class="flex flex-col p-8 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-start leading-loose"
>
  <h3 class="font-display text-5xl leading-relaxed">{title}</h3>

  <span class="font-display text-xl block">{tagline}</span>

  <ul class="flex flex-row items-center justify-start gap-4 py-8">
    {#each tags as tag}
      <li
        class="border-r pr-4 leading-snug border-white border-opacity-20 last-of-type:border-none"
      >
        <a
          class="font-serif opacity-75 hover:opacity-100 transition-opacity duration-150 cursor-pointer active:opacity-50 text-sm italic"
          href={TAGS[tag]}
          target="_blank"
          rel="noreferrer"
        >
          {tag}
        </a>
      </li>
    {/each}
  </ul>

  <p>{body}</p>

  <hr class="border-t mt-6 w-full border-black opacity-10 h-1" />

  <div class="flex flex-row items-center gap-4 justify-start py-8">
    <!-- {
      site && (
        <a href={site} target="_blank" rel="noreferrer" class="btn primary">
          Visit site
          <Icon name="arrow-right" pack="mdi" class="w-4 h-4" />
        </a>
      )
    } -->
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://www.github.com/${code}`}
      class="btn btn-primary"
      class:list={true ? "secondary" : "primary"}
    >
      <!-- <Icon name="github" pack="mdi" class="w-4 h-4" /> -->
      View the code
    </a>
  </div>
</article>
