import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';



function Experiencias() {
  return (
    <Container>
      <SectionTitle title= "# 16 anos" description="de experiência"/>
      
      <section>
        <ExperienciaItem 
          year="2008-2009"
          title="UFPA-CTIC-Estagiário"
          description="descrição das funções"/>
        <ExperienciaItem 
          year="2012-2013"
          title="UFPA-PPGTPC-Bolsista"
          description="descrição das funções" />
        <ExperienciaItem 
          year="2014-2015"
          title="UFPA-Bolsista"
          description="descrição das funções" />
        <ExperienciaItem 
          year="2017-2022"
          title="UFPA-Salinópolis-DTI-TAE-TI"
          description="descrição das funções" />
        <ExperienciaItem 
          year="2022-Atualmente"
          title="UFRA-Belém-DSIN-STIC-TAE-TI"
          description="descrição das funções" />
          
      </section>
    </Container>
  );
};

export default Experiencias;
