export default {
    changeTimer(state, time) {
        state.timeSelected = time
    },
    changeVibe(state, vibe) {
        state.vibeSelected = vibe
    },
    changeStep(state) {
        state.step++
    },
    activeIsPlaying(state) {
        state.isPlaying = true
    },
    togglePlayPause(state) {
        state.isPlaying =! state.isPlaying
    },
}