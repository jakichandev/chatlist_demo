import { Typography, Grid } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Sidebar from "./components/ui/sidebar/Sidebar";

function Root() {
  return (
    <Grid container spacing={0.5} height={"100vh"}>
      <Sidebar></Sidebar>
      <Grid size={8}>
        <Typography variant="h4">Main Content Area</Typography>
      </Grid>
    </Grid>
  );
}

export default Root;
