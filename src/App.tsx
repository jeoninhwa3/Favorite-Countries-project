import { useEffect, useState } from "react";
import countryApi from "./api/countryApi";
import { Country } from "./types/countries.type";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState<Country[]>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await countryApi();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <CountryCard countries={countries || []} />
    </>
  );
}

export default App;
