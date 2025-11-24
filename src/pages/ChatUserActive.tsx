import Sidebar from "../components/ui/sidebar/Sidebar";
import ChatSpace from "../components/ui/main/ChatSpace";
import { useParams } from "react-router";
import { Grid } from "@mui/material";

function ChatUserActive() {
  const { chatId } = useParams<{ chatId: string }>();
  return (
    <Grid container spacing={0.5} height={"100vh"}>
      <Sidebar />
      <ChatSpace chatId={chatId} />
    </Grid>
  );
}

export default ChatUserActive;
