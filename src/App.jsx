import { useState } from "react";
import { AddThoughtForm } from "./components/AddThoughtForm/AddThoughtForm";
import { Thought } from "./components/Thought/Thought";
import { generateId, getNewExpirationTime } from "./utilities/utilities";

export default function App() {
    const [thoughts, setThoughts] = useState([
        {
            id: generateId(),
            text: "This is a place for your passing thoughts.",
            expiresAt: getNewExpirationTime(),
        },
        {
            id: generateId(),
            text: "They'll be removed after 15 seconds.",
            expiresAt: getNewExpirationTime(),
        },
    ]);

    const addThought = (thought) => {
        setThoughts([thought, ...thoughts]);
    };

    return (
        <div className="App">
            <header>
                <h1>Passing Thoughts</h1>
            </header>
            <main>
                <AddThoughtForm addThought={addThought} />
                <ul className="thoughts">
                    {thoughts.map((thought) => (
                        <Thought key={thought.id} thought={thought} />
                    ))}
                </ul>
            </main>
        </div>
    );
}
