import Banner from "./Componentes/Banner/Banner";
import Galeria from "./Componentes/Galeria/Galeria";
import Menu from "./Componentes/Menu/Menu";
import Rodape from "./Componentes/Rodape/Rodape";
import GlobalStyled from "./GlobalStyled";
import PaginaInicial from "./pages/PaginaIncial";

function App() {
  return (
    <div>
      <GlobalStyled />
      <PaginaInicial />
      <div style={{ display: "flex" }}>
        <Menu />
        <div>
          <Banner />
          <Galeria />
        </div>
      </div>

      <Rodape />
    </div>
  );
}

export default App;
