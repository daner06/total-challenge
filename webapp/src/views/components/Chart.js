import React, { useEffect, useState } from 'react';
import { Chart as GChart } from 'react-google-charts';

const Chart = ({ title, serielabel, data }) => {
  const [chartData, setChartData] = useState(null);
  const options = {
    title,
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  useEffect(() => {
    const newData = data?.marketData?.map(d => {
      return [
        d.yLabel,
        d.value,
      ];
    });
    setChartData([
      ['', serielabel],
      ...newData || [],
    ]);
  }, [data]);

  return <GChart
    chartType="LineChart"
    width="100%"
    height="400px"
    data={chartData}
    options={options}
  />
};

export default Chart;