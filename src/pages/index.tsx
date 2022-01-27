import { Head } from "next/document";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import { HomeContainer } from "../styles/HomeStyles";


export default function Home() {
  return (
    <homecontainer>

      <Header />

      <main classname= "container">
        <HomeHero />

      </main>

    </homecontainer>

    
        


  );
    
}
