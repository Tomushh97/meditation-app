<template>
    <div 
    v-for="choice in filteredChoices"
    :key="choice.id"
    @click="selectChoice(choice.id)"
    class="choice-card"
    :class="hideUnselectedImg(choice.id)"
    >
        <img :src="choice.imgSrc"
            :alt="choice.name">
            <label :for="choice.name"
                    :style="fontSizeDynamic(choice.id)">
            {{ choice.name }}
            </label>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';
export default {
    props: ['size', 'mode'],
    methods: {
        hideUnselectedImg(id) {
            if (this.vibeSelected.id === id) {
                return 'img-selected'
            }
            else {
                return 'img-unselected'
            }
        },
        selectChoice(id) {
            let index = this.choices.filter(x => x.id === id);
            if (this.step === 0) {
                let timeSelecting = {
                    id: this.choices[index].id,
                    value: this.choices[index].value
                }
                this.$store.dispatch('changeTimer', timeSelecting)
                this.$store.dispatch('changeStep')
            }
            else {
                let vibeSelected = {
                    id: this.choices[index].id,
                    value: this.choices[index].value
                }
                this.$store.dispatch('changeVibe', vibeSelecting)
                this.$store.dispatch('changeStep')
                this.$store.dispatch('activeIsPlaying')
            }
        },
        fontSizeDynamic(id) {
            if (this.timeSelected.id === id || this.vibeSelected.id === id) {
                return 'font-weight: bold'
            }
            else {
                return 'font-weight: normal'
            }
        },
    },
    computed: {
        filteredChoices() {
            return this.choices.filter(choice => {
                if(this.mode === 'timer' && choice.category.includes('timer'))
                {
                    return true
                }
                if (this.mode === 'vibe' && choice.category.includes('vibe'))
                {
                    return true
                }
            })
        }
    },
    ...mapGetters([
        'timeSelected',
        'vibeSelected',
        'step',
        'choices'
    ])
}
</script>
<style scoped>
.choice-card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
}
.img-selected {
    display:none;
}
img:hover {
    opacity: 1;
}
img {
    opacity: 0.5;
    height: 100px;
    width: 150px;
}
.img-unselected {
    border-style: none;
}
label {
    margin-top: 10px;
}
</style>