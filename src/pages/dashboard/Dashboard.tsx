import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      barraDeFerramentas={
        <FerramentasDeDetalhe
          mostrarBotaoSalvarEFechar
          mostrarBotaoVoltarCarregando
        />
      }
      titulo="Página Inicial"
    >
      Testando
    </LayoutBaseDePagina>
  );
};
