import { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import Header from '../components/Header';



const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #e9e9e9;
    text-align: center;

  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    height: auto;
    overflow: auto;
}
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <div class="container">
        <Header></Header>
        <h1>Worldwide:</h1>
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <br></br>
        <h2>Selected Country:</h2>
        <CountrySelector></CountrySelector>
      </div>
    </div>
  );
}