import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from'react-redux'
import { store} from './states/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null}  persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
