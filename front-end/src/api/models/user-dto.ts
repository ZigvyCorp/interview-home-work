import { TimeStamps } from "@/types";

export interface UserDto extends TimeStamps {
  id: string;
  username: string;
}