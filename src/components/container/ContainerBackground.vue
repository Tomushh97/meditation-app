<template>
    <div class="video-container">
        <video
        v-if="vibeSelected === 'space'"
        class="video-wrapper"
        autoplay
        muted
        loop
        >
            <source :src="updateBackground"
                    type="video/mp4"
                    rel="preload"/>
        </video>
        <video
        v-if="vibeSelected === 'beach'"
        class="video-wrapper"
        autoplay
        muted
        loop
        >
            <source :src="updateBackground"
                    type="video/mp4"
                    rel="preload"/>
        </video>
        <video
        v-if="vibeSelected === 'rain'"
        class="video-wrapper"
        autoplay
        muted
        loop
        >
            <source :src="updateBackground"
                    type="video/mp4"
                    rel="preload"/>
        </video>
        <video
        v-if="vibeSelected === 'bird'"
        class="video-wrapper"
        autoplay
        muted
        loop
        >
            <source :src="updateBackground"
                    type="video/mp4"
                    rel="preload"/>
        </video>
    </div>
</template>
<script>
export default {
    computed: {
        updateBackground() {
            if (
                this.vibeSelected === 'space' ||
                this.vibeSelected === null
            )
            {
                return require("@/assets/videos/space.mp4")
            }
            else if (this.vibeSelected === 'beach')
            {
                return require("@/assets/videos/beach.mp4")
            }
            else if (this.vibeSelected === 'rain')
            {
                return require("@/assets/videos/rain.mp4")
            }
            else
            {
                return require("@/assets/videos/bird.mp4")
            }
        },
        vibeSelected() {
            return this.$store.getters['vibeSelected'].value
        }
    },
}
</script>
<style>
.video-container {
    position: absolute;
    z-index: -5;
    display: flex;
    width: 100vw;
    height: 100vh;
}
.video-wrapper {
    position: absolute;
    width: 100%;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    overflow:none
}
@media (min-aspect-ratio: 16/9) {
    .video-wrapper {
        width: 100%;
        height: auto;
    }
}
@media (max-aspect-ratio: 16/9) {
    .video-wrapper {
        width: 100%;
        height: auto;
    }
}
</style>