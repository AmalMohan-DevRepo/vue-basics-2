const app = Vue.createApp({
    data(){
        return{
            inputText:'',
            confirmedText:''
        }
    },
    methods: {
        showAlert(){
            alert('Hi from Vue')
        },
        handleUserInput(e){
            this.inputText = e.target.value
        },
        handleInput(e){
            this.confirmedText=e.target.value
        }
    }
})

app.mount('#assignment')