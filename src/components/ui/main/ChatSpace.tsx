import { Typography, Grid, Container, OutlinedInput, Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import { useEffect, useState } from "react";
import type { User } from "../../../types/User";
import MessageList from "./MessageList";
import { Send } from "@mui/icons-material";

type ChatSpaceProps = {
  chatId?: string;
  size?: number | { xs?: number; sm?: number; md?: number };
  hidden?: boolean;

};

export default function ChatSpace({
  chatId,
  size,
  hidden = false,
}: ChatSpaceProps) {
  
  const [activeChatUser, setActiveChatUser] = useState<User | null>(null);
  useEffect(() => {
    async function fetchActiveChatUser() {
      if (!chatId) return;
      try {
        const response = await fetch(`http://localhost:3000/rooms/${chatId}`);
        const data = await response.json();
        setActiveChatUser(data as User);
      } catch (error) {
        console.error(error);
      }
    }
    fetchActiveChatUser();
  }, [chatId]);

  /* If no chatId is provided, show a welcome message */
  if (!chatId) {
    return (
      <Grid
        container
        size={8}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        display={hidden ? "none" : "block"}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          align="center"
          marginTop={4}
        >
          Welcome to the Chat App! <br /> Select a chat from the Sidebar to get
          started.
        </Typography>
      </Grid>
    );
  }


  return (
    <Grid
      container
      height={"100%"}
      size={size}
      position={"relative"}
      display={hidden ? "none" : "block"}
    >
      <ChatHeader
        img={activeChatUser?.avatar}
        name={activeChatUser?.first_name}
      />
      <Container sx={{paddingX: 2}}>
        <MessageList activeChatUser={activeChatUser} />
      </Container>
      <Box position={"absolute"} sx={{bottom: 4, width: "100%"}}>
        <OutlinedInput placeholder="Send a message" endAdornment={<Send color="primary" cursor="pointer" />} sx={{width: "calc(100% - 0.5rem)"}} />
      </Box>
    </Grid>
  );
}
