import { useCallback, useEffect, useRef, useState } from "react";
import { emojis } from "./helpers";
import EmojiButton from "./EmojiButton";

type Props = { onEmojiSelected: (value: string) => void };

const EmojiMenu = ({ onEmojiSelected }: Props) => {
    const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);
    const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (menuAnchor) {
            const checkMenuClick = (event: MouseEvent) => {
                if (menuRef.current && !menuRef.current.contains(event.target as Node) && menuRef.current !== event.target) {
                    setMenuAnchor(null);
                }
            }
            document.addEventListener('click', checkMenuClick);

            return () => document.removeEventListener('click', checkMenuClick);
        }
    }, [menuAnchor]);

    const handleEmojiSelect = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const emojiId = event.currentTarget.id;

        onEmojiSelected(emojiId);
        setSelectedEmojis(prevEmojis => {
            if (!prevEmojis.includes(emojiId)) {
                return [...prevEmojis, emojiId];
            }

            return prevEmojis;
        });
        setMenuAnchor(null);
    }, [onEmojiSelected]);

    return (
        <div className='emojiContainer'>
            <div className='emojiMenu' ref={menuRef}>
                {emojis.map(emoji => <EmojiButton key={emoji} emoji={emoji} onClick={handleEmojiSelect} wasClicked={selectedEmojis.includes(emoji)} />)}
            </div>
        </div>
    )
}

export default EmojiMenu;