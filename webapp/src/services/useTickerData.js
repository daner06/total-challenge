import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { HISTORY_DATA } from './graphQL/queries';
import config from '../config/config';

const useTickerData = (ticker, timeFrame) => {
  const [newData, setNewData] = useState(null);
  const { loading, error, data } = useQuery(HISTORY_DATA, {
    variables: { timeFrame },
    pollInterval: config.pollInterval,
  });

  useEffect(() => {
    if (data !== undefined) {
      const myNewData = data.marketData.filter(d => d.timeFrame === timeFrame).map(d => {
        return {
          yLabel: d.yLabel,
          value: d.value,
        };
      });
      setNewData(myNewData);
    }
  }, [data]);

  return { data: newData, loading, error };
};

export default useTickerData;
