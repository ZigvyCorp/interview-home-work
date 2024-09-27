import Button from 'react-bootstrap/Button';
import { colors } from '../themes/colors';
import { hexToRgba } from '../utils/utils';
import styles from '../styles/changeTextColorButton.module.css';

export const ChangeTextColorButton = ({text, color, onClick, textColor}) => {
    const handleTextColorOnChange = () => {
        if (textColor === color) {
            onClick(colors.black);
        }
        else onClick(color);
    }

    return (
        <Button className={styles.button} onClick={handleTextColorOnChange} style={$button(color)}>{text}</Button>
    );
}

const $button = (color) => ({
    backgroundColor: hexToRgba(color, 0.2),
    color,
    fontSize: 12,
    lineHeight: 0.5,
    height: 25,
    border: `1px solid ${color}`,
})