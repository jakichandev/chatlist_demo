import type { Message } from "./Message";

export type PhoneNumber = `+${number} ${number}`;

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  phone?: PhoneNumber;
  avatar?: string;
  messages: Message[];
};
