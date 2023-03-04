<template>
      <svg :width="defaultWidth" :height="defaultHeight" viewBox="0 0 640 640" :fill="defaultColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M432 127.1H400C373.49 127.1 352 148.59 352 174.2V462.2C352 488.71 373.49 510.2 400 510.2L432 512C458.51 512 480 490.51 480 464V176C480 149.49 458.5 127.1 432 127.1ZM240 127.1H208C181.49 127.1 160 148.59 160 175.1V463.1C160 490.5 181.49 512 208 512H240C266.51 512 288 490.51 288 464V176C288 149.49 266.5 127.1 240 127.1Z" :fill="defaultColor"/>
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