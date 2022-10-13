const {MongoClient} = require('mongodb');
const url ='mongodb://localhost:27017';
const database= 'products'
const client = new MongoClient(url);

 async function dbconnect()
{
    let result = await client.connect();
    let db=result.db(database);
   return db.collection('products');
    //let response = await collection.find({}).toArray();
    //console.log(response);
}
//dbconnect().then((res)=>{
  //  res.find( ).toArray().then((data)=>{
          //console.warn(data)
   // })
//})


const main = async () =>{
   let data =  await dbconnect();
   data = await data.find().toArray();
   console.warn(data);
}
main();