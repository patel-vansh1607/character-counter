import { useState } from "react"
import "../styles/count.css"

const CountCharacter = () => {
    const [character, setCharacter] = useState("")

    return(
        <div className="main">
            <textarea className="text-count" placeholder="type something" value={character} onChange={(e) => setCharacter(e.target.value)}></textarea>
            <h1 className={`character-count ${character.length > 100 ? "warning" : ""}`}>Amount of Characters = {character.length}</h1>
        </div>
    )
}

export default CountCharacter