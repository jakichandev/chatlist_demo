import Sidebar from "../components/ui/sidebar/Sidebar";
import ChatSpace from "../components/ui/main/ChatSpace";
import { useParams } from "react-router";
import { Grid, useMediaQuery } from "@mui/material";

function ChatUserActive() {
  const { chatId } = useParams<{ chatId: string }>();
  const isSmallScreen = useMediaQuery('(max-width: 695px)');
  return (
    <Grid container spacing={0.5} height={"100vh"}>
      <Sidebar size={3} hidden={isSmallScreen} />
      <ChatSpace size={isSmallScreen ? 12 : 9} chatId={chatId} />
    </Grid>
  );
}

export default ChatUserActive;
