import Header from '../../components/Header';
import ProjetosItem from '../../components/ProjetosItem';
import {ProjetosContainer} from '../../styles/ProjetosStyles';

export default function Projetos(){

    return(
        <ProjetosContainer>
            <Header />
            <main className='container'>
                <ProjetosItem 
                    title = "projeto 01"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug='01'                
                />
                <ProjetosItem 
                    title = "projeto 02"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug='02'                
                />
                <ProjetosItem 
                    title = "projeto 03"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug='03'                
                />
                <ProjetosItem 
                    title = "projeto 04"
                    type = "tipo de projeto"
                    imgUrl ="https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"
                    slug='04'                
                />
            </main>

        </ProjetosContainer>
    )
}