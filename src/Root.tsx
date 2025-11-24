import { Grid, useMediaQuery } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Sidebar from "./components/ui/sidebar/Sidebar";
import ChatSpace from "./components/ui/main/ChatSpace";

function Root() {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  return (
    <Grid container spacing={0.5} height={"100vh"}>
      <Sidebar size={{ xs: 12, sm: 4, md: 3 }} />
      <ChatSpace size={9} hidden={isSmallScreen} />
    </Grid>
  );
}

export default Root;
