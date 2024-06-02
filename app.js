// const express=require('express');
// const app=express();
// const routes=require('/routes/tasks');

// app.use('/api/v1/tasks',route);
// const port=3000;

// console.log('the task manager');

// const express=require('express');
// const app=express();
// app.get('/hello',(req,res)=>{
//     res.send('task manager');
// })

// const port=3000;
// app.listen(port,console.log(`server is listening on port ${port}`))


// 
require('./db/connect');
const express=require('express');
const app=express();
const tasks=require('./routes/tasks');

// middleware  
//  to get the data in req. body
app.use(express.json());
app.get('/',(req,res)=>{ 
    res.send("main page");
})
app.get('/hello',(req,res)=>{
        res.send("node js aagyi bhai ko");
})
app.use('/api/v1/tasks',tasks);
const port=3000;
app.listen(port,console.log(`server is listening at ${port}`));
