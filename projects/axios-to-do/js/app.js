// let axios = require('axios')
axios.get('https://api.vschool.io/kevin/todo').then(function(response){
    console.log(response.data)
    document.getElementById('data').textContent = JSON.parse(response)
}).catch(function(error){
    console.log(ErrorEvent)
})
...