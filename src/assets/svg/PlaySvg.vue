<template>
     <svg :width="defaultWidth" :height="defaultHeight" viewBox="0 0 640 640" :fill="defaultColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M176 543.98C148.6 543.98 128 521.58 128 495.98V143.98C128 118.6 148.4 96 176.01 96C184.696 96 193.36 98.352 201.03 103.031L489.03 279.031C503.3 287.78 512 303.28 512 319.98C512 336.68 503.297 352.21 489.03 360.93L201.03 536.93C193.4 541.58 184.7 543.98 176 543.98Z" :fill="defaultColor"/>
      </svg>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            required: false,
        },
        color: {
            type: String,
            required: false,
        }
    },
    computed: {
        defualtWidth() {
            return this.size
        },
        defaultHeight() {
            return this.size
        },
        defaultColor() {
            return this.color
        }
    }
}
</script>