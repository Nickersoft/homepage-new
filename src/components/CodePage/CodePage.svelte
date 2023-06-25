<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import { throttle, debounce } from "radash";

  import Navigation from "./Navigation.svelte";
  import Description from "./Description.svelte";
  import { onMount } from "svelte";

  export let items: CollectionEntry<"code">[];

  let selectedIndex = 0;

  $: selectedItem = items[selectedIndex];

  const goToNextPage = throttle({ interval: 1000 }, () => (selectedIndex += 1));

  const goToPreviousPage = throttle(
    { interval: 500 },
    () => (selectedIndex -= 1)
  );

  onMount(() => {
    function handleWheel(event) {
      console.log(event);
      if (event.deltaY > 0 && selectedIndex !== items.length - 1) {
        goToNextPage();
      } else if (selectedIndex !== 0) {
        goToPreviousPage();
      }
    }

    window.addEventListener("wheel", handleWheel);
  });
</script>

<svelte:window />

<div
  class="container grid p-8"
  style="grid-template-columns: min-content auto auto"
>
  <Navigation {items} />
  <Description body={selectedItem.body} {...selectedItem.data} />
</div>
