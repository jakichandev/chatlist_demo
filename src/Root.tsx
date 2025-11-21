import { Typography, Grid, OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Root() {
  return (
    <Grid container spacing={0.5} height={"100vh"}>
      <Grid padding={2} size={3} bgcolor={"whitesmoke"}>
        <Typography variant="h5">Messages</Typography>
        <OutlinedInput sx={{marginTop: 1}} size="small" placeholder="Search a contact" fullWidth endAdornment={<SearchRoundedIcon />} />
      </Grid>
      <Grid size={8}>
        <Typography variant="h4">Main Content Area</Typography>
      </Grid>
    </Grid>
  );
}

export default Root;
