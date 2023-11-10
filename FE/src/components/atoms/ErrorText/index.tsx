interface ErrorTextProps {
  text: string;
}

export const ErrorText = ({ text }: ErrorTextProps) => {
  if (!text || text === "") return null;
  return <div className="text=error">{text}</div>;
};
