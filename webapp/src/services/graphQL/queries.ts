import { gql } from '@apollo/client';

export const HISTORY_DATA = gql`
  query getMarkData($timeFrame: String) {
    marketData(timeFrame: $timeFrame) {
      ticker
      timeFrame
      yLabel
      value
    }
  }
`;
