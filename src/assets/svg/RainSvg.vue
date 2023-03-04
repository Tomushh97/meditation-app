<template>
      <svg :width="defaultWidth" :height="defaultHeight" viewBox="0 0 640 640" :fill="defaultColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M146.56 295.9C127.79 327.4 96 384.6 96 411.4C96 449.3 124.65 480 160 480C195.35 480 224 449.27 224 411.36C224 384.64 192.21 327.4 173.44 295.96C167.14 285.4 152.86 285.4 146.56 295.9ZM320 219.4C320 192.68 288.21 135.44 269.44 104C263.133 93.43 248.86 93.43 242.55 104C223.8 135.4 192 192.6 192 219.4C192 257.3 220.7 288 256 288C291.3 288 320 257.3 320 219.4ZM430.6 199.5C423.684 189.49 408.33 189.49 401.41 199.5C367.8 248.1 288 369.2 288 422.3C288 489.5 345.3 544 416 544C486.7 544 544 489.5 544 422.3C544 369.2 464.2 248.1 430.6 199.5Z" :fill="defaultColor"/>
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