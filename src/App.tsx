import { useEffect, useState } from "react";
import countryApi from "./api/countryApi";
import { Country } from "./types/countries.type";
import CountryCardWrap from "./components/CountryCardWrap";
import GlobalStyles from "./GlobalStyle";
import { AxiosError } from "axios";

function App() {
  const [countries, setCountries] = useState<Country[]>();
  const [error, setError] = useState<null | AxiosError>(null);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>();

  const fetchData = async (): Promise<void> => {
    try {
      const data = await countryApi();
      setCountries(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(error);
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <CountryCardWrap
        title="Favorite Countries"
        selectedCountries={selectedCountries || []}
      />
      <CountryCardWrap title="Countries" countries={countries || []} />
    </>
  );
}

export default App;
