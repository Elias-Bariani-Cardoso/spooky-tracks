import express from "express";
import http from "http";
import { Server } from "socket.io";

import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../shared/types/socket-events";

const app = express();
const server = http.createServer(app);

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents
>(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

io.on("connection", (socket) => {
  console.log("Jogador conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("Jogador desconectado:", socket.id);
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});