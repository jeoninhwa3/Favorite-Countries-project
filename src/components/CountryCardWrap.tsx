import { CountriesProps, Country } from "../types/countries.type";
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

const CountryCardWrap = ({ title, countries }: CountriesProps) => {
  const SelectCard = () => {};
  return (
    <div>
      <StTitle>{title}</StTitle>
      <StList onClick={SelectCard}>
        {countries?.map((country, idx) => (
          <StItem key={idx}>
            <CountryCard country={country} />
          </StItem>
        ))}
      </StList>
    </div>
  );
};

export default CountryCardWrap;
