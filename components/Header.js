import styled from 'styled-components';


const Landing = styled.div`
    box-shadow: -8px -4px 8px 0px #ffffff, 
                8px 4px 12px 0px #d1d9e6, 
                4px 4px 4px 0px #d1d9e6 inset, 
                -4px -4px 4px 0px #ffffff inset;
    height: auto;
    margin: 20px 15px 20px 15px;
    padding: 20px 44px;
    border-radius: 30px;
    background-color: #e9e9e9;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: #261b28;
  text-decoration: underline;
  padding:;
  text-shadow: 0px 0px 4px rgba(255,238,0,0.34);
`;
const Summary = styled.h4`
  font-size: 1.2em;
  text-align: left;
  color: #261b28;
  text-decoration: underline;
  text-shadow: 0px 0px 4px rgba(255,238,0,0.34);
`;


export default function Header() {
  return (
    <Landing>
      <Title>
        Coronavirus (Covid-19)

      </Title>
      <Summary><i>Virus Tracker</i></Summary>

    </Landing>
  );
}