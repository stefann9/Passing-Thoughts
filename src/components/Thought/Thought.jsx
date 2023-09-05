import { useEffect } from "react";

export function Thought({ thought, removeThought }) {
    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();
        const timeoutID = setTimeout(() => {
            removeThought(thought.id);
        }, timeRemaining);
        return () => clearInterval(timeoutID);
    }, [thought]);
    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={() => removeThought(thought.id)}
            >
                &times;
            </button>
            <div className="text">{thought.text}</div>
        </li>
    );
}
