<script>
  import { page } from "$app/stores";

  const colors = $page.url.pathname.replace("/", "") + "-colors";
</script>

<div>{colors}</div>
<slot {colors} />
