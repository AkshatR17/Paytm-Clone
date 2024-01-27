import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { Dashboard } from './components/dashboard';
import { Send } from './components/send';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/signin' element={<Signin></Signin>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/send' element={<Send></Send>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
