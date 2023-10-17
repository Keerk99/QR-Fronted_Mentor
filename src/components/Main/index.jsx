import styled from "styled-components";
import QR from "../../assets/img/image-qr-code.png";

const MainBody = styled.main`
  background: rgb(214 226 240);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: #ffffff;
  gap: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.17);
`;

const Img = styled.img`
  width: 350px;
  border-radius: 1rem;
`;

const H1 = styled.h1`
  font-size: 1.7rem;
  max-width: 350px;
  margin: 0;
  text-align: center;
  font-weight: 700;
  color: #1f3251;
`;

const P = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 350px;
  margin-top: 0;
  font-weight: 400;
  color: #7b879d;
`;

export default function Main() {
  return (
    <MainBody>
      <Section>
        <Img src={QR} alt="QR of Frontend Mentor" />
        <H1>Improve your front-end skills by building projects</H1>
        <P>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </P>
      </Section>
    </MainBody>
  );
}
