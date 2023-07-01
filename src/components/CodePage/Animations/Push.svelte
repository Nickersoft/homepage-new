<script lang="ts">
  import { fly } from "svelte/transition";

  import safari from "../../../images/safari.png";
</script>

<div class="notification" in:fly={{ y: 20, duration: 700 }}>
  <img class="icon" src={safari} alt="Safari icon" />
  <div class="text">
    <div class="title">You have a new message!</div>
    <div class="body">Andrew Myers sent you a new message.</div>
    <div class="site">messages.example.com</div>
  </div>
</div>

<style lang="postcss">
  .notification {
    @apply bg-gradient-to-b from-white to-[rgba(0,0,0,0.02)] p-4 rounded-l-xl border border-black border-opacity-10 shadow-lg;
    @apply flex flex-row justify-start items-center gap-4;

    .text {
      @apply flex flex-col gap-0.5;

      .site {
        @apply text-xs opacity-50 mt-1;
      }

      .title {
        @apply font-bold;
      }

      .body {
        @apply text-sm;
      }
    }

    .icon {
      @apply w-16 h-16;
    }
  }
</style>
