/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      Imagename
      StationID
      Classification
      Confidence
      ConfigurationID
      RecipeID
      Type
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Imagename
        StationID
        Classification
        Confidence
        ConfigurationID
        RecipeID
        Type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const itemsByImagename = /* GraphQL */ `
  query ItemsByImagename(
    $StationID: String
    $Imagename: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByImagename(
      StationID: $StationID
      Imagename: $Imagename
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Imagename
        StationID
        Classification
        Confidence
        ConfigurationID
        RecipeID
        Type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
