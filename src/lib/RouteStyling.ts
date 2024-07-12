import { page } from "$app/stores";

export function getRouteColors(route: string): string {
  const routeNoLeadingSlash = route.replace("/", "");
  let colors = "";
  if (routeNoLeadingSlash === "") colors = "home-colors";
  else colors = routeNoLeadingSlash + "-colors";

  return colors;
}
