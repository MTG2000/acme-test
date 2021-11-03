import { Tag as ITag } from "../../helpers/interfaces";
import styled from "styled-components";

const Root = styled.div`
  padding: 10px 28px;
  background: #6a7482;
  margin: 10px;
  font-size: var(--fontSmall);
  border-radius: 30px;
  min-width: 90px;
  text-align: center;
`;

export default function Tag({ tag }: { tag: ITag }) {
  return <Root># {tag.title}</Root>;
}
