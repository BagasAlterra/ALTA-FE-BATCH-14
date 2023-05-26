import { useState } from "react"

import Button from "../../components/Button"

const Home = () => {

    const [count, setCount] = useState<number>(0)

    const getIncrement = () => {
        setCount(count + 1)
    }

    const getDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="w-screen bg-white">
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