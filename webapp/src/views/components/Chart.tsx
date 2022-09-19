import { useEffect, useState } from 'react';
import { Chart as GChart } from 'react-google-charts';

interface ChartProps {
  title: string,
  serieLabel: string,
  data: {
    marketData: Array<any>,
  },
};

const Chart = ({ title, serieLabel, data }: ChartProps): JSX.Element => {
  const [chartData, setChartData] = useState<any>(null);
  const options = {
    title,
    curveType: 'function',
    legend: { position: 'bottom' },
  } as const;

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
  }, [data, serieLabel]);

  return <GChart
    chartType="LineChart"
    width="100%"
    height="400px"
    data={chartData}
    options={options}
  />
};

export default Chart;
