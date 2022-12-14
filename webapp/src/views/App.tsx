import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Chart from './components/Chart';
import timeFrames from './timeFrames';
import config from '../config/config';
import useTickerData from '../services/useTickerData';
import '../App.css';

const App = (): JSX.Element => {
  const { ticker, tickerName } = config;
  const [timeFrame, setTimeFrame] = useState<string>(timeFrames[0].value);
  const { data, loading, error } = useTickerData(ticker, timeFrame);

  return <div className="App">
    <Container className="p-3">
      <h3>
        Coding challenge 🚀 - {tickerName} share price
      </h3>
      <div>
        {loading ?
          <p>Loading...</p>
          : error ?
            <p>Error {error?.message}</p>
            : <div>
              {timeFrames.map((item, index) => {
                return <Button
                  key={index.toString()}
                  className="time-frame-button"
                  size="sm"
                  type="button"
                  onClick={() => setTimeFrame(item.value)}
                >
                  {item.label}
                </Button>
              })}
              <Chart
                title={`Market data for ${ticker} - ${timeFrame}`}
                serieLabel={ticker}
                data={data}
              />
            </div>
        }
      </div>
    </Container>
  </div>
};

export default App;
