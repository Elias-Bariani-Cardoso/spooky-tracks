import type { RoomState } from "./game";

export interface ClientToServerEvents {
  "room:create": (payload: { nickname: string }) => void;

  "room:join": (payload: {
    code: string;
    nickname: string;
  }) => void;
}

export interface ServerToClientEvents {
  "room:state": (room: RoomState) => void;

  "room:error": (payload: { message: string }) => void;
}