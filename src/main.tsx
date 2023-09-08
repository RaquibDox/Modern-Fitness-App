import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.tsx'
import App from './App.tsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
)
