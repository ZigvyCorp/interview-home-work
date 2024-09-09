import { IPost } from "@/models";

function getContentSummary(content: string): string {
  return content.length > 100 ? content.substring(0, 100) + "..." : content;
}

type Props = {
  summary: IPost["body"];
};

function BlogItemSummayr({ summary }: Props) {
  const content = getContentSummary(summary);

  return <p className='mt-6'>{content}</p>;
}

export default BlogItemSummayr;
