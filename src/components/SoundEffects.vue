import { default } from './StepSelector.vue';
<template>
    <audio :src="updateSound" preload="auto" autoplay loop ref="audioPlayer"></audio>
</template>

<script>
export default {
    name: 'SoundEffects',
    computed: {
        updateSound() {
            if (this.vibeSelected === 'space')
                return require("@/assets/sounds/space.mp3")
            else if (this.vibeSelected === 'beach')
                return require("@/assets/sounds/beach.mp3")
            else if (this.vibeSelected === 'rain')
                return require("@/assets/sounds/rain.mp3")
            else
                return require("@/assets/sounds/relaxMeditation.mp3")
            
        },
        vibeSelected() {
            return this.$store.getters['vibeSelected'].value
        }
    }
}
</script>