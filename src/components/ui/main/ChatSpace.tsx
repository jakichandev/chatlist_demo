import { Typography, Grid, Container, List, Box } from "@mui/material";
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
    <Grid container sx={{ height: "10rem" }} size={9}>
      <ChatHeader
        img={activeChatUser?.avatar}
        name={activeChatUser?.first_name}
      />
      <Container>
        <List
          sx={{
            maxHeight: "70vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 2,
          }}
        >
          {activeChatUser?.messages?.map((message, index) => (
            <Box
              key={index}
              sx={{
                alignSelf: message.from === "you" ? "flex-end" : "flex-start",
                bgcolor: message.from === "you" ? "primary.main" : "grey.300",
                color:
                  message.from === "you"
                    ? "primary.contrastText"
                    : "text.primary",
                p: 1,
                borderRadius: 2,
                maxWidth: "70%",
              }}
            >
              <Typography key={index} variant="body1">
                {message.text}
              </Typography>
            </Box>
          ))}
        </List>
      </Container>
    </Grid>
  );
}
