import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    res
      .status(500)
      .json({ status: "faild", message: "faild connecting to database" });
  }
  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findById({ _id: id });
      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      res
        .status(500)
        .json({ status: "faild", message: "faild connecting to database" });
    }
  }
}
