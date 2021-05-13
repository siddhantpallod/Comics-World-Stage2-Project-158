AFRAME.registerComponent('cursor-listener', {
    schema: {
        selectedItemId: {default: '', type: 'string'}
    },

    init: function(){
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent()
    },

    handleMouseEnterEvent: function(){
        this.el.addEventListener('mouseenter', () => {
            const id = this.el.getAttribute('id')
            const postersId = [
                'superman', 
                'spiderman',
                'caption-aero',
                'outer-space'
            ]

            if(postersId.includes(id)){
                const postersContainer = document.querySelector('#posters-container')
                postersContainer.setAttribute('cursor-listener', {
                    selectedItemId: id
                })
                this.el.setAttribute('material',{
                    color: '#1565c0',
                    opacity: 1
                } )
            }
        })
    },

    handleMouseLeaveEvent: function(){
        this.el.addEventListener('mouseleave', () => {
            const {selectedItemId} = this.data
            if(selectedItemId){
                const element = document.querySelector(`#${selectedItemId}`)
                const id = element.getAttribute('id')
                if(id === selectedItemId){
                    element.setAttribute('material', {color: 'white'})
                }
            }
        })
    }
})