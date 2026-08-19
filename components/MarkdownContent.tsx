import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose-portfolio">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
