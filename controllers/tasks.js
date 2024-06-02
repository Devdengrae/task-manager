const getalltasks=(req,res)=>{
    res.send("get all tasks");
}
const createtask=(req,res)=>{
    res.json(req.body);
}
const gettask=(req,res)=>{
    res.json({id:req.params.id});
}
const updatetask=(req,res)=>{
    res.send("update tasks");
}
const deletetask=(req,res)=>{
    res.send("delete tasks");
}
module.exports={getalltasks,createtask,gettask,updatetask,deletetask};