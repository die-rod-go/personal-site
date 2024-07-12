<script>
  export let cardText = "";
  export let subtitle = "";
</script>

<div class="ml-16 mt-40 relative max-w-fit">
  <div class="bg-cus-primary p-16 w-fit max-w-120 relative z-20">
    <p class="text-cus-secondary font-mono font text-2xl lg:text-9xl">
      {cardText}
    </p>
  </div>
  <div class="bg-cus-secondary absolute top-5 left-5 p-16 h-full w-full"></div>
</div>
<p class="ml-16 font-mono mt-10 text-cus-secondary text-1xl lg:text-3xl">
  {subtitle}
</p>
