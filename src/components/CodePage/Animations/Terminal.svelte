<script lang="ts">
  import { fly } from "svelte/transition";
  import { createEventDispatcher, onDestroy } from "svelte";

  import TrafficLights from "./TrafficLights.svelte";

  export let command: string;
  export let args: string;

  const dispatch = createEventDispatcher();

  function typewriter(node: HTMLElement, { speed = 1, delay = 0 } = {}) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent ?? "";

    const duration = text.length / (speed * 0.01);

    return {
      duration,
      delay,
      tick: (t: number) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }

  let showOutput = false;

  let timeout: NodeJS.Timeout;

  function handleEnd() {
    timeout = setTimeout(() => {
      showOutput = true;
      dispatch("run");
    }, 100);
  }

  onDestroy(() => timeout && clearTimeout(timeout));
</script>

<div class="terminal" in:fly={{ x: 100, duration: 800 }}>
  <TrafficLights />

  <div class="content">
    <div class="folder">~/Documents</div>
    <div class="command">
      <span in:typewriter={{ delay: 400 }}>{command}</span>
      <span in:typewriter={{ delay: 800 }} on:introend={handleEnd}>
        {args}
      </span>
    </div>
    <div class="output">
      {#if showOutput}
        <slot />
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .terminal {
    @apply p-4 w-full shadow-lg border-black border-opacity-10 rounded-tl-lg rounded-bl-lg border;
    @apply flex flex-col gap-4 h-96;

    background-image: linear-gradient(to bottom right, #434c52, #30363b);

    .content {
      @apply font-mono flex flex-col gap-0;

      .folder {
        @apply text-[#73DDFF] font-bold;
      }

      .command {
        @apply text-white;

        --highlight-color: #91ff8e;

        &:before {
          @apply text-[var(--highlight-color)];
          content: "❯";
        }

        span:first-of-type {
          @apply text-[var(--highlight-color)] pl-2;
        }
      }

      .output {
        @apply text-white;
      }
    }
  }
</style>
