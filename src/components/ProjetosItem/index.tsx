import { Container } from './styles';
import Link from 'next/link';
interface ProjetosItemProps {
  title: string;
  type:string;
  imgUrl:string;
  slug:string;
}

function ProjetosItem({ title, type, imgUrl, slug }: ProjetosItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className='overlay'/>
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
      
    </Container>
  );
};

export default ProjetosItem;
