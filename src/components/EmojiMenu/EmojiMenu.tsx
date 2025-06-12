import { useEffect, useRef, useState } from "react";
import { emojis } from "./helpers";
import EmojiButton from "./EmojiButton";

type Props = { onEmojiSelected: (value: string) => void };

const EmojiMenu = ({ onEmojiSelected }: Props) => {
    const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);
    const [displayEmoji, setDisplayEmoji] = useState<string>('\u{1F600}');

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

    const toggleEmojiMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        const targetNode = event.currentTarget;
        event.stopPropagation();
        setMenuAnchor(currentAnchor => currentAnchor ? null : targetNode);
    };

    const handleEmojiSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        onEmojiSelected(event.currentTarget.id);
        setMenuAnchor(null);
    };

    const handleEmojiHover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDisplayEmoji(event.currentTarget.id);
    };

    return (
        <div className='emojiContainer'>
            <button className='emojiMenuButton' onClick={toggleEmojiMenu}>{displayEmoji}</button>
            {menuAnchor && (
                <div className='emojiMenu' ref={menuRef}>
                    {emojis.map(emoji => <EmojiButton key={emoji} emoji={emoji} onClick={handleEmojiSelect} onMouseEnter={handleEmojiHover} />)}
                </div>
            )}
        </div>
    )
}

export default EmojiMenu;