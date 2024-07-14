<script lang="ts">
    import { ChevronRight, ChevronLeft, Icon } from "svelte-hero-icons";
    export let images: string[];
    let index = 0;

    function incrementIndex() {
        index++;
        if (index > images.length - 1) index = 0;
    }
    function decrementIndex() {
        index--;
        if (index < 0) index = images.length - 1;
    }
</script>

<div class="flex items-center">
    <button on:click={decrementIndex}>
        <Icon
            src={ChevronLeft}
            class="text-cus-secondary size-16 hover:text-cus-accent"
        />
    </button>
    <img src={images[index]} alt="" />
    <button on:click={incrementIndex}>
        <Icon
            src={ChevronRight}
            class="text-cus-secondary size-16 hover:text-cus-accent"
        />
    </button>
</div>
