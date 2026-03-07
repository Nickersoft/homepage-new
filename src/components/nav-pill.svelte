<script lang="ts">
  import HouseIcon from "@lucide/svelte/icons/house";
  import PencilIcon from "@lucide/svelte/icons/pencil";
  import { onDestroy, type Component } from "svelte";

  interface Props {}

  let pathname = $state("");

  function updatePathName() {
    pathname = document.location.pathname;
  }

  $effect(() => {
    document.addEventListener("astro:after-swap", updatePathName);
    document.addEventListener("astro:page-load", updatePathName);

    return () => {
      document.removeEventListener("astro:after-swap", updatePathName);
      document.removeEventListener("astro:page-load", updatePathName);
    };
  });
</script>

{#snippet link(href: string, Icon: Component, label: string)}
  <a
    data-active={(href === "/"
      ? pathname === "/"
      : pathname.startsWith(href)
    ).toString()}
    {href}
    class="flex! data-[active=true]:[anchor-name:--active-item] group/item p-3 justify-center items-center"
  >
    <Icon
      class="text-primary-foreground opacity-50 transition-opacity duration-250 ease-out group-data-[active=true]/item:opacity-100! group-hover/item:opacity-100"
      size={20}
    />
  </a>
{/snippet}

<div
  class="fixed bottom-4 group inset-shadow-[0_1px_1px] inset-shadow-white/20 shadow-lg ring-zinc-950 dark:zinc-900 ring left-1/2 flex px-5 transition-all duration-250 ease-out -translate-x-1/2 flex-row items-center rounded-full bg-linear-to-b dark:from-zinc-700 dark:to-zinc-900 from-zinc-800 to-zinc-950"
>
  {@render link("/", HouseIcon, "home")}
  {@render link("/writing", PencilIcon, "writings")}

  <div
    class="absolute bottom-0.5 transition-all duration-250 [position-anchor:--active-item] left-[anchor(start)] w-11 h-full overflow-hidden pointer-events-none border-white"
  >
    <div
      class="rounded-full bg-white w-full absolute bottom-0 inset-x-0 h-px"
    ></div>
    <div
      class="rounded-full bg-white size-4 absolute bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 blur-sm animate-pulse mix-blend-plus-lighter"
    ></div>
  </div>
</div>

<!-- <style lang="ts">
			anchor-name: --button-active;
			padding: var(--padding);

			&:after {
				inset: calc(anchor(start)) calc(anchor(end)) calc(anchor(end)) calc(anchor(start));
				position-anchor: --button-active;
			}
      </script -->
