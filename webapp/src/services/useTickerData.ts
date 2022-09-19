import { useQuery } from '@apollo/client';
import { HISTORY_DATA } from './graphQL/queries';

type TickerData = {
  data: any;
  loading: boolean;
  error: any;
};

const useTickerData = (ticker: string, timeFrame: string): TickerData => {
  const { loading, error, data } = useQuery<TickerData>(HISTORY_DATA, {
    variables: { timeFrame },
  });

  return { data, loading, error };
};

export default useTickerData;
