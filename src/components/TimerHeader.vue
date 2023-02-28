<template>
<div v-show="vibeSelected === 'space'"
class="icon-header">
<SpaceSvg size="40" color="white"/>
<h1>Meditation <br>In the Space</h1>
</div>
<div v-show="vibeSelected === 'beach'" class="icon-header">
    <BeachSvg size="40" color="white"/>
    <h1>Meditation <br>On the Beach</h1>
</div>
<div v-show="vibeSelected === 'rain'" class="icon-header">
    <RainSvg size="40" color="white"/>
    <h1>Meditation <br>Under the Rain</h1>
</div>
<div v-show="vibeSelected === 'alarm'" class="icon-header">
    <RainSvg size="40" color="white"/>
    <h1>Meditation <br>Finished</h1>
</div>
</template>
<script>
import SpaceSvg from '@/assets/svg/SpaceSvg'
import BeachSvg from '@/assets/svg/BeachSvg'
import RainSvg from '@/assets/svg/RainSvg'
export default {
    name: 'TimerHeader',
    components: {
        BeachSvg,
        SpaceSvg,
        RainSvg

    }
}
</script>
<style scoped>
.icon-header {
    min-height: 40px;
}
h1 {
    margin-bottom: 30px;
    margin-top:0px;
}
</style>