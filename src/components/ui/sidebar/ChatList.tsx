import { Box, Typography } from "@mui/material";
import type { User } from "../../../types/User";

type ChatListProps = {
  users?: User[];
};

function ChatList({ users }: ChatListProps) {
  return (
    <Box>
      {users?.map((user) => (
        <Box width={100} key={user.id}>
          <Typography variant="subtitle1">
            {user.first_name} {user.last_name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ChatList;
