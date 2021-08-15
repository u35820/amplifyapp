/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogisticsResult = /* GraphQL */ `
  query GetLogisticsResult($logistics_id: String!) {
    getLogisticsResult(logistics_id: $logistics_id) {
      logistics_id
      opcua_data
    }
  }
`;
export const listLogisticsResults = /* GraphQL */ `
  query ListLogisticsResults(
    $filter: TableLogisticsResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogisticsResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        logistics_id
        opcua_data
      }
      nextToken
    }
  }
`;
