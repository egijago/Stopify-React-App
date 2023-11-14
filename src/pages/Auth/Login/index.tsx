import {useRef,FormEvent} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(email.current?.value, password.current?.value)
        if(!email.current || !password.current){
            alert('Please fill in all fields');
            return;
        }
        const data = {
            email: email.current?.value,
            password: password.current?.value
        }
        try {
            const response = await fetch('http://localhost:8004/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
            const user = await response.json();
            console.log(user);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 my-20">
        <div className="pt-32 p-12 md:pt-40 md:pb-20 bg-sky-700">

        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1">Welcome back to StopifyArtist</h1>
        </div>

        {/* Form */}
        <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                Email
                </label>
                <input
                id="email"
                type="email"
                className="form-input w-full text-gray-800"
                placeholder="Enter your email address"
                required
                ref={email}
                />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <div className="flex justify-between">
                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">
                    Password
                </label>
                </div>
                <input
                id="password"
                type="password"
                className="form-input w-full text-gray-800"
                placeholder="Enter your password"
                required
                ref={password}
                />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
            </div>
        </div>
    </form>


        <div className="text-gray-600 text-center mt-6">
            Don't you have an account? <a href="/register">Sign up</a>
        </div>
        </div>

    </div>
    </div>
    );

}

export default Login;