import axios from "axios";
import { country } from "../types/countries.type";

const countries = async (): Promise<country[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};

export default countries;
