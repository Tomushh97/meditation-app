<template>
      <svg :width="defaultWidth" :height="defaultHeight" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M320 140C220.4 140 140 220.4 140 320C140 399.2 191.6 466.4 263.6 490.4C273.2 491.6 275.6 486.8 275.6 482V450.8C225.2 461.6 214.4 426.8 214.4 426.8C206 406.4 194 400.4 194 400.4C177.2 389.6 195.2 389.6 195.2 389.6C213.2 390.8 222.8 407.6 222.8 407.6C238.4 435.2 264.8 426.8 275.6 422C276.8 410 281.6 402.8 287.6 398C248 393.2 206 377.6 206 309.2C206 290 213.2 273.2 224 261.2C221.6 256.4 215.6 238.4 225.2 213.2C225.2 213.2 240.8 208.4 274.4 231.2C288.8 227.6 304.4 225.2 320 225.2C335.6 225.2 351.2 227.6 365.6 231.2C400.4 208.4 414.8 213.2 414.8 213.2C424.4 238.4 418.4 256.4 416 261.2C428 273.2 434 290 434 309.2C434 378.8 392 393.2 352.4 398C358.4 404 364.4 414.8 364.4 431.6V480.8C364.4 485.6 368 491.6 376.4 489.2C448.4 465.2 498.8 398 498.8 318.8C500 220.4 419.6 140 320 140Z" :fill="defaultColor"/>
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