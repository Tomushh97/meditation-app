<template>
    <p>Would you like meditate in other place?</p>
    <div class="switcher">
        <span @click = "selectPreviousVibe"> {{ previousVibe }}</span>
        <span>  |  </span>
        <span @click ="selectNextVibe"> {{ nextVibe }}</span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'VibeSwitcher',
    methods: {
        selectPreviousVibe() {
            if (this.vibeSelected.value === 'space')
                this.$store.dispatch('changeVibe', { value: 'rain' })
            else if (this.vibeSelected.value === 'beach')
                this.$store.dispatch('changeVibe', { value: 'space' })
                else
                this.$store.dispatch('changeVibe', { value: 'beach' })
        },
        selectNextVibe() {
            if (this.vibeSelected.value === 'space')
                this.$store.dispatch('changeVibe', { value: 'beach' })
            else if (this.vibeSelected.value === 'beach')
                this.$store.dispatch('changeVibe', { value: 'rain' })
                else
                this.$store.dispatch('changeVibe', { value: 'space' })
        },
    },
    computed: {
        ...mapGetters([
            'vibeSelected'
        ]),
        previousVibe() {
            if (this.vibeSelected.value === 'space')
                return 'Under The Rain'
            else if (this.vibeSelected.value === 'beach')
                return 'In The Space'
            else
                return 'On The Beach'
        },
        nextVibe() {
            if (this.vibeSelected.value === 'space')
                return 'On The Beach'
            else if (this.vibeSelected.value === 'beach')
                return 'Under The Rain'
            else
                return 'In The Space'
        }
    }
}
</script>
<style scoped>
.switcher{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
span {
    display: flex;
    cursor: pointer;
    font-size: 18px;
    margin: 10px;
}
p {
    font-size: 18px;
}

</style>