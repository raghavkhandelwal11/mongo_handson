const {MongoClient} = require("mongodb");

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";


const client = new MongoClient(url);



async function main() {
    await client.connect();
    const database = client.db("Human_Resources");
    const collection = database.collection("employee");

    const ans1 = await collection.find({}).toArray();

    const ans2 = await collection.find({
        "salary": { $gt : "30000"}
    }).toArray();

    const ans3 = await collection.find({
        "overallExp": { $gt : "2"}
    }).toArray();

    const ans4 = await collection.find({
        $and : [
          {"yearGrad": { $gt : "2015"} },
          {"overallExp": { $gt : "1"} }
        ]
      }).toArray();


    const ans5 = await collection.updateMany(
        {"salary" : { $lt : "30000" } },
        { 
            $set : {
                 "salary": "30000"
            } 
        }
    );


    const ans6 = await collection.deleteMany({ "lastCompany": "Y" });

    console.log("answer 1", ans1);
    console.log("answer 2", ans2);
    console.log("answer 3", ans3);
    console.log("answer 4", ans4);
    console.log("answer 5", ans5);
    console.log("answer 6", ans6);
}


main();