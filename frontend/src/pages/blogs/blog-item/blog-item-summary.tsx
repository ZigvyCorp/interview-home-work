import { IBlog } from "@/models";

function extractFirst100Words(text: string) {
  const words = text.trim().split(/\s+/);

  const first100Words = words.slice(0, 100);

  return first100Words.join(" ") + "...";
}

type Props = {
  summary: IBlog["body"];
};

function BlogItemSummary({ summary }: Props) {
  const content = extractFirst100Words(summary);

  return <p>{content}</p>;
}

export default BlogItemSummary;
