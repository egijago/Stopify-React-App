import { useRef, FormEvent, useState } from "react"
import { json, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [validUntil, setValidUntil] = useState("")
  const [cardCVC, setCardCVC] = useState("")
  const [cardOwner, setCardOwner] = useState("")
  const [page, setPage] = useState(1)
  const navigate = useNavigate();

  const handleNextClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(2)
  }

  const handleSecondPageSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    setPage(3)
  }

  const handleSignUpClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("email", email)
    formData.append("name", name)
    formData.append("image", image || "")

    const responseNode = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
        confPassword,
        cardNumber,
        cardOwner,
        cardExpMonth: validUntil.split("-")[1],
        cardExpYear: validUntil.split("-")[0],
        cardCvc: cardCVC,
      }),
    })


    const responseData = await responseNode.json();
      console.log(responseData)
      if (responseData.success) {
        alert('Register successful!')
        navigate('/login');
        window.location.reload();
      } else {
        alert(`Register failed: ${responseData.message}`);
      }

    console.log(responseNode)
  }

  const handleImageChange = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      const file = event.currentTarget.files[0]
      setImage(file)
    }
  }

  if (page == 1) {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 my-20">
        <div className="pt-16 pb-12 md:pt-24 md:pb-16 bg-blue-700 rounded-md shadow-lg">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h1 className="text-4xl font-extrabold text-white">
              Subscribe to Stopify Creator
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <form
              className="space-y-4 max-w-sm mx-auto "
              onSubmit={handleNextClick}
            >
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <button className="btn-primary w-full">Next</button>
              </div>
            </form>

            <div className="text-gray-600 text-center mt-6">
              Have an account?{" "}
              <a href="/login" className="text-blue-300">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (page == 2) {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 my-20">
        <div className="pt-16 pb-12 md:pt-24 md:pb-16 bg-blue-700 rounded-md shadow-lg">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h1 className="text-4xl font-extrabold text-white">
              Subscribe to Stopify Creator
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <form
              className="space-y-4 max-w-sm mx-auto "
              onSubmit={handleSecondPageSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium"
                  htmlFor="email"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your email address"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1">
                      Photo
                    </label>
                  </div>
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="form-input w-full text-gray-800 rounded-sm"
                    placeholder="Enter your email address"
                    onChange={handleImageChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <button className="btn-primary w-full">Next</button>
              </div>
            </form>

            <div className="text-gray-600 text-center mt-6">
              Have an account?{" "}
              <a href="/login" className="text-blue-300">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 my-20">
        <div className="pt-16 pb-12 md:pt-24 md:pb-16 bg-blue-700 rounded-md shadow-lg">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h1 className="text-4xl font-extrabold text-white">
              Subscribe to Stopify Creator
            </h1>
          </div>
          {/* Form */}
          <div className="max-w-md mx-auto">
            <form
              className="space-y-4 max-w-sm mx-auto"
              onSubmit={handleSignUpClick}
            >
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="cardnumber"
                    >
                      Card Number
                    </label>
                  </div>
                  <input
                    id="cardnumber"
                    type="text"
                    className="form-input w-full text-gray-800 rounded-sm"
                    placeholder="Enter your card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Valid Untill
                    </label>
                  </div>
                  <input
                    type="month"
                    id="bdaymonth"
                    name="bdaymonth"
                    className="form-input w-full text-gray-800 rounded-sm"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Security
                    </label>
                  </div>
                  <input
                    id="cardcvc"
                    type="password"
                    className="form-input w-full text-gray-800 rounded-sm"
                    placeholder="Enter your Security Card"
                    required
                    value={cardCVC}
                    onChange={(e) => setCardCVC(e.target.value)}
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
                      Card Holder Name
                    </label>
                  </div>
                  <input
                    id="cardowner"
                    type="text"
                    className="form-input w-full text-gray-800 rounded-sm"
                    placeholder="Enter your Card Holder Name"
                    required
                    value={cardOwner}
                    onChange={(e) => setCardOwner(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="confpassword"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-800 rounded-sm"
                    placeholder="Enter your confirm password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="confpassword"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <input
                    id="confpassword"
                    type="password"
                    className="form-input w-full text-gray-800 rounded-sm"
                    placeholder="Enter your confirm password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-slate-300 hover:bg-slate-500 w-full">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>

            <div className="text-gray-600 text-center mt-6">
              Have an account? <a href="/login">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
