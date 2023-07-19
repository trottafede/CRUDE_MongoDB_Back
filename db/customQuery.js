const { MongoClient, ObjectId } = require("mongodb");
const url = process.env.DB_URL; // Connection URL
const dbName = process.env.DB_NAME; // Database Name

const client = new MongoClient(url);

async function customQuery(query, { id, name, email }) {
  let result = "nothing";
  try {
    // Conectarse a la BD.
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("users");

    // Ejecutar la Query.
    switch (query) {
      case "find":
        const findResult = await collection.find({}).toArray();
        console.log("Found documents =>", findResult);
        result = findResult;
        break;

      case "create":
        const insertResult = await collection.insertOne({ name, email });
        console.log("Inserted documents =>", insertResult);
        result = await collection.findOne({ _id: insertResult.insertedId });
        break;

      case "update":
        const updateResult = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { name: name, email: email } }
        );
        console.log("Updated documents =>", updateResult);
        result = await collection.findOne({ _id: updateResult.insertedId });;
        break;

      case "destroy":
        const deleteResult = await collection.deleteMany({
          _id: new ObjectId(id),
        });
        console.log("Deleted documents =>", deleteResult);
        result = deleteResult;
        break;

      default:
        break;
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Desconectarse de la BD.
    client.close();
  }
  // Retornar el resultado.
  return result;
}

module.exports = customQuery;
