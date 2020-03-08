import produce from 'immer'

export default (initialState = {}, handlers = {}) => (state = initialState, action) =>
  produce(state, draft => {
    if (handlers[action.type]) {
      handlers[action.type](draft, action, state)
    }
  })
