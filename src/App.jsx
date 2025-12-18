import { BrowserRouter, Route, Routes } from 'react-router'
import AccountList from './pages/AccountList'
import AccountWrite from './pages/AccountWrite'
import AccountEdit from './pages/AccountEdit'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountList/>}/>
        <Route path="/write" element={<AccountWrite/>}/>
        <Route path="/edit" element={<AccountEdit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
