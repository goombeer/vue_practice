var app = new Vue({
    el: '#app',
    data:{
      width:100,
      height:100,
      scrollY:0,
      timer:null 
    },
    computed:{
      halfwidth:{
          get:function(){ return this.width / 2},
          set:function(val){
              this.width = val*2
          }  
      },
      halfheight: function(){
          return this.height / 2
      },
      halfpoint:function(){
          return {
              x:this.halfwidth,
              y:this.halfheight
          }
      }
    }
})
