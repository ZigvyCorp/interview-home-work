type Props = {
  color: string;
  text: string;
};

function hexToRgba(hex: string, alpha: number): string {
  // Ensure the alpha is between 0 and 1
  alpha = Math.min(1, Math.max(0, alpha));

  let r = 0,
    g = 0,
    b = 0;

  // 3-digit hex
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6-digit hex
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  } else {
    throw new Error("Invalid hex color");
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ColorTag = ({ color, text }: Props) => {
  const alpha = 0.2;
  const rgbaColor = hexToRgba(color, alpha);

  return (
    <div
      className='flex-center rounded-sm p-1'
      style={{
        borderColor: color,
        borderWidth: "1px",
        borderStyle: "solid",
        backgroundColor: rgbaColor,
        opacity: 0.8,
      }}
    >
      <p className='text-sm' style={{ color }}>
        {text}
      </p>
    </div>
  );
};

export default ColorTag;
