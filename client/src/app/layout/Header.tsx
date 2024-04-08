import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    handleThemCahnge: () => void;
}

export default function Header({darkMode, handleThemCahnge}: Props) {
  return (
    <AppBar position="static" sx={{mb: 4}}>
      <Toolbar>
        <Typography variant="h6">RE_STORE</Typography>
        <Switch checked={darkMode} onChange={handleThemCahnge} />
      </Toolbar>
    </AppBar>
  );
}
