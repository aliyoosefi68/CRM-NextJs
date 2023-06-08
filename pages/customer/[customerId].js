import CustomerDetails from "@/components/template/CustomerDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CustomerDetailspage = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);

  if (data) return <CustomerDetails data={data} />;
};

export default CustomerDetailspage;
