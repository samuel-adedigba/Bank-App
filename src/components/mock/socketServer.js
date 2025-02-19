import { Server } from "socket.io";

export const startSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000", // Replace with your frontend origin
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Listen for money transfer events
    socket.on("moneyTransfer", (data) => {
      console.log("Money transfer initiated:", data);

      // Simulate server-side processing and broadcast success
      setTimeout(() => {
        io.emit("transferSuccess", {
          ...data,
          status: "success",
          timestamp: new Date().toISOString(),
        });
      }, 1000); // Mock delay
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

  return io;
};
