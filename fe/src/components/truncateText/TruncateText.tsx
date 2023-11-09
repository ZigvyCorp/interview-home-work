import React from "react";

interface Props {
  text: string;
  maxWords: number;
}

const TruncateText = (props: Props) => {
  const { text, maxWords } = props;

  const words = text.split(" ");
  const truncatedText = words.slice(0, maxWords).join(" ");

  // Find the last sentence and append an ellipsis if it exists
  const lastSentenceIndex = truncatedText.lastIndexOf(".");
  if (lastSentenceIndex !== -1) {
    return <p>{truncatedText.substring(0, lastSentenceIndex + 1)}...</p>;
  }

  return <p>{truncatedText.substring(0, maxWords)}...</p>;
};

export default TruncateText;
