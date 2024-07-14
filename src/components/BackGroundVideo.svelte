<script lang="ts">
    export let videoSrc: string;
</script>

<div class="video-container">
    <video src={videoSrc} autoplay loop muted class="video"></video>
    <div class="fade-overlay"></div>
</div>

<style>
    .video-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .fade-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(
            to top,
            #080914 0%,
            #080914 10%,
            rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0) 70%,
            #080914 90%,
            #080914 100%
        );
        mix-blend-mode: normal;
    }
</style>
