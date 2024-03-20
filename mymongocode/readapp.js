const dbconnetion=require('./connectionapp');

const readdata=async()=>{
    const db=await dbconnetion();

    const result=await db.find({name:"geeta"}).toArray();
    console.log(result);
}
readdata();