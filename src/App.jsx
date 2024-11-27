import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalContext from './contexts/GlobalContext'
import Home from "./pages/Home"
import About from "./pages/About"
import PostsList from "./pages/PostsList"
import SinglePost from "./pages/SinglePost"
import NotFound from './pages/NotFound'
import DefaultLayout from './pages/DefaultLayout'


function App() {
  const baseUrl = "http://127.0.0.1:3000/"
  return (
    <>
      <GlobalContext.Provider value={{ baseUrl }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/posts'>
                <Route index element={<PostsList />} />
                <Route path=':slug' element={<SinglePost />} />
              </Route>
              <Route path='*' element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
