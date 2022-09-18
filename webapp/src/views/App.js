import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, ButtonGroup } from 'react-bootstrap';
import Chart from './components/Chart';
import { timeFrames } from './timeFrames';
import '../App.css';
import config from '../config/config';
import useTickerData from '../services/useTickerData';

const App = () => {
  const { ticker, tickerName } = config;
  const [timeFrame, setTimeFrame] = useState(timeFrames[0].value);
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
                timeFrame={timeFrame}
                title={`Market data for ${ticker} - ${timeFrame}`}
                serielabel={ticker}
                data={data}
              />
            </div>
        }
      </div>
    </Container>
  </div>
};

export default App;
