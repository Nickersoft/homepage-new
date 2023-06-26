<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import Navigation from "./Navigation.svelte";

  export let items: CollectionEntry<"code">[];
</script>

<nav>
  <ul>
    {#each items as doc (doc.slug)}
      <li>
        <a href={doc.slug} class="link" class:active={false}>
          {#await import(`~/icons/${doc.data.icon.pack}/${doc.data.icon.name}`) then Icon}
            <svelte:component this={Icon} />
          {/await}
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
  nav {
    @apply w-72 flex justify-center items-center h-screen sticky top-0;

    ul {
      @apply relative;

      &:after {
        @apply right-0 w-1 h-4 bg-black absolute;

        top: min(calc(var(--percentScroll) + 1.25rem), calc(100% - 2.25rem));
        content: "";
      }
    }
  }

  .link {
    @apply flex flex-row items-center justify-start gap-4 py-4 px-8 opacity-50 relative transition-all duration-75 cursor-pointer;

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
