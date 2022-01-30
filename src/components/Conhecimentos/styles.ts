import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
        margin-top: 8rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;

        padding-bottom: 8rem;
        border-bottom: 3px solid ${({theme}) => theme.primary}

        @media (max-width: 1000px) {
            gap: 1rem;
        }

        @media (max-width: 700px) {
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-top: 5rem;
        }
  }
`;

export const ConhecimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const FormacaoContainer = styled.div`
  
> div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-itens: flex-start;
    justify-content: flex-start;

    max-width: 19rem;

    transition: 0.5s;

    h1 {

        color: ${({ theme }) => theme.primary};
        font-size: 2rem;
        margin-botton: 1.5rem;
    }

    h2 {

        color: ${({ theme }) => theme.secondary};
        font-size: 1.5rem;
        font-weight: 300;
        margin-botton: 1rem;
    }

    p {

        color: ${({ theme }) => theme.textLight};
        font-size: 1rem;
        font-weight: 300;
        
    }

}


@media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

`;

export const CursoContainer = styled.div`
  
> div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-itens: flex-start;
    justify-content: flex-start;

    max-width: 19rem;

    h1 {

        color: ${({ theme }) => theme.primary};
        font-size: 2rem;
        margin-botton: 1.5rem;
    }

    h2 {

        color: ${({ theme }) => theme.secondary};
        font-size: 1.5rem;
        font-weight: 300;
        margin-botton: 1rem;
    }

    p {

        color: ${({ theme }) => theme.textLight};
        font-size: 1rem;
        font-weight: 300;
        
    }

}


@media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    > div {
      margin-top: 0;
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

`;