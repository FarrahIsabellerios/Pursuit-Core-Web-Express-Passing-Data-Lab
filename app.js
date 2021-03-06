const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3000
const axios = require("axios")

app.get("api", async (req,res)=>{
let movies = await axios.get("url")
res.json({success:200,
movies: movies.data})

})

// when you put in hhttps api you get //> movies array: {}

//app.get("/people", (req, res)=>{
//     res.json
//     (people)
// })
//localhost:3000/gif/?search=spongebob

let gif = [];
let pics = [];

app.get("/gif/:search", async (req, res)=>{
  let search = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=cgleorv3rf6dyPcaDbufB1cz1CLl1Rbx&q=${req.params.search}&limit=25&offset=0&rating=G&lang=en`)
  let image = search.data.data
  image.map((el)=>{
     gif.push(el.url)
  }) 
  res.json(gif)
})
let urlOb ={
    urlOne: `https://pixabay.com/api/?key=14881684-b10b99ee94e4e5d732a3c36b2&q=`,
    urlTwo: "",
    urlThree: `&image_type=photo`
}
app.get("/image/:search", async (req, res)=>{
    urlOb.urlTwo = req.params.search
    let search = await axios.get(Object.values(urlOb).join("")) // console.log(search)
    let image = search.data.hits
  image.map((el)=>{
    pics.push(el.largeImageURL)  
  })

    res.json(pics)
  })



//https://pixabay.com/api/?key=14881684-b10b99ee94e4e5d732a3c36b2&q=*******&image_type=photo


app.get("/",(req,res)=>{
    res.send("You made a request at /url")
})









app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



// app.get("/math/sub/:idOne/:idTwo",(req,res)=>{
//     let numOne = parseInt(req.params.idOne)
//     let numTwo = parseInt(req.params.idTwo)
//     math.sub["num1"] = numOne
//     math.sub["num2"] = numTwo
//     math.sub["answer"] = numTwo - numTwo
//     res.json(math.sub)
// })