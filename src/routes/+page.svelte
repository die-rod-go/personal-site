<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />
<div class="min-h-screen bg-cus-background">
  <main class="pt-10 p-5">
    <div class="relative max-w-fit ml-16 mt-36">
      <div class="bg-cus-primary p-16 w-fit relative z-20">
        <p class="text-cus-secondary font-mono font text-9xl">Hi, I'm Diego.</p>
      </div>
      <div
        class="bg-cus-secondary absolute top-5 left-5 p-16 h-full w-full"
      ></div>
    </div>
    <p class="font-mono ml-16 mt-10 text-3xl text-cus-secondary">
      A software developer from Pennsylvania
    </p>
  </main>
</div>
<Footer />
