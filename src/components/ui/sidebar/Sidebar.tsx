import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SkeletonLoader from "../elements/SkeletonLoader";
import type { User } from "../../../types/User";
import useFetch from "../../../hooks/useFetch";
import { lazy, Suspense } from "react";
const ChatList = lazy(() => import("./ChatList"));


type SideBarProps = {
  children?: React.ReactNode;
  size?: number | { xs?: number; sm?: number; md?: number };
  hidden?: boolean;
};

function Sidebar({ children, size, hidden = false }: SideBarProps) {
  const { users: allUsers } = useFetch();
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

  return (
    <Grid padding={2} size={size} bgcolor={"whitesmoke"} display={hidden ? "none" : "block"} >
      <SidebarHeader onChangeQuery={setQuery} />
      <Suspense fallback={<SkeletonLoader />}>
        <ChatList users={users} />
      </Suspense>
      {children}
    </Grid>
  );
}

export default Sidebar;
