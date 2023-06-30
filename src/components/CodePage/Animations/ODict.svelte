<script lang="ts">
  import Terminal from "./Terminal.svelte";
</script>

<Terminal command="odict" args={`lookup eng.odict "fun"`}>
  <br />
  ────────────────────────────────<br />
  <b>fun</b><br />
  ────────────────────────────────<br /><br />
  <b><u>Etymology #1</u></b><br /><br />

  <i>noun</i><br /><br />

  <ol>
    <li>amusement, enjoyment or pleasure</li>
    <li>playful, often noisy, activity.</li>
  </ol>
</Terminal>

<style lang="postcss">
  ol {
    @apply pl-12 list-decimal;
  }
</style>
