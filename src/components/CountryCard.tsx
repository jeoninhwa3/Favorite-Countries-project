import { countriesProps } from "../types/countries.type";

const CountryCard = ({ countries }: countriesProps) => {
  return (
    <>
      <h2>Countries</h2>
      <ul>
        {countries?.map((country, idx) => (
          <li key={idx}>
            <img src={country.flags.png} />
            <strong>{country.name.common}</strong>
            <p>{country.capital}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryCard;
