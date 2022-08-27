import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      barraDeFerramentas={
        <FerramentasDaListagem mostrarInputBusca textoBotaoNovo="Nova" />
      }
      titulo="Página Inicial"
    >
      Testando
    </LayoutBaseDePagina>
  );
};
