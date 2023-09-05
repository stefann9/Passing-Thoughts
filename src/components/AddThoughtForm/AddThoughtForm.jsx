import { useState } from "react";
import { generateId, getNewExpirationTime } from "../../utilities/utilities";

export function AddThoughtForm({ addThought }) {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            addThought({
                id: generateId(),
                text: text,
                expiresAt: getNewExpirationTime(),
            });
            setText("");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="AddThoughtForm">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
            />
            <input type="submit" value="Add" />
        </form>
    );
}
