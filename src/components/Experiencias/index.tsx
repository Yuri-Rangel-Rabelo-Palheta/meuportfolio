import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';



function Experiencias() {
  return (
    <Container>
      <SectionTitle title= "# 10 anos" description="de experiência"/>
      
      <section>
        <ExperienciaItem />
      </section>
    </Container>
  );
};

export default Experiencias;
