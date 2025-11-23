import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import ChatList from "./ChatList";
import type { User } from "../../../types/User";

type SideBarProps = {
  children?: React.ReactNode;
};

function Sidebar({ children }: SideBarProps) {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    function filterUsers() {
      setUsers(() => {
        if (query === "") {
          return allUsers;
        }
        return allUsers.filter(
          (user) =>
            user.first_name.toLowerCase().includes(query.toLowerCase()) ||
            user.last_name.toLowerCase().includes(query.toLowerCase())
        );
      });
    }
    filterUsers();
  }, [query, allUsers]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/rooms");
        const data = await response.json();
        setAllUsers(data as User[]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Grid padding={2} size={3} bgcolor={"whitesmoke"}>
      <SidebarHeader onChangeQuery={setQuery} />
      <ChatList users={users} />
      {children}
    </Grid>
  );
}

export default Sidebar;
