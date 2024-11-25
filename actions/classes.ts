// "use server";

 
// import { api } from "./schools";
// import axios from "axios";
// import {
//   Class,
//   ClassCreateProps,
//   Contact,
//   Stream,
//   StreamCreateProps,
// } from "@/types/types";

// export async function createClass(data: ClassCreateProps) {
//   try {
//     const response = await api.post("/classes", data);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       // Type-safe error handling
//       const message = error.response?.data?.message || "Failed to create Class";
//       throw new Error(message);
//     }
//     throw error;
//   }
// }
// export async function createStream(data: StreamCreateProps) {
//   try {
//     const response = await api.post("/streams", data);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       // Type-safe error handling
//       const message =
//         error.response?.data?.message || "Failed to create stream";
//       throw new Error(message);
//     }
//     throw error;
//   }
// }

// export async function deleteContact(id: string) {
//   console.log("deleted", id);
//   return {
//     ok: true,
//   };
// }

// export async function getAllClasses() {
//   try {
//     const response = await api.get("/classes");
//     const classes = response.data;
//     return classes as Class[];
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function getAllStreams() {
//   try {
//     const response = await api.get("/streams");
//     const streams = response.data;
//     return streams as Stream[];
//   } catch (error) {
//     console.log(error);
//   }
// }
