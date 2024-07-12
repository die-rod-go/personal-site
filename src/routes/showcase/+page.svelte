<script lang="ts">
  import FadeIn from "../../components/FadeIn.svelte";
  import CardWithShadow from "../../components/CardWithShadow.svelte";
  import { ChevronDown, Icon } from "svelte-hero-icons";
  import BouncingDownArrow from "../../components/BouncingDownArrow.svelte";
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
    <div class="flex justify-center bg-cus-primary">
      <div class="w-9/12 bg-cus-accent h-1" />
    </div>
  </main>
</body>
