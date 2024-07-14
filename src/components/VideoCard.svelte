<script>
    export let videoSrc = "";
    export let tailwind = "";
</script>

<div class="relative max-w-fit {tailwind}">
    <div class="bg-cus-primary p-2 w-fit relative z-10 right-0">
        <video class="h-96 z-10" autoplay loop>
            <source src={videoSrc} type="video/mp4" />
            <track kind="captions" />
        </video>
    </div>
    <div
        class="bg-cus-secondary absolute top-5 left-5 p-16 h-full w-full"
    ></div>
</div>
