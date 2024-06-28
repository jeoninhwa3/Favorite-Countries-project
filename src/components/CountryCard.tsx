import { Country } from "../types/countries.type";
import styled from "styled-components";

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

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <>
      <StItemImg src={country.flags.png} />
      <StItemStrong>{country.name.common}</StItemStrong>
      <StItemP>{country.capital}</StItemP>
    </>
  );
};

export default CountryCard;
