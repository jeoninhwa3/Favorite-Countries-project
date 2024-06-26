import { useEffect, useState } from "react";
import countryApi from "./api/countryApi";
import { country } from "./types/countries.type";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState<country[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await countryApi();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <CountryCard countries={countries} />
    </>
  );
}

export default App;
