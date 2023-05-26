import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

import Input from "../../components/Input"
import Button from "../../components/Button"

import { data } from "../../dummy/credentials.json"

const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string | number>("")

    const handleLogin = () => {

        if (username === data[0].username && password == data[0].password) {
            navigate("/home")
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Fill your username and password"
            })
        }
    }

    return (
        <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md">
                <Input
                    id="username"
                    name="username"
                    value={username}
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    id="password"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    id="login"
                    label="Login"
                    onClick={() => handleLogin()}
                />
            </div>
        </div>
    )
}

export default Login