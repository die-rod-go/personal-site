<script lang="ts">
  import FadeIn from "../../components/FadeIn.svelte";
  import CardWithShadow from "../../components/CardWithShadow.svelte";
  import BouncingDownArrow from "../../components/BouncingDownArrow.svelte";
  import Spider from "$lib/assets/cave-game/spider-showcase.mp4";
  import Cliff from "$lib/assets/cave-game/cliff-showcase.mp4";
  import Worm from "$lib/assets/cave-game/worm-showcase.mp4";
  import VideoCard from "../../components/VideoCard.svelte";
  import Idle from "$lib/assets/cave-game/idle.mp4";
  import BackGroundVideo from "../../components/BackGroundVideo.svelte";
  import ImageCarousel from "../../components/ImageCarousel.svelte";
  import RunningRight from "$lib/assets/cave-game/run-right.gif";
  import JumpingRight from "$lib/assets/cave-game/jump-right.gif";
  import Card from "../../components/Card.svelte";
</script>

<div class="pt-10 min-h-screen relative">
  <FadeIn>
    <div class="p-5">
      <CardWithShadow
        tailwind="w-2/3 ml-16 mt-40"
        cardText="Blah blah blah. Here's some miscellaneous projects of mine! Blah blah blah blah Some are finished, some are not. Feel free to look around. Idk I need to add more to this blurb."
      />
    </div>
  </FadeIn>
  <BouncingDownArrow />
</div>
<div class="mt-32">
  <BackGroundVideo videoSrc={Idle} />
</div>
<div class="p-20">
  <div class="space-y-20">
    <div class="flex items-center">
      <VideoCard videoSrc={Cliff} />
      <p class="m-10 text-xl w-1/3 text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div class="flex justify-end items-center">
      <p class="m-5 text-xl w-1/2 text-right">
        Lorem ipsum dolor sit amet, soluta euripidis elaboraret vix eu, has
        ceteros intellegat ea. Id fugit intellegebat sed, latine regione
        consequat eos ut. Eu aliquip tibique fierent vel, stet doctus nec in, no
        movet euripidis reprehendunt quo. Duo an tantas laoreet, id illud
        appetere scripserit duo, eu est habeo docendi maiestatis. Veniam nemore
        vel eu, per ne audire vivendum, pro an augue option instructior. Cu
        diceret invidunt eleifend eum, dictas nostrud in pri.
      </p>
      <VideoCard videoSrc={Worm} />
    </div>
    <div class="flex items-center">
      <VideoCard videoSrc={Spider} />
      <p class="m-10 text-xl w-1/2 text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <ImageCarousel images={[RunningRight, JumpingRight]} />
  </div>
</div>
