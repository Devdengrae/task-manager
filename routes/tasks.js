const express=require('express');
// const router=express.Router();

// router.route('/').get((req,res)=>{
// res.send("router get");
// })
// module.exports=router; 
const router=express.Router();
const {getalltasks,createtask,gettask,updatetask,deletetask}=require('../controllers/tasks');
router.route('/').get(getalltasks).post(createtask);
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask);

module.exports=router;