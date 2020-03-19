import styled from 'styled-components';
import useStats from "../utils/useStats";

// const Box = styled.div`
// box-shadow: -6px -6px 9px #ffffff, 6px 6px 9px rgba(0, 0, 0, 0.4);
// max-width: 1010px;
// margin: 20px auto 0 auto;
// border-radius: 20px;
// backgrond-color: #e9e9e9;
// `;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  background-color: #e9e9e9;
  margin: 20px 1.9rem 2rem 1.9rem;

`;

const StatBlock = styled.div`
  font-size: 1.3rem;
  background-color: #e9e9e9;
  padding: 0 1rem 1rem 1rem;
  border-radius: 16px;
  box-shadow: 4px 4px 4px 0px #d1d9e6 inset, 
              -4px -4px 4px 0px #ffffff inset;
}
`;

const TitleConfirmed = styled.h3`
  font-size: 1em;
  text-align: center;
  color: #ffa502;
`;
const TitleDeaths = styled(TitleConfirmed)`
  color: #fc5c65;
`;
const TitleRecovered = styled(TitleConfirmed)`
  color: #1dd1a1;
`;


export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      <StatGrid>
        <StatBlock>
          <TitleConfirmed>Confirmed:</TitleConfirmed>
          <span>{stats.confirmed.value}</span>
        </StatBlock>
        <StatBlock>
          <TitleDeaths>Deaths: </TitleDeaths>
          <span>{stats.deaths.value}</span>
        </StatBlock>
        <StatBlock>
          <TitleRecovered>Recovered:</TitleRecovered>
          <span>{stats.recovered.value}</span>
        </StatBlock>
      </StatGrid>
    </div>
  );
}