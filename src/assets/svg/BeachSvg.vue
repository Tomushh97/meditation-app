<template>
      <svg :width="defaultWidth" :height="defaultHeight" viewBox="0 0 640 640" :fill="defaultColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.4 200.8L217.5 238.15C252.63 156.53 303.75 93.75 356.5 64.45C260.62 59.575 167.7 101.41 108 176.15C101.2 184.6 105.2 197.2 115.4 200.8ZM247.6 249L486.1 335.87C521.85 214.47 504.72 104.27 443.47 81.97C436.095 79.345 428.35 77.908 420.35 77.908C362.4 77.88 292.1 147.13 247.6 249ZM521.5 124.51C527.75 140.76 532.25 159.13 534.63 179.76C540.38 229.63 533.254 287.86 515.75 346.66L618.35 384.03C628.48 387.78 639.6 380.655 639.85 369.91C642.3 274.1 598 182.4 521.5 124.51ZM528 512H321L386 333.5L325.87 311.63L252.99 512.03H48C21.49 512 0 533.5 0 560C0 568.8 7.163 576 16 576H560C568.837 576 576 568.837 576 560.9C576 533.5 554.5 512 528 512Z" :fill="defaultColor"/>
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