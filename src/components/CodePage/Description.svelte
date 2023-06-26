<script lang="ts">
  import { TAGS } from "../../consts";

  export let title: string;
  export let tagline: string;
  export let tags: string[];
  export let body: string;
  export let site: string | undefined = undefined;
  export let code: string;
</script>

<article
  class="h-screen flex flex-col p-8 justify-center items-start leading-loose"
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
      href={`https://www.github.com/$code`}
      class="btn"
      class:list={true ? "secondary" : "primary"}
    >
      <!-- <Icon name="github" pack="mdi" class="w-4 h-4" /> -->
      View the code
    </a>
  </div>
</article>
