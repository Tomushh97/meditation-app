<template>
<main class="app">
  <ContainerPopUp/>
  <ContainerBackground/>
  <SoundEffects/>
  <ContainerTimer/>
  <ContainerLinks/>

</main>
</template>

<script>
import ContainerPopUp from '@/components/container/ContainerPopUp'
import ContainerBackground from '@/components/container/ContainerBackground'
import SoundEffects from '@/components/SoundEffects'
import ContainerTimer from '@/components/container/ContainerTimer'
import ContainerLinks from '@/components/container/ContainerLinks'

export default {
  name: 'App',
  components: {
    ContainerPopUp,
    ContainerBackground,
    SoundEffects,
    ContainerTimer,
    ContainerLinks
  }
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #9299a0;
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
