import { use } from "react";
import { stallComponent } from "./helpers";
import { ThemeContext } from "@/app/pics/page";

type Props = {
    emoji: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    wasClicked?: boolean,
};

const EmojiButton = ({ emoji, onClick, wasClicked }: Props) => {
    const theme = use(ThemeContext);

    stallComponent(0);

    return (
        <button id={emoji} className={`emojiButton ${wasClicked ? 'emojiPrevClicked' : ''} ${theme}`} onClick={onClick}>
            {emoji}
        </button>
    );
};

export default EmojiButton;