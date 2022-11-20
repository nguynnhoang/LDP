const initSockets = (io) => {
  let clients = {};
  io.on("connection", (socket) => {
    console.log("Socket connected!!");

    socket.on("new-connect", (data) => {
      console.log("hello!!!");
      console.log(data)
    });
    socket.on("disconnect", () => {});
  });
};

module.exports = initSockets;
