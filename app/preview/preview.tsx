import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkReact from "remark-react/lib";
import "github-markdown-css/github-markdown.css";
import { PreviewWindow } from "./style";

interface Props {
  doc: string
}

const Preview = (props: Props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React as any)
    .processSync(props.doc).result;

  return <PreviewWindow className="markdown-body">{md as any}</PreviewWindow>;
}

export default Preview;
