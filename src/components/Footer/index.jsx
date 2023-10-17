import styled from "styled-components";

const FooterSection = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: end;
  padding: 2rem;
  align-items: center;
`;

const A = styled.a`
  text-align: center;
  color: #1f3251;
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform ease 0.5s;
  &&:hover {
    transform: scale(1.1);
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <A
        href="https://www.linkedin.com/in/keerk99/?locale=en_US"
        target="_blank"
        className="fa-brands fa-linkedin"
      />
      <A
        href="https://github.com/Keerk99"
        target="_blank"
        className="fa-brands fa-github"
      />
    </FooterSection>
  );
}
