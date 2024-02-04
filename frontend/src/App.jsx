import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signup';
import { SignIn } from './pages/signin';
import { Dashboard } from './pages/dashboard';
import { SendMoney } from './pages/send';
import { Home } from './pages/home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/send' element={<SendMoney></SendMoney>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
