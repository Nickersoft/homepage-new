<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import { throttle, debounce } from "radash";

  import Navigation from "./Navigation.svelte";
  import Description from "./Description.svelte";
  import { onMount } from "svelte";

  export let items: CollectionEntry<"code">[];

  let scrollY: number;
  let height: number;
  let offset: number;
  $: console.log(scrollY, height, offset);

  let scrollPercentage = 0;

  onMount(() => {
    function updateScrollIndicator() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      scrollPercentage = (scrollTop / scrollHeight) * 100;
    }

    window.addEventListener("scroll", updateScrollIndicator);
    return () => window.removeEventListener("scroll", updateScrollIndicator);
  });
</script>

<svelte:window bind:scrollY />

<div
  class="grid px-8"
  style:--percentScroll="{scrollPercentage}%"
  bind:clientHeight={height}
  style="grid-template-columns: min-content auto auto"
>
  <Navigation {items} />

  <div class="flex flex-col">
    {#each items as item (item.slug)}
      <Description body={item.body} {...item.data} />
    {/each}
  </div>
</div>
