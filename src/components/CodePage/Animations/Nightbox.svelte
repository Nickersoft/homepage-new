<script>
  import Safari from "./Safari.svelte";
  import nightbox from "../../../images/nightbox.png";
  import { fly } from "svelte/transition";
</script>

<!-- <div
  in:fly={{ x: 100, duration: 700 }}
  class="bg-black bg-opacity-10 rounded-lg p-2 shadow-lg"
>
  <div
    style={`background: url("${nightbox}") 0 0 no-repeat; background-size: cover`}
    class="w-[800px] h-[400px] rounded-lg shadow-lg"
  />
</div> -->

<Safari>
  <div
    style={`background: url("${nightbox}") 0 0 no-repeat; background-size: cover`}
    class="w-[900px] h-full"
  />
</Safari>
