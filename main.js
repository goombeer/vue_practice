var app = new Vue({
    el: '#app',
    data:{
        show:true,
        message:'Hello',
        val:[]
    },
    watch:{
        val: function(newVal, oldVal){
        console.log(this.val);
        console.log(newVal);
        console.log(oldVal);
      }
    },
    methods:{
        handle:function(event){
            this.message = event.target.value
            console.log(this.message);
        },
        handler:function(comment){
          console.log(comment);
        }
    }
})
