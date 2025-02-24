import express from "express"
import cors from "cors"
import router from "./router.js";
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"https://coaching-website-frontend.vercel.app/",
    // credentials:true
}))

app.use("/ping",(req,res)=>{
  res.send("PONG")
}) 

app.use("/lms",router)

app.all("*",(req,res)=>{ 
  res.status(404).send("OPPS!! 404 page not found")
})

const PORT = process.env.PORT || 3005;
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
