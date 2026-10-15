export interface Player {
  id: string;
  nickname: string;
  isHost: boolean;
}

export type GamePhase =
  | "lobby"
  | "composing"
  | "reveal"
  | "results";

export interface RoomState {
  code: string;
  players: Player[];
  phase: GamePhase;
}