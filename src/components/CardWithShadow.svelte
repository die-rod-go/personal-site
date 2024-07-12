<script lang="ts">
  export let tailwind = "";
  export let cardText: string;
</script>

<div class={`relative max-w-fit ${tailwind}`}>
  <div class="bg-cus-primary p-16 w-fit relative z-20 right-0">
    <p class="text-cus-secondary font-mono font text-2xl">
      {cardText}
    </p>
  </div>
  <div class="bg-cus-accent absolute top-5 left-5 p-16 h-full w-full"></div>
</div>
