<script lang="ts">
  import NextArrow from "~icons/mdi/chevron-right";
  import BackArrow from "~icons/mdi/chevron-left";
  import Menu from "~icons/mdi/square";
  import TrafficLights from "./TrafficLights.svelte";
  import SearchIcon from "~icons/mdi/search";
  import { fly } from "svelte/transition";
</script>

<div class="window" in:fly={{ x: 100, duration: 700 }}>
  <div class="handle">
    <TrafficLights />
    <div class="navigation">
      <BackArrow />
      <NextArrow />
    </div>
    <div class="searchbox">
      <SearchIcon />
      Search or enter website name
    </div>
  </div>

  <div class="content">
    <slot />
  </div>
</div>

<style lang="postcss">
  .window {
    @apply shadow-lg rounded-l-lg border-black border-l border-y border-opacity-10 overflow-hidden flex flex-col h-[500px] relative;

    .content {
      @apply flex-grow overflow-hidden;
    }

    .handle {
      @apply bg-[#EBEFF1] bg-opacity-75 py-3 px-4 text-black text-opacity-30 flex flex-row justify-between items-center gap-16;
      @apply border-b border-black border-opacity-10;

      .navigation {
        @apply flex flex-row justify-center items-center gap-1 text-[28px];
      }

      .searchbox {
        @apply bg-black bg-opacity-5 text-black text-opacity-50 rounded-lg py-[6px] flex flex-row justify-center items-center text-sm gap-2;
        @apply min-w-full;
      }
    }
  }
</style>
