var app = new Vue({
    el: '#app',
    data:{
        preview:''
    },
    methods:{
        handleChange:function(event){
            console.log(event.target.files[0].type);
            let file = event.target.files[0];
            if (file && file.type.match(/^image\/(png|jpeg)$/)){
                this.preview = window.URL.createObjectURL(file);
            }
        }
    }
})
