import { Container, TextContainer ,InfosContainer, CodeItem} from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container>
      {/*<img src={picture} alt="Minha foto" />*/}
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Meu nome é Yuri</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className='comment'>///Minha apresentação</span>
            <span className='purple'>Infos</span>{'\u007B'}
            <div>
              Nome: <span className='blue'>Yuri,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Rangel</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">TAE - TI,</span>
            </div>
            <div>
              Empresa: <span className="blue">UFPA</span>
            </div>
            {'\u007D'}
          </CodeItem>

        </InfosContainer>
      </div>
      
    </Container>
  );
};

export default HomeHero;
