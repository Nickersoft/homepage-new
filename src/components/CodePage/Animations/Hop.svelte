<script lang="ts">
  import { fly } from "svelte/transition";
  import { linear, quadInOut } from "svelte/easing";
  import Spinner from "./Spinner.svelte";
  import { onDestroy, onMount } from "svelte";
  import { random } from "radash";

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

  const texts = [
    `Resolving app 'notion'...`,
    `Building Notion...`,
    `Installing Notion...`,
    `Cleaning up...`,
    `Successfully installed Notion!`,
  ];

  let textIndex = -1;

  let timeout: NodeJS.Timeout;

  function showText(offset: number) {
    timeout = setTimeout(() => {
      textIndex += 1;

      if (textIndex < texts.length - 1) {
        showText(random(800, 1200));
      }
    }, offset);
  }

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<div class="terminal" in:fly={{ x: 100, duration: 500 }}>
  <div class="lights">
    <div class="light red" />
    <div class="light yellow" />
    <div class="light green" />
  </div>

  <div class="content">
    <div class="folder">~/Documents</div>
    <div class="command">
      <span in:typewriter={{ delay: 400 }}>hop</span>
      <span in:typewriter={{ delay: 800 }} on:introend={() => showText(100)}>
        install notion
      </span>
    </div>
    {#if textIndex >= 0}
      <div class="output">
        {#if textIndex < texts.length - 1}
          <Spinner />
        {:else}
          <span class="check">√</span>
        {/if}
        <span>{texts[textIndex]}</span>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .terminal {
    @apply p-4 w-full shadow-lg border-black border-opacity-10 rounded-tl-lg rounded-bl-lg border;
    @apply flex flex-col gap-4 h-96;

    background-image: linear-gradient(to bottom right, #434c52, #30363b);

    .lights {
      @apply flex flex-row gap-2;

      .light {
        @apply rounded-full w-3 h-3 block border border-black border-opacity-10;

        &.red {
          @apply bg-red;
        }

        &.yellow {
          @apply bg-yellow;
        }

        &.green {
          @apply bg-green;
        }
      }
    }

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

        .check {
          @apply text-green font-bold;
        }
      }
    }
  }
</style>
