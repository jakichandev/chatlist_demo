import { Avatar, Box, Typography, Grid } from "@mui/material";
import type { User } from "../../../types/User";
import { Link } from "react-router";
import {useMediaQuery } from "@mui/material";

type ChatListProps = {
  users?: User[];
};

function ChatList({ users }: ChatListProps) {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  return (
    <Box marginTop={2}>
      {users?.map((user) => (
        <Link to={`/chat/${user.id}`}>
          <Grid
            container
            direction="row"
            alignItems={"center"}
            gap={1}
            key={user.id}
            paddingY={1}
            sx={{ cursor: "pointer", ":hover": { backgroundColor: "#e9e9e9ff" }, borderRadius: 3 }}

          >
            <Avatar src={user.avatar} sx={{marginLeft: 1}}/>
            <Grid>
              <Typography variant="subtitle1">
                {user.first_name} {user.last_name}
              </Typography>
              {isSmallScreen && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginLeft: "auto", marginRight: 2 }}
                >
                  {user.messages && user.messages[user.messages.length - 1]?.text.slice(0, 20)}...
                </Typography>
           
            )}
             </Grid>
          </Grid>
        </Link>
      ))}
    </Box>
  );
}

export default ChatList;
