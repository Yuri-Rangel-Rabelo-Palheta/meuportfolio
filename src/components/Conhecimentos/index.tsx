import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import CursoItem from './CursoItem';
import FormacaoItem from './FormacaoItem';
import { Container } from './styles';



function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Formação"/>
      <section>
        <FormacaoItem title= "Graduação" year='2007-2014' description='descrição da graduação' />
        <FormacaoItem title= "Graduação" year='2007-2014' description='descrição da graduação' />
      </section>
      <SectionTitle title="Cursos"/>
      <section>
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
        <CursoItem title='curso' org='empresa do curso' description='descrição do curso' />
      </section>
      <SectionTitle title="Conhecimentos"/>
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
};

export default Conhecimentos;
