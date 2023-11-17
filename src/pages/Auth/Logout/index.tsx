
const Logout = () => {
    localStorage.removeItem('token');
    return (
        <div>
            <h1>Logged out</h1>
            <h1>button to <a href="/login">Loginnn</a>
            </h1>
        </div>
    )
}

export default Logout;