type Props = {
    emoji: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const EmojiButton = ({ emoji, onClick, onMouseEnter }: Props) => {
    // Exercise 1: Memoization
    // stallComponent(2);

    return (
        <button id={emoji} className='emojiButton' onClick={onClick} onMouseEnter={onMouseEnter}>
            {emoji}
        </button>
    );
};

export default EmojiButton;