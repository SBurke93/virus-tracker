import { useState } from 'react';
import useStats from "../utils/useStats";
import Stats from './Stats';
import styled from 'styled-components';

const Select = styled.select`
  width: 90%;
  height: 35px;
  background: white;
  color: #261b28;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 0;


  option {
    color: #261b28;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;



export default function CountrySelector() {
    const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('IRL');
    if (loading) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <h4>Currently Showing <h3>({selectedCountry})</h3></h4>
            <Select
                onChange={e => {
                    setSelectedCountry(e.target.value);
                }}
            >

                {Object.entries(countries.countries).map(([country, code]) => (
                    <option
                        selected={selectedCountry === countries.iso3[code]}
                        key={code}
                        value={countries.iso3[code]}
                    >
                        {country}
                    </option>
                ))}
            </Select>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    );
}