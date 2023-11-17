import React, { useState } from "react"
import { json, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const responseData = await response.json()
      console.log(responseData)
      if (responseData.success) {
        alert("Login successful!")
        navigate("/music-analytics")
      } else {
        alert(`Login failed: ${responseData.message}`)
      }
    } catch (error) {
      console.error("Error during login:", error)
      alert("An error occurred during login. Please try again later.")
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 my-20">
      <div className="pt-16 pb-12 md:pt-24 md:pb-16 bg-blue-700 rounded-md shadow-lg">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
          <h1 className="text-4xl font-extrabold text-white">
            Welcome to Stopify Creator
          </h1>
        </div>

        <div className="max-w-sm mx-auto">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <div className="flex justify-between">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>

          <div className="text-gray-600 text-center mt-6">
            Don't you have an account? <a href="/register">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
