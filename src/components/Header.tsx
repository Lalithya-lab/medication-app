import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "MediumVioletRed" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Medication Recommendation
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}
