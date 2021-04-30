import {MongoClient} from "mongodb"

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("a") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({message: "Invalid input."});
      return;
    }

    //store in DB
    const newMessage = {
      email, name, message
    }
    console.log(process.env.MONGODB_URI)

    let connection;
    try {
      connection = await MongoClient.connect(process.env.MONGODB_URI);
      console.log(connection)
    } catch (err) {
      console.log('inside the first catch')
      console.log(err)
      res.status(500).json({message: "Internal Server Error"})
      return
    }

    const db = connection.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      res.status(201).json({message: "Success!"})
      connection.close()
      return
    } catch (error) {
      onsole.log('inside the second catch')
      res.status(500).json({message: "Internal Server Error"})
      connection.close()
      return
    }

  }
};
