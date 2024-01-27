import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/sigin' element={<Signin></Signin>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/send' element={<Send></Send>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
