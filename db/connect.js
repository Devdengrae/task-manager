const mongoose=require('mongoose');

 
const connectionString='mongodb+srv://Dexter2804:Dexter2804@node-express-cluster.mrxzx8i.mongodb.net/Air-bnb?retryWrites=true&w=majority&appName=node-express-cluster'
mongoose
.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,}
)
.then(()=>console.log('connected the server to the db...'))
.catch((err)=>console.log(err));
