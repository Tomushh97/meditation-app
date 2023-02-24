<template>
<section class="selector-container">
    <h3>
        {{  question }}
    </h3>
    <div class="selector-wrapper">
        <slot></slot>
    </div>
</section>
</template>
<script>
export default {
    props: ['question']
}
</script>
<style>
.selector-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: center;
}
h3, .selector-container {
    margin-bottom: 50px;
}
.selector-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}
</style>