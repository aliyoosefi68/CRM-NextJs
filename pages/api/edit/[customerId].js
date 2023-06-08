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
  //patch request
  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;

    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();

      customer.save();

      res.status(200).json({ status: "success", message: "data apdated" });
    } catch (err) {
      res
        .status(500)
        .json({ status: "faild", message: "database apdatd data error" });
    }
  }
}
