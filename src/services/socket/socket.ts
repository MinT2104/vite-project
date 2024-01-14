import io from "socket.io-client";

// let socket: any = null;

export const socket = io("ws://localhost:3001");
