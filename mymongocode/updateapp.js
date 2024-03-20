const dbconnetion=require('./connectionapp');

const updatedata=async()=>{
    const db=await dbconnetion();

    // const result=await db.updateOne({name:"mohan"}, {$set:{name:"sonu kumar"}});
    const result=await db.updateMany({}, {$set:{name:"sonu kumar"}});

    console.log(result);
}
updatedata();