import styled from 'styled-components'

export const MainEmpresasContainer = styled.main`

  display: flex;
  flex-direction: column;
  padding: 9.5rem 0 0;

`

export const SectionEmpresasHeader = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: min-content;
  margin-bottom: 8rem;
  position: relative;
  gap: 3rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 4rem;
    letter-spacing: 0;
    text-align: left;
  }

  p {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0;
    text-align: left;
    width: 28rem;
  }

  span {
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 80%;
    align-self: center;
  }

  @media (max-width: 1120px) {
    flex-direction: column;
  }
`
