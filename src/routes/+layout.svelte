<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import { getRouteColors } from "$lib/RouteStyling";
  // Retrieve the color palette for this route
  $: routeColors = getRouteColors($page.url.pathname);
</script>

<Header {routeColors} />
<div class="h-full w-full">
  <div
    class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_200%)]"
  ></div>
</div>
<main class="bg-cus-background {routeColors} text-cus-accent font-mono">
  <slot />
</main>
<Footer {routeColors} />
