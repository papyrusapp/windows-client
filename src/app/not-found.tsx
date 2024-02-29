import {
  NotFoundButton,
  NotFoundContainer,
  NotFoundInfo,
} from "./styles/style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundInfo>
        <h1>Not Found!</h1>
        <span>
          |、
          <br />
          (˚ˎ 。7
          <br />
          |、˜〵
          <br />
          じしˍ,)ノ
        </span>
      </NotFoundInfo>
      <NotFoundButton href="/">Go to home</NotFoundButton>
    </NotFoundContainer>
  );
};

export default NotFound;
