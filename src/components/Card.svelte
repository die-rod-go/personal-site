<script lang="ts">
  export let tailwind = "";
  export let cardText = "";
</script>

<div class="relative max-w-fit {tailwind}">
  <div class="bg-cus-primary p-16 w-fit relative z-10 right-0">
    <slot />
  </div>
  <div class="bg-cus-secondary absolute top-5 left-5 p-16 h-full w-full"></div>
</div>
