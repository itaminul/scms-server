const express=require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const degreeRouter = require('./routes/setup/degreeRoute')
const sessoinRoute = require('./routes/setup/sessionRoute')
const admissionRoute = require('./routes/setup/admissionRoute')
const app = express()
const router = express.Router()

const dotenv  = require('dotenv')
dotenv.config()
const connectDB =  require('./db/connect.js');


const notFondMiddlewaer = require('./middleware/not-found.js')
const errorHanlderMiddlewae =  require('./middleware/error.handler.js')

//parse json objects
app.use(express.json())
//parse url encode object data send url
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    throw new Error('error')
    res.send('welcom');
})

app.use('/api/degree', degreeRouter)
app.use('/api/sessions', sessoinRoute)
app.use('/api/admissions', admissionRoute)

app.use(notFondMiddlewaer)
app.use(errorHanlderMiddlewae)

const port = process.env.PORT || 5000;



const start = async () => {
    try {
        const dbConnect = await connectDB(process.env.MONGO_URL)      
        // console.log(dbConnect)
        app.listen(port, () => {
            console.log(`server is running ${port}`);
        
        })  

    } catch (error) {
        console.log(error)
        
    }
}
start()