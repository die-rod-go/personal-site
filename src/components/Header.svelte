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

<header class="fixed top-0 w-full font-mono z-50 {routeColors}">
  <div class="h-2 bg-cus-primary"></div>
  <nav
    class="flex justify-items-end w-full items-center transition-all duration-300 ease-in-out pb-2"
    class:bg-cus-primary={scrolled}
  >
    <ul
      class="flex justify-items-end ml-5 m-1 space-x-5 text-cus-secondary text-lg"
    >
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/showcase">Showcase</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
