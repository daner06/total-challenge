import React, { useEffect, useState } from 'react';
import { Chart as GChart } from 'react-google-charts';

interface IProps {
  title: string,
  serieLabel: string,
  data: {
    marketData: Array<any>,
  },
};

const Chart: React.FC<IProps> = ({ title, serieLabel, data }) => {
  const [chartData, setChartData] = useState<any>(null);
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
      ['', serieLabel],
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
