import { useEffect, useRef, useState } from "react";
import { emojis } from "./emojis";
import EmojiButton from "./EmojiButton";

type Props = { onEmojiSelected: (value: string) => void };

const EmojiMenu = ({ onEmojiSelected }: Props) => {
    const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);
    const [displayEmoji, setDisplayEmoji] = useState<string>('\u{1F600}');

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkMenuClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuAnchor(null);
            }
        }

        document.addEventListener('click', checkMenuClick);

        return () => document.removeEventListener('click', checkMenuClick);
    }, []);

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

    // Exercise 1: Memoization
    // const philosophizeAboutLife = () => {
    //     console.log('What kind of dog is best?');
    //     stallComponent(100);
    //     console.log('Good dog.');
    // };

    // philosophizeAboutLife();

    return (
        <>
            <button className='emojiMenuButton' onClick={toggleEmojiMenu}>{displayEmoji}</button>
            {menuAnchor && (
                <div className='emojiMenu' ref={menuRef}>
                    {emojis.map(emoji => <EmojiButton key={emoji} emoji={emoji} onClick={handleEmojiSelect} onMouseEnter={handleEmojiHover} />)}
                </div>
            )}
        </>
    )
}

export default EmojiMenu;