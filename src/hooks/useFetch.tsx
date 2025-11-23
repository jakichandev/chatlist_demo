import { useState, useEffect } from "react";
import type { User } from "../types/User";
export default function useFetch() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/rooms");
        const data = await response.json();
        setUsers(data as User[]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return { users, setUsers };
}
