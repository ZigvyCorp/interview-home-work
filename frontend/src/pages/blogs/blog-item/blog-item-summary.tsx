import { IPost } from "@/models";

function extractFirst100Words(text: string) {
  const words = text.trim().split(/\s+/);

  const first100Words = words.slice(0, 100);

  return first100Words.join(" ") + "...";
}

type Props = {
  summary: IPost["body"];
};

function BlogItemSummary({ summary }: Props) {
  const content = extractFirst100Words(summary);

  return <p className='mt-6'>{content}</p>;
}

export default BlogItemSummary;
