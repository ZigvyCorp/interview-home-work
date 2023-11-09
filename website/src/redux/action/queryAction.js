export const SET_QUERY = 'SET_QUERY'

export const actionSetQuery = (query) => {
   return {
      type: SET_QUERY,
      query: query,
   }
}