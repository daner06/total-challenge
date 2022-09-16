import React, { useState } from 'react';
import Chart from './components/Chart';
import { timeFrames } from './timeFrames';
import '../App.css';
import config from '../config/config';
import useTickerData from '../services/useTickerData';

const App = () => {
  const [timeFrame, setTimeFrame] = useState(timeFrames[0].value);
  const { data, loading, error } = useTickerData(config.ticker, timeFrame);

  return <div className="App">
    <header className="App-header">
      <p>
        Coding challenge 🚀 - TotalEnergies share price
      </p>
      <div>
        {loading ?
          <p>Loading...</p>
          : error ?
            <p>Error {error?.message}</p>
            : <div>
              <p>{timeFrame}</p>
              <div className="frame-selector">
                {timeFrames.map((item, index) => {
                  return <button
                    key={index.toString()}
                    className="time-frame"
                    type="button"
                    onClick={() => setTimeFrame(item.value)}
                  >
                    {item.label}
                  </button>
                })}
              </div>
              <Chart
                timeFrame={timeFrame}
                title={`Market data for ${config.ticker} - ${timeFrame}`}
                serielabel={config.ticker}
                data={data}
              />
            </div>
        }
      </div>

    </header>
  </div>
};

export default App;
