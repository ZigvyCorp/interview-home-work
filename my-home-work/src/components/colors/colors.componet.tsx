import { Flex, Typography } from "antd";
import styles from "./colors.module.css";
import colorsData from "./colors.json";

interface IColor {
  color: string;
  hexCode: string;
  hexCodeLight: string;
}
const { Text } = Typography;

const Colors = () => {
  const colors: IColor[] = JSON.parse(colorsData);

  return (
    <Flex gap="small" className={styles.colors}>
      {colors.map((color) => (
        <Flex
          key={color.color}
          className={styles.color}
          align="center"
          justify="center"
          style={{
            backgroundColor: color.hexCodeLight,
            borderRadius: "5px",
            color: `${color.hexCode} `,
            border: `1px solid ${color.hexCode}`,
          }}
        >
          <Text className={styles.colorText}> {color.color}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
export default Colors;
