<div class="lights">
  <div class="light red" />
  <div class="light yellow" />
  <div class="light green" />
</div>

<style lang="postcss">
  .lights {
    @apply flex flex-row gap-2;

    .light {
      @apply rounded-full w-[0.8rem] h-[0.8rem] block border border-black border-opacity-10;

      &.red {
        @apply bg-[#FE5F58];
      }

      &.yellow {
        @apply bg-[#FFBC2E];
      }

      &.green {
        @apply bg-[#26C941];
      }
    }
  }
</style>
