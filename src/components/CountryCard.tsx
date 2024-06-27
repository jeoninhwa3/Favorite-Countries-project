import { CountriesProps } from "../types/countries.type";
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
`;

const StItemImg = styled.img`
  width: 100px;
`;

const StItemStrong = styled.strong`
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
`;

const StItemP = styled.p`
  font-size: 16px;
  margin-top: 15px;
`;

const CountryCard = ({ countries }: CountriesProps) => {
  return (
    <>
      <StTitle>Countries</StTitle>
      <StList>
        {countries?.map((country, idx) => (
          <StItem key={idx}>
            <StItemImg src={country.flags.png} />
            <StItemStrong>{country.name.common}</StItemStrong>
            <StItemP>{country.capital}</StItemP>
          </StItem>
        ))}
      </StList>
    </>
  );
};

export default CountryCard;
