import { ContentBlock } from "../../helpers/interfaces";
import styled from "styled-components";
import Image from "../Shared/Image";

const Root = styled.div`
  padding: 30px 0;
  word-break: break-all;

  & > * {
    margin-bottom: 16px;
  }

  .header {
    margin-top: 32px;
    font-size: var(--fontBig);
  }

  .paragraph {
    font-size: var(--fontMedium);
  }
`;

export default function ArticleContent({
  content,
}: {
  content: ContentBlock[];
}) {
  return (
    <Root>
      {content.map((c, idx) => {
        if (c.type === "header")
          return (
            <h2 key={idx} className="header">
              {c.data.text}
            </h2>
          );
        if (c.type === "paragraph")
          return (
            <p key={idx} className="paragraph">
              {c.data.text}
            </p>
          );
        if (c.type === "editorImage")
          return <Image key={idx} className="image" src={c.data.url} />;
      })}
    </Root>
  );
}
