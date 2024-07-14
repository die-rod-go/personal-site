<script lang="ts">
  import FadeIn from "../../components/FadeIn.svelte";
  import CardWithShadow from "../../components/CardWithShadow.svelte";
  import BouncingDownArrow from "../../components/BouncingDownArrow.svelte";
</script>

<div class="pt-10 min-h-screen relative">
  <FadeIn>
    <div class="p-5">
      <CardWithShadow
        tailwind="w-2/3 ml-16 mt-40"
        cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
    </div>
  </FadeIn>
  <BouncingDownArrow />
</div>
