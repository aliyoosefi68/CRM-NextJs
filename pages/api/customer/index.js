import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  //*
  //connect to database
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting DB" });
    return;
  }

  //POST method response
  if (req.method === "POST") {
    //in this sesion data in an object
    const data = req.body.data;
    console.log(data);

    //validation data befor send to database

    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "Invalid data" });

    //   save Data
    try {
      //this codes for make new customer
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({ status: "SUCCESS", message: "DATA created", data: customer });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "faild",
        message: "error in storing data in database",
      });
    }
  }
  //end of POST method response
}
