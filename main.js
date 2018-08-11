var app = new Vue({
    el: '#app',
    data:{
      budget:300,
      limit:2,
      list:[
        {id: 1, name: 'apple', price: 300},
        {id: 2, name: 'orange', price: 100},
        {id: 3, name: 'cake', price: 200},
        {id: 4, name: 'banana', price: 400},
        {id: 5, name: 'grape', price: 500},
      ]
    },
    computed:{
      matched: function(){
          return this.list.filter(function(el){
              return el.price <= this.budget
          },this)
      },
      limited: function(){
          return this.matched.slice(0,this.limit)
      }
    },
    methods: {
        methodsData: function(){ return Math.random }
    }
})
