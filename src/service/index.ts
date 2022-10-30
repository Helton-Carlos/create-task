import { createServer } from "miragejs";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";
      
      this.get("/api/reminders", () => ({
        reminders: [
          { id: 1, text: "Walk the dog" },
          { id: 2, text: "Take out the trash" },
          { id: 3, text: "Work out" },
        ],
      }))
    },
  });
}