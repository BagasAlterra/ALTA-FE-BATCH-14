import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

import Button from "../../components/Button"

const Home = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [cookie, setCookie, removeCookie] = useCookies<string>()
    const [count, setCount] = useState<number>(0)

    const getIncrement = () => {
        setCount(count + 1)
    }

    const getDecrement = () => {
        setCount(count - 1)
    }

    const handleLogout = () => {
        removeCookie("username")
        navigate("/")
    }

    return (
        <div className="w-screen bg-white">
            <div className="my-10 w-40 -18">
                <Button
                    id="logout"
                    label="Logout"
                    onClick={() => handleLogout()}
                />
            </div>
            <div className="my-10">
                <h1>Hola, Selamat Datang {location?.state?.username}</h1>
                <h1>Cookies : {cookie.username}</h1>
                <h1>Status : {cookie.status === "basic" ? "You are basic member" : "You are premium member"}</h1>
            </div>
            <h1>Result : {count}</h1>
            <div className="w-20 h-12 flex flex-column">
                <Button
                    id="increment"
                    label="+"
                    onClick={() => getIncrement()}
                />
                <Button
                    id="decrement"
                    label="-"
                    onClick={() => getDecrement()}
                />
            </div>
        </div>
    )
}

export default Home