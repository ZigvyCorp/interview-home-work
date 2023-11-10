/* Core */
import { createLogger } from 'redux-logger'

const middleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      error: () => '#ff0005',
      action: () => '#149945',
      prevState: () => '#1C5FAF',
      nextState: () => '#A47104',
    },
    predicate: () => typeof window !== 'undefined',
  }),
]

export { middleware }
