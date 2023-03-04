<template>
    <span class="time-remaining">Remaining Time</span>
    <span class="timer-flow" :style="isPlaying ? 'opacity: 1.0;' : 'opacity: 0.5'">
    {{ formattedTimeLeft }}
    </span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TimerRemaining',
    props: {
        timeLeft: {
            type: Number,
            required: true
        },
    },
    computed: {
        formattedTimeLeft() {
            const timeLeft = this.timeLeft
            let minutes = Math.floor(timeLeft / 60)
            const hours = Math.floor(minutes / 60)
            let seconds = timeLeft % 60
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            if (minutes === 60) {
                minutes = `00`
            }
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        },
        ...mapGetters([
            'timeSelected',
            'vibeSelected',
            'step',
            'isPlaying'
        ]),
    }
}
</script>
<style>
.time-remaining {
    margin-top: 10px;
    font-weight: bold;
}
.timer-flow {
    font-size: 40px;
}
</style>