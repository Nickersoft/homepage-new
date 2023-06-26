<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import { throttle, debounce } from "radash";

  import Navigation from "./Navigation.svelte";
  import Description from "./Description.svelte";
  import { onMount } from "svelte";
  import { readable } from "svelte/store";
  import Hop from "./Animations/Hop.svelte";

  export let items: CollectionEntry<"code">[];
  export let selectedItem: string;

  const hashStore = readable(window.location.hash, (set) => {
    const updateHash = () => set(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  });

  $: item =
    items.find((item) => item.slug === $hashStore.substring(1)) ?? items[0];

  $: console.log("fuck", selectedItem);
</script>

<div
  class="grid gap-8 justify-center items-center h-full w-full"
  style="grid-template-columns: min-content 1fr 500px"
>
  <Navigation activeItem={item.slug} {items} />

  <div class="relative">
    {#key item}
      <Description slug={item.slug} body={item.body} {...item.data} />
    {/key}
  </div>

  <div class="animation">
    <Hop />
  </div>
</div>
