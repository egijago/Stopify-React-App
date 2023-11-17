import { NavLink, Route, Routes } from "react-router-dom"
import "@radix-ui/themes/styles.css"
import "../dist/output.css"

import HomePage from "./pages/Home"
import StopifyStudioPage from "./pages/StopifyStudio"
import NotFoundPage from "./pages/NotFound"
import MusicAnalytics from "./pages/MusicAnalytics"
import Login from "./pages/Auth/Login"
import SubscriberLists from "./pages/Subscriber"
import Logout from "./pages/Auth/Logout"

function App() {
  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(";").shift()
  }

  if (!getCookie("token")) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    )
  }
  return (
    <>
      <nav
        className="sidebar 
          fixed h-full w-[20%] top-0 left-0 overflow-y-auto flex justify-center 
          font-mono text-white
        bg-sky-950
          pt-[15%]"
      >
        <ul>
          <li className="mb-10">
            <text>Stopify</text>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/music-analytics">MusicAnalytics</NavLink>
          </li>
          <li>
            <NavLink to="/stopify-studio">StopifyStudio</NavLink>
          </li>
          <li>
            <NavLink to="/banner">Banner</NavLink>
          </li>
          <li>
            <NavLink to="/subscribers">Subscribers</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
      <div className="page-wrapper ml-[20%] pl-[7%] pt-[7%]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stopify-studio" element={<StopifyStudioPage />} />
          <Route path="/music-analytics" element={<MusicAnalytics />} />
          <Route path="/banner" element={<AddBanner />} />
          <Route path="/subscribers" element={<SubscriberLists />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
