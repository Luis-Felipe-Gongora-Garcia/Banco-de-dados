import {
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,
  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarSalvarEFechar,
  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      display="flex"
      alignItems="center"
      component={Paper}
    >
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          onClick={aoClicarEmSalvar}
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && <Skeleton width={108} height={60} />}
      {mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && (
        <Button
          onClick={aoClicarSalvarEFechar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {mostrarBotaoSalvarEFecharCarregando && (
        <Skeleton width={180} height={60} />
      )}
      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          onClick={aoClicarEmApagar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoApagarCarregando && <Skeleton width={108} height={60} />}
      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (
        <Button
          onClick={aoClicarEmNovo}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}
      {mostrarBotaoNovoCarregando && <Skeleton width={108} height={60} />}

      <Divider variant="middle" orientation="vertical" />

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          onClick={aoClicarEmVoltar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && <Skeleton width={112} height={60} />}
    </Box>
  );
};
