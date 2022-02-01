import SectionTitle from '../SectionTitle';
import { Container } from './styles';



function FormContato() {
  return (
    <Container>
      <SectionTitle
        title = {
          <>
            Precisa dos
            <br />
            meus serviços
          </>
        }
        description = {
          <>
          Preencha o formulario abaixo que
          <br />
          irei entrar em contato
          </>
        }
      />

      <Form />
    </Container>
  );
};

export default FormContato;
