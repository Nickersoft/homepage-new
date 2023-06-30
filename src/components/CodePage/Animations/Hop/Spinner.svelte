<script lang="ts">
  import { onMount } from "svelte";

  const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

  let index = 0;

  onMount(() => {
    const interval = setInterval(() => {
      if (index === spinner.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
    }, 80);
    return () => clearInterval(interval);
  });
</script>

{spinner[index]}
