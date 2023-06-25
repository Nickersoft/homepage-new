<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import Navigation from "./Navigation.svelte";

  export let items: CollectionEntry<"code">[];
</script>

<nav class="w-72 flex-shrink-0">
  <ul>
    {#each items as doc (doc.slug)}
      <li>
        <a href={doc.slug} class="link" class:active={false}>
          <!-- <Icon
              class="w-4 h-4"
              name={doc.data.icon.name}
              pack={doc.data.icon.pack}
            /> -->
          {doc.data.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  .link {
    @apply flex flex-row items-center justify-start gap-4 py-4 opacity-50 relative transition-all duration-75 cursor-pointer;

    &:hover {
      @apply opacity-90;
    }

    &.active {
      @apply opacity-100;

      &:after {
        @apply w-1 bg-white right-2 absolute top-4 bottom-4;
        content: "";
      }
    }
  }
</style>
