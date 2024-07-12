<script lang="ts">
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import NameCard from "../components/NameCard.svelte";
  import FadeIn from "../components/FadeIn.svelte";
  import CardWithShadow from "../components/CardWithShadow.svelte";
</script>

<Header />
<!-- intro section -->
<main class="">
  <div class="pt-10 p-5 min-h-screen bg-cus-background">
    <FadeIn>
      <NameCard
        cardText="Hi, I'm Diego"
        subtitle="A software developer from Pennsylvania"
      />
    </FadeIn>
  </div>
  <!-- about me section -->
  <div class="p-10 bg-cus-secondary min-h-screen">
    <FadeIn>
      <h class="font-mono text-cus-background text-4xl">About me</h>
    </FadeIn>
    <div class="h-10"></div>
    <FadeIn>
      <CardWithShadow
        cardText="I am a 22 year old software developer currently attending Temple University"
      />
    </FadeIn>
    <FadeIn>
      <div class="flex justify-end mt-20">
        <CardWithShadow
          cardText="Super duper awesome cool information about Diego Rodriguez"
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
  </div>
</main>
<Footer />
