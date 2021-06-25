Vue.config.devtools = true

const app = new Vue ({
    el: '#app',
    data: {
        images: [
        'cane1.jpg',
        'cane2.jpg',
        'cane3.jpg',
        'cane4.jpg'
        ],
    photoIndex: 0,
    },
    created() {
        setInterval(() => {
            this.nextImage()
        }, 3000)
    },
    methods: {
        nextImage: function(){
            this.photoIndex++
            if(this.photoIndex === (this.images.length )) {
                this.photoIndex = 0
            }
        },
        prevImage: function(){
            this.photoIndex--
            if(this.photoIndex === -1) {
                this.photoIndex = this.images.length -1
            }
        },
        currentDot: function(index) {
            if(index === this.photoIndex) {
                return 'current'
            } else {
                return ''
            }
        }
    }
})