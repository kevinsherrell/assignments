let axios = require('axios')

axios.get('https://api.vschool.io/kevin/todo/').then(function(response){
    console.log(response.data)
})//.catch(function(error){
   // console.log(error)
//})
let newTodo2 = {
    title: "Title here",
    description: "Description here",
    price: 20,
    imgUrl: "http://wwww.example.com/some-link-to-a-cool-photo.jpg",
    completed: false
}
axios.post('https://api.vschool.io/kevin/todo/', newTodo2).then(function(response){
    console.log(response.data)
}).catch(function(error){
    console.log(error)
})