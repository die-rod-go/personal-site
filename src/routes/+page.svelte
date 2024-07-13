<script lang="ts">
  import NameCard from "../components/NameCard.svelte";
  import FadeIn from "../components/FadeIn.svelte";
  import CardWithShadow from "../components/CardWithShadow.svelte";
  import BouncingDownArrow from "../components/BouncingDownArrow.svelte";
  import Separator from "../components/Separator.svelte";
</script>

<!-- intro section -->
<body class="home-colors font-mono">
  <main>
    <div class="pt-10 min-h-screen bg-cus-background">
      <FadeIn>
        <div class="p-5">
          <NameCard
            cardText="Hi, I'm Diego."
            subtitle="A software developer from Pennsylvania"
          />
        </div>
      </FadeIn>
      <BouncingDownArrow />
    </div>
    <!-- about me section -->
    <div class="p-10 bg-cus-background min-h-screen">
      <FadeIn>
        <h class="text-cus-accent text-4xl">About me</h>
      </FadeIn>
      <div class="h-24"/>
      <FadeIn>
        <CardWithShadow
          cardText="I am a 22 year old software developer currently attending Temple University"
        />
      </FadeIn>
      <FadeIn>
        <div class="flex justify-end mt-20">
          <CardWithShadow
            tailwind="max-w-4xl"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </FadeIn>
      <FadeIn>
        <div class="mt-20">
          <CardWithShadow
            cardText="Blah blah blah blah blah blah more cool info about Diego"
          />
        </div>
      </FadeIn>
      <div class="h-40"/>
    </div>
  </main>
</body>
