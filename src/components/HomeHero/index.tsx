import { Container } from './styles';
import picture from '../../assets/pessoa.webp';
import {TextContainer} from './styles';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2 classname = "nessuno">Meu nome é Yuri  </h2>

        </TextContainer>
      </div>
      
    </Container>
  );
};

export default HomeHero;
