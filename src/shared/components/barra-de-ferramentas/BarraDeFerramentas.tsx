import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextDeBusca?: (novoText: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = "",
  mostrarInputBusca = false,
  aoMudarTextDeBusca,
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
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
      {mostrarInputBusca && (
        <TextField
          value={textoDaBusca}
          onChange={(e) => aoMudarTextDeBusca?.(e.target.value)}
          size="small"
          placeholder="Pesquisar..."
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};