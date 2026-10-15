import { useEffect } from "react";
import { socket } from "./socket/socket";

function App() {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Conectado ao servidor:", socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main>
      <h1>Spooky Tracks</h1>
      <p>Se o terminal do servidor mostrar uma conexão, está funcionando.</p>
    </main>
  );
}

export default App;