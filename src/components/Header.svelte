<script lang="ts">
  import { onMount } from "svelte";
  export let routeColors = "";
  let scrolled = false;

  const handleScroll = () => {
    scrolled = window.scrollY > 0;
  };

  //  add scroll handler
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header class="fixed top-0 w-full font-mono z-50 {routeColors} secondary-colors">
  <div class="h-2 bg-cus-primary"></div>
  <nav
    class="flex justify-items-end w-full h-full items-center transition-all duration-300 ease-in-out pb-2"
    class:bg-cus-primary={scrolled}
  >
    <ul
      class="flex justify-items-end ml-5 m-1 space-x-5 text-cus-accent text-lg min-h-7"
    >
      <div class="pl-1 pr-1 max-h-full bg-cus-home hover:h-7 transition-all h-0 hover:text-cus-background ease-in-out duration-300">
        <li><a href="/">Home</a></li>
      </div>
      <div class="pl-1 pr-1 max-h-full bg-cus-blog hover:h-7 transition-all h-0 hover:text-cus-background ease-in-out duration-300">
        <li><a href="/blog">Blog</a></li>
      </div>
      <div class="pl-1 pr-1 max-h-full bg-cus-showcase hover:h-7 transition-all h-0 hover:text-cus-background ease-in-out duration-300">
        <li><a href="/showcase">Showcase</a></li>
      </div>
      <div class="pl-1 pr-1 max-h-full bg-cus-contact hover:h-7 transition-all h-0 hover:text-cus-background ease-in-out duration-300">
        <li><a href="/contact">Contact</a></li>
      </div>
    </ul>
  </nav>
</header>
