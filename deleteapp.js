const dbconnetion=require('./connectionapp');

const deletedata=async()=>{
    const db=await dbconnetion();
    // const result =await db.deleteOne({roll_no:5});
    const result =await db.deleteMany({roll_no:5});
    console.log(result);

    
}
deletedata();
