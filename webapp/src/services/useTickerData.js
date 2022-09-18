import { useQuery } from '@apollo/client';
import { HISTORY_DATA } from './graphQL/queries';

const useTickerData = (ticker, timeFrame) => {
  const { loading, error, data } = useQuery(HISTORY_DATA, {
    variables: { timeFrame },
  });

  return { data, loading, error };
};

export default useTickerData;
