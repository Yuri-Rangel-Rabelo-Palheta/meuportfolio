import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';

function Projetos() {
  return (
    <Container>
      <SectionTitle title='Ultimos Projetos' />
      <section>
        <ProjetoItem 
          title="primeiro projeto"
          type="web site"
          slug="slug"
          img=""          
        />
        <ProjetoItem 
          title="segundo projeto"
          type="web site"
          slug="slug"
          img=""          
        />
        <ProjetoItem 
          title="terceiro projeto"
          type="web site"
          slug="slug"
          img=""          
        />
      </section>
      <button type="button">
        <a>
          Ver todos os projetos
        </a>
      </button>
    </Container>
  );
};

export default Projetos;
