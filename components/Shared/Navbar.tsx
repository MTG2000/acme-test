import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled.nav`
  width: 100%;
  padding: 22px 30px 16px;
  width: 100%;
  background: #040610;

  a {
    color: var(--textLight);
    font-size: var(--fontBig);
    font-weight: bold;
    display: block;
    margin: auto;
    width: max-content;
  }
`;

export default function Navbar() {
  return (
    <Root>
      <Link href="/">ACME Softwares</Link>
    </Root>
  );
}
