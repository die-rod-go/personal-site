<script lang="ts">
  import FadeIn from "../../components/FadeIn.svelte";
  import CardWithShadow from "../../components/CardWithShadow.svelte";
  import BouncingDownArrow from "../../components/BouncingDownArrow.svelte";
  import Separator from "../../components/Separator.svelte";
</script>

<body class="showcase-colors font-mono">
  <main class="bg-cus-background">
    <div class="pt-10 min-h-screen bg-cus-background relative">
      <FadeIn>
        <div class="p-5">
          <CardWithShadow
            tailwind="w-1/2 ml-16 mt-40"
            cardText="Below are some projects of mine. Some finished, some not. Feel free to look around."
          />
        </div>
      </FadeIn>
      <BouncingDownArrow />
    </div>
  </main>
</body>
