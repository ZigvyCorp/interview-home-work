import storage from 'redux-persist/lib/storage'

export default {
  active: true,
  config: {
    key: 'root',
    whitelist: ['user', 'language'],
    storage,
  },
}
