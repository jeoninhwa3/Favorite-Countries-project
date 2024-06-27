import axios from "axios";
import { Country } from "../types/countries.type";

const countryApi = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>(
    "https://restcountries.com/v3.1/all"
  );
  return response.data;
};

export default countryApi;
