import { PresetColors } from "antd/es/theme/internal";

export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getPresetColors = (): string[] => {
    return PresetColors.map(color => color);
};