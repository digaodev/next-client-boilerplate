import * as S from './styles'

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo do React com o título React Avançado ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
