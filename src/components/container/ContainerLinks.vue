<template>
    <div v-if="step === 3" class="container-end">
        <PraySvg size="60" :color="'white'"/>
        <h2>Your Meditation is over!</h2>
        <span>Made with Love <br> by Tomasz Golec</span>
        <div container-network>
            <a href="http:github.com"
            class="icon-network"
            target="_blank">
        <GithubSvg size="80" :color="'white'"/>
        <span>Github</span>
        </a>
            <a href="http://linkedin.com"
            class="icon-network"
            target="_blank">
        <LinkedInSvg size="80" :color="'white'"/>
        <span>LinkedIn</span>
        </a>
            <a href=""
            class="icon-network"
            target="_blank">
        <span>Portfolio</span>
        </a>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PraySvg from '@/assets/svg/PraySvg';
import GithubSvg from '@/assets/svg/GithubSvg';
import LinkedInSvg from '@/assets/svg/LinkedInSvg';

export default {
    name: 'ContainerLinks',
    components: {
        PraySvg,
        GithubSvg,
        LinkedInSvg
    },
    methods: {
        linkTo() {
            this.$router.push('')
        }
    },
    computed: {
        ...mapGetters([
            'step',
        ]),
    }
}
</script>
<style>
.container-end {
    color: white;
    width: auto;
    height: auto;
    padding: 50px;
    background-color: rgba(5, 5, 5, 0.9);
    border-radius: 15px;
    box-shadow: 1px 1px rgba(255, 255, 255, 0.2);
}
.container-network {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:20px
}
.icon-network {
    display:flex;
    flex-direction: column;
    cursor: pointer;
}
a {
    text-decoration: none;
    color: white;
}
</style>