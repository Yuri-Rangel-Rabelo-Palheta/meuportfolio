import { Head } from "next/document";
import Conhecimentos from "../components/Conhecimentos";
import ConhecimentoItem from "../components/Conhecimentos/ConhecimentoItem";
import Experiencias from "../components/Experiencias";
import Footer from "../components/Footer";
import FormContato from "../components/FormContato";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Projetos from "../components/Projetos";
import { HomeContainer } from "../styles/HomeStyles";


export default function Home() {
  return (
    <HomeContainer>

      <Header />

      <main className= "container">
        <HomeHero />
        <Experiencias />
        <Conhecimentos />
        <Projetos />
        <FormContato />
        <Footer />
      </main>

    </HomeContainer>

    
        


  );
    
}
