<script lang="ts">
  import NameCard from "../components/NameCard.svelte";
  import FadeIn from "../components/FadeIn.svelte";
  import CardWithShadow from "../components/CardWithShadow.svelte";
  import BouncingDownArrow from "../components/BouncingDownArrow.svelte";
  import Separator from "../components/Separator.svelte";
</script>

<!-- intro section -->
<body class="home-colors font-mono">
  <div class="pt-10 min-h-screen">
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
  <div class="p-10 min-h-screen space-y-20">
    <FadeIn>
      <h class="text-cus-accent text-4xl">About me</h>
    </FadeIn>
    <FadeIn>
      <CardWithShadow
        tailwind="w-2/3"
        cardText="I am a 22 year old software developer currently attending Temple University"
      />
    </FadeIn>
    <FadeIn>
      <div class="flex justify-end">
        <CardWithShadow
          tailwind="w-2/3"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </FadeIn>
    <FadeIn>
      <div>
        <CardWithShadow
          tailwind="w-2/3"
          cardText="Blah blah blah blah blah blah more cool info about Diego"
        />
      </div>
    </FadeIn>
  </div>
</body>
