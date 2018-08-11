var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    data:{
       scrollY:0,
       timer:null
    },
    methods:{
        scrollTop:function(event){
            scroll.animateScroll(0)
        }
    }
})
