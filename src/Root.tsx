import { Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Sidebar from "./components/ui/sidebar/Sidebar";
import ChatSpace from "./components/ui/main/ChatSpace";

function Root() {
  return (
    <Grid container spacing={0.5} height={"100vh"}>
      <Sidebar />
      <ChatSpace />
    </Grid>
  );
}

export default Root;
