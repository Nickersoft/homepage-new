<script lang="ts">
  import type { Component } from "svelte";
  import MailIcon from "@lucide/svelte/icons/mail";
</script>

{#snippet logo(label: string, href: string, Icon: Component)}
  <a
    {href}
    class="text-muted-foreground hover:text-primary hover:bg-primary/4 transition-all duration-250 active:opacity-50 p-2 rounded-md"
  >
    <Icon size={18} />
  </a>
{/snippet}

<div class="flex flex-row items-center gap-2">
  {@render logo("Email", "mailto:tyler@kojo.design", MailIcon)}

  <!-- [<Email />
  ](mailto:tyler@kojo.design) [<Twitter />
  ](https://twitter.com/tylernickerson) [<LinkedIn />
  ](https://linkedin.com/in/tylernickerson) [<Layers />
  ](https://layers.to/tylernickerson) [<GitHub />
  ](https://github.com/nickersoft) -->
</div>
