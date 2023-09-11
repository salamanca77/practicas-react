import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AppApi } from './AppApi.jsx'
import { AppPrueba } from './AppPrueba.jsx'
import { Form } from './components/Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppPrueba />  
  </BrowserRouter>  
)
