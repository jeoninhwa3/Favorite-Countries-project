import { useEffect, useState } from "react";
import countries from "./api/countries";
import { country } from "./types/countries.type";

function App() {
  const [country, setCountry] = useState<country[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await countries();
      setCountry(data);
    };
    fetchData();
  }, []);

  console.log(country);
  return <></>;
}

export default App;
