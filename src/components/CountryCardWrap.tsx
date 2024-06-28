import { Country, SelectedCountry } from "../types/countries.type";
import CountryCard from "../components/CountryCard";
import styled from "styled-components";

const StTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const StList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
`;

const StItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;
`;

interface CountriesProps {
  countries: SelectedCountry[];
  title: string;
  setCountries: React.Dispatch<
    React.SetStateAction<SelectedCountry[] | undefined>
  >;
  isFavorite?: boolean;
}

const CountryCardWrap = ({
  title,
  countries,
  isFavorite = false,
  setCountries,
}: CountriesProps) => {
  const selectCard = (country: Country) => {
    const selectedCountry = countries?.map((prev) =>
      prev.name.common === country.name.common
        ? { ...prev, selected: !prev.selected }
        : prev
    );
    setCountries(selectedCountry);
  };
  return (
    <div>
      <StTitle>{title}</StTitle>
      <StList>
        {countries
          ?.filter((country) => country.selected === isFavorite)
          .map((country, idx) => (
            <StItem key={idx} onClick={() => selectCard(country)}>
              <CountryCard country={country} />
            </StItem>
          ))}
      </StList>
    </div>
  );
};

export default CountryCardWrap;
