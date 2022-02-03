import Header from "../../../components/Header";
import BannerProjeto from "../../../components/BannerProjeto";
import { ProjetoContainer } from "../../../styles/ProjetoStyled";

export default function Projeto (){

    return (
       <ProjetoContainer>
        <Header />
        <BannerProjeto 
            title={"Projeto 01"} 
            type={"website"} 
            imgUrl={"https://colegios.redemarista.org.br/joao-paulo-ii/sala-de-aula/PublishingImages/imagem%20pdv.png?RenditionID=20"} 
        />

        <main>
            <p>
                dsdasdasd
            </p>
            <button type="button">
                <a href="">Ver projeto online</a>
            </button>
        </main>
       </ProjetoContainer>
    )
}