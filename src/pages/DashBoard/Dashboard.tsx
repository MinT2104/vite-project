import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// storing socket connection in this global variable
let socket: any = null;

function handleClick() {
  // we emit this event that increments the count on the server
  // and the updated count is emitted back via 'counter updated'
  socket.emit("counter clicked");
}

const DashBoard = () => {
  const [count, setCount] = useState<any>(null);

  // after component mount...
  useEffect(() => {
    // connect to the socket server
    socket = io("ws://localhost:3001");

    // when connected, look for when the server emits the updated count
    socket.on("counter updated", function (countFromServer: any) {
      // set the new count on the client
      var enc = new TextDecoder("utf-8");
      var arr = new Uint8Array(countFromServer);
      setCount(enc.decode(arr));
    });
  }, []);
  return (
    <button className="text-5xl" onClick={handleClick}>
      Counter: {count}
    </button>
  );
};
export default DashBoard;
