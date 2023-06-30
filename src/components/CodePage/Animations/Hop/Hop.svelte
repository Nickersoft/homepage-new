<script lang="ts">
  import { onDestroy } from "svelte";
  import { random } from "radash";

  import Terminal from "../Terminal.svelte";
  import Spinner from "./Spinner.svelte";

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

<Terminal command="hop" args="install notion" on:run={() => showText(100)}>
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
</Terminal>

<style lang="postcss">
  .check {
    @apply text-green font-bold;
  }
</style>
