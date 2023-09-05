export function Thought({ thought, removeThought } ) {
  
    const handleRemoveClick = () => {
      removeThought(thought.id);
    };
  
    return (
      <li className="Thought">
        <button
          aria-label="Remove thought"
          className="remove-button"
          onClick={handleRemoveClick}
        >
          &times;
        </button>
        <div className="text">{thought.text}</div>
      </li>
    );
  }
  
  