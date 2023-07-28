const { createApp } = Vue;

createApp({
    data() {
        return {
            perspective: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            console.log('demo')
            this.perspective = 0;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        async copyToClipboard() {
            let text = `transform: ${this.customStyle.transform}`
            await navigator.clipboard.writeText(text);
            console.log('CSS Copied to Clipboard!')
        }
    },
    computed: {
        customStyle() {
            return {
                'transform': `
                    perspective(${this.perspective + 'px'}) 
                    rotateX(${this.rotateX + 'deg'}) 
                    rotateY(${this.rotateY + 'deg'}) 
                    rotateZ(${this.rotateZ + 'deg'})
                `
            }
        }
    }
}).mount('#app');