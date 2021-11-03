import styled from "styled-components";
import { Author as IAuthor } from "../../helpers/interfaces";

const Root = styled.div`
  margin: 40px 0;

  .written-by {
    font-size: var(--fontBig);
    font-style: italic;
  }

  .container {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: inset 0 0 5px black;
      margin-inline-end: 30px;
    }

    .info {
      h4 {
        font-weight: normal;
        color: var(--textGrey);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default function Author({ author }: { author: IAuthor }) {
  return (
    <Root>
      <p className="written-by">Written By:</p>
      <div className="container">
        <img src={author.image || "/assets/images/default-avatar.svg"} alt="" />
        <div className="info">
          <h3>{author.name}</h3>
          <a href={`mailto: ${author.email}`}>
            <h4>{author.email}</h4>
          </a>
        </div>
      </div>
    </Root>
  );
}
