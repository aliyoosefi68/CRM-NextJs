import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    res
      .status(500)
      .json({ status: "faild", message: "Error in connectin database" });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res
        .status(200)
        .json({ status: "SUCCESS", message: "delete customer success" });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "faild", message: "error in delete Data" });
    }
  }
}
