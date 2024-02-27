import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as UrqlProvider } from 'urql'

import { client } from './api'
import RoutesNavigation from './router/RoutesNavigation'

function App() {
  return (
    <UrqlProvider value={client}>
      <Router>
        <RoutesNavigation />
      </Router>
    </UrqlProvider>
  )
}

export default App
