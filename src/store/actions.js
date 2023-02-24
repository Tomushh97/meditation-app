export default {
    changeTimer(context, time) {
        context.commit('changeTimer', time)
    },
    changeVibe(context, vibe) {
        context.commit('changeVive', vibe)
    },
    changeStep(context) {
        context.commit('changeStep')
    },
    activeIsPlaying(context) {
        context.commit('activeIsPlaying')
    },
    togglePlayPause(context) {
        context.commit('togglePlayPause')
    }
}