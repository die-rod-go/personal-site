<script lang="ts">
  import NameCard from "../components/NameCard.svelte";
  import FadeIn from "../components/FadeIn.svelte";
  import CardWithShadow from "../components/CardWithShadow.svelte";
  import BouncingDownArrow from "../components/BouncingDownArrow.svelte";
  import Separator from "../components/Separator.svelte";
  import Card from "../components/Card.svelte";
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
  <div class="p-20 min-h-screen space-y-20">
    <FadeIn>
      <h class="text-cus-accent text-4xl">About me</h>
    </FadeIn>
    <FadeIn>
      <Card tailwind="w-2/3">
        <p class="text-cus-accent font-mono font text-2xl">
          I am a 22 year old software developer currently attending Temple
          University
        </p>
      </Card>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-end">
        <Card tailwind="w-2/3">
          <p class="text-cus-accent font-mono font text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Card>
      </div>
    </FadeIn>
    <FadeIn>
      <div>
        <Card tailwind="w-2/3">
          <p class="text-cus-accent font-mono font text-2xl">
            Blah blah blah blah blah blah more cool info about Diego
          </p>
        </Card>
      </div>
    </FadeIn>
  </div>
</body>
