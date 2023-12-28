const MongoClient=require('mongodb').MongoClient
const url =process.env.URL_DB;
const client = new MongoClient('mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/');
async function getPost(req,resp) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('note');
    let collection=db.collection('myNotes')
    console.log("database connected")
    resp.json(await collection.find());
  }
module.exports=getPost;