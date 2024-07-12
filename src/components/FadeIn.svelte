<script lang="ts">
  const threshold = 0.5;
  const fadeInSpeed = 700;
  let inView = false;
  function actionWhenInViewport(e: Element) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        inView = true;
      }
    }, options);

    observer.observe(e);
  }
</script>

<div
  class="transition-opacity ease-in duration-500"
  class:opacity-0={!inView}
  class:opacity-100={inView}
  use:actionWhenInViewport
>
  <slot />
</div>
