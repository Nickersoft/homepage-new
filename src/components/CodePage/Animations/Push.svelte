<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<div class="notification" in:fly={{ y: 20, duration: 700 }}>
  <div class="title">You have a new message!</div>
  <div class="site">messages.example.com</div>
  <div class="body">Andrew Myers sent you a new message.</div>
</div>

<style lang="postcss">
  .notification {
    @apply bg-gradient-to-b from-white to-[rgba(0,0,0,0.02)] p-4 rounded-l-xl border border-black border-opacity-10 shadow-lg;

    .title {
      @apply font-bold mb-0.5;
    }

    .site {
      @apply text-xs mb-2;
    }

    .body {
      @apply text-sm;
    }
  }
</style>
