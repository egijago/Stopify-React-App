import { NavLink, Route, Routes } from "react-router-dom"

import "@radix-ui/themes/styles.css"
import "../dist/output.css"

import HomePage from "./pages/Home"
import StopifyStudioPage from "./pages/StopifyStudio"
import SubsciberAnalytics from "./pages/SubscriberAnalytics"
import NotFoundPage from "./pages/NotFound"
import MusicAnalytics from "./pages/MusicAnalytics"
import { AuthContext } from "./context/AuthContext"
import { User } from "./lib/models/User"

function App() {
  const authContext: User = {
    id: 120,
    username: "foobar",
  }
  return (
    <>
      <AuthContext.Provider value={authContext}>
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
              <NavLink to="/subscriber-analytics">SubscriberAnalytics</NavLink>
            </li>
            <li>
              <NavLink to="/stopify-studio">StopifyStudio</NavLink>
            </li>
          </ul>
        </nav>
        <div className="page-wrapper ml-[20%] pl-[7%] pt-[7%]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stopify-studio" element={<StopifyStudioPage />} />
            <Route path="/music-analytics" element={<MusicAnalytics />} />
            <Route
              path="/subscriber-analytics"
              element={<SubsciberAnalytics />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App
