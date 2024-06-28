import { useEffect, useState } from "react";
import countryApi from "./api/countryApi";
import { SelectedCountry } from "./types/countries.type";
import CountryCardWrap from "./components/CountryCardWrap";
import GlobalStyles from "./GlobalStyle";
import { AxiosError } from "axios";

function App() {
  const [countries, setCountries] = useState<SelectedCountry[]>();
  const [error, setError] = useState<null | AxiosError>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const data = await countryApi();
      const newData = data.map((el) => ({ ...el, selected: false }));
      setCountries(newData);
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
        isFavorite={true}
        countries={countries || []}
        setCountries={setCountries}
      />
      <CountryCardWrap
        title="Countries"
        countries={countries || []}
        setCountries={setCountries}
      />
    </>
  );
}

export default App;
