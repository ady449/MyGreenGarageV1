const { MongoClient, ServerApiVersion } = require("mongodb");

const username = encodeURIComponent("user1");
const password = encodeURIComponent("user1");
const cluster = "cluster0";
const authSource = "retryWrites";
const authMechanism = "majority";

const uri = `mongodb+srv://${username}:${password}@cluster0.5icgwin.mongodb.net/?retryWrites=true&w=majority"`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
  } catch (e) {
    console.error("client can't connect to MongoDB");
    console.error("please check the username and password");
  }

  try {
    // Send a ping to confirm a successful connection
    await client.db("MyGreenGarage").command({
      renameCollection: "Garaj",
      to: "GarageCollection",
      dropTarget: false,
    });

    console.log("collection has been renamed successfully");
  } catch (error) {
    console.error(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
