import { Box, List, Typography } from "@mui/material";
import type { User } from "../../../types/User";

type MessageListProps = {
  activeChatUser?: User | null;
};

function MessageList({ activeChatUser }: MessageListProps) {
  return (
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
              <Typography variant="caption" sx={{ display: "block", textAlign: "right" }}>
                {new Date(message.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Box>
          ))}
        </List>
  )
}

export default MessageList