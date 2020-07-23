import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, NextJs e Styled Components',
}) => (
  <S.Container>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para o computador"
    />
  </S.Container>
);

export default Main;
