import Header from '../../components/Header';
import ProjetosItem from '../../components/ProjetosItem';
import {ProjetosContainer} from '../../styles/ProjetosStyles';

export default function Projetos(){

    return(
        <ProjetosContainer>
            <Header />
            <main className='container'>
                <ProjetosItem 
                    title = "projeto"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug=''                
                />
                <ProjetosItem 
                    title = "projeto"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug=''                
                />
                <ProjetosItem 
                    title = "projeto"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug=''                
                />
                <ProjetosItem 
                    title = "projeto"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug=''                
                />
            </main>

        </ProjetosContainer>
    )
}