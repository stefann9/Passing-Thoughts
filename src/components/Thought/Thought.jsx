export function Thought({ thought, removeThought }) {
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
