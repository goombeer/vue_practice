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
      ],
      order:false
    },
    computed:{
      sorted: function(){
        if(this.order){
            $('.change').text("昇順にする");
        } else {
            $('.change').text("降順にする");
        }
        return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
      },  
      matched: function(){
          return this.list.filter(function(el){
              return el.price <= this.budget
          },this)
      },
      limited: function(e){
          return this.sorted.slice(0,this.limit)
      }
    }
})
