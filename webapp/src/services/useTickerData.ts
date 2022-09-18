import { useQuery } from '@apollo/client';
import { HISTORY_DATA } from './graphQL/queries';

export type TTickerDataResponse = {
  data: any;
  loading: boolean;
  error: any;
};

const useTickerData = (ticker: string, timeFrame: string): TTickerDataResponse => {
  const { loading, error, data } = useQuery<TTickerDataResponse>(HISTORY_DATA, {
    variables: { timeFrame },
  });

  return { data, loading, error };
};

export default useTickerData;
