<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import Navigation from "./Navigation.svelte";
  import { ICONS } from "../../consts";

  export let items: CollectionEntry<"code">[];
  export let activeItem: string;
</script>

<nav>
  <ul>
    {#each items as doc (doc.slug)}
      <li>
        <a
          href="#{doc.slug}"
          class="link"
          class:active={activeItem === doc.slug}
        >
          {#await ICONS[doc.data.icon] then Icon}
            <svelte:component this={Icon.default} />
          {/await}

          {doc.data.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply flex justify-center items-center p-8;

    ul {
      @apply relative flex flex-col;
    }
  }

  .link {
    @apply flex whitespace-nowrap flex-row items-center justify-start gap-4 py-3 px-4 pr-8 opacity-50 relative transition-all duration-75 cursor-pointer;
    @apply transition-opacity duration-300 rounded-md;

    &:active {
      @apply opacity-25;
    }

    &:after {
      @apply w-1 bg-black opacity-0 right-1 absolute top-4 bottom-4 duration-150 transition-all;
      content: "";
    }

    &.active {
      @apply opacity-100 relative bg-black bg-opacity-5;

      /* &:after {
        @apply opacity-100;
      } */
    }
  }
</style>
