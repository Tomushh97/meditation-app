<template>
<div v-if="step < 2" class="overlay">
    <div class="popup">
        <PraySvg
        size="80"
        color="white"/>
        <h1>Welcome to<br> Vibe Meditation App</h1>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import PraySvg from '@/assets/svg/PraySvg';
import ContainerSelector from '@/components/container/ContainerSelector';
import Selector from '@/components/Selector';
export default {

}
</script>
<style>
</style>