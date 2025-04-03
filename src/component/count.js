import { useState } from "react"
import "../styles/count.css"

const CountCharacter = () => {
    const [character, setCharacter] = useState("")

    return(
        <div>
            <textarea className="text1" placeholder="type something" value={character} onChange={(e) => setCharacter(e.target.value)}></textarea>
            <h1>character = {character.length}</h1>
        </div>
    )
}

export default CountCharacter