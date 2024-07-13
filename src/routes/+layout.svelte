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
<slot />
<Footer {routeColors} />

