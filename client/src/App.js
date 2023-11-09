import './App.css'

import Router from './routers/Router'

const AppContainerStyle = {
  width: '100%',
  height: '100vh',
}

function App() {
  return (
    <div style={AppContainerStyle}>
      <Router />
    </div>
  )
}

export default App
