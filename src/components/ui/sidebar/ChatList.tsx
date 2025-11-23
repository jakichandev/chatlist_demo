import { Avatar, Box, Typography, Grid } from "@mui/material";
import type { User } from "../../../types/User";

type ChatListProps = {
  users?: User[];
};

function ChatList({ users }: ChatListProps) {
  return (
    <Box>
      {users?.map((user) => (
        <Grid container direction="row" alignItems={"center"} gap={1} key={user.id} paddingY={1} sx={{cursor: "pointer"}}>
          <Avatar src={user.avatar} />
          <Typography variant="subtitle1">
            {user.first_name} {user.last_name}
          </Typography>
        </Grid>
      ))}
    </Box>
  );
}

export default ChatList;
