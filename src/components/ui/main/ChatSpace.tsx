import { Typography, Grid, Container, List } from "@mui/material";
import ChatHeader from "./ChatHeader";
import { useEffect, useState } from "react";
import type { User } from "../../../types/User";

type ChatSpaceProps = {
  chatId?: string;
};

export default function ChatSpace({ chatId }: ChatSpaceProps) {
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

  if (!chatId) {
    return (
      <Grid
        container
        size={8}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
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
    <Grid container sx={{height: "10rem"}} size={9}>
      <ChatHeader img={activeChatUser?.avatar} name={activeChatUser?.first_name} />
      <Container>
        <List>
          {activeChatUser?.messages?.map((message, index) => (
            <Typography key={index} variant="body1">
              {message.from}: {message.text}
            </Typography>
          ))}
        </List>
      </Container>
    </Grid>
  );
}
