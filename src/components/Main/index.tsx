/* eslint-disable prettier/prettier */
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components '
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo com imagem de um atomo com fundo rosa e ao lado escrito React avançado na cor branca"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illutration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com códigos"
    />
  </S.Wrapper>
)

export default Main
