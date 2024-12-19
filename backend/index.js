import express from "express"
import cors from "cors"
const app = express();
app.use(cors);

app.get("/", (req,res) =>{
    res.send('ok')
})

app.listen(4000, ()=>{
    console.log('this is working')
})