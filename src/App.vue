<template>
<main class="app">
  <ContainerPopUp/>
  <ContainerBackground/>
  <SoundEffects/>
</main>
</template>

<script>
import ContainerPopUp from '@/components/container/ContainerPopUp'
import ContainerBackground from '@/components/container/ContainerBackground'
import SoundEffects from '@/components/SoundEffects'

export default {
  name: 'App',
  components: {
    ContainerPopUp,
    ContainerBackground,
    SoundEffects
  }
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
