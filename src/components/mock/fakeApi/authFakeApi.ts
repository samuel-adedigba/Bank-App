import { Server, Response } from "miragejs";

export default function authFakeApi(server: Server) {
  server.post("/login", (schema, request) => {
    const { email, password } = JSON.parse(request.requestBody);
    const user = schema.users.findBy({ email, password });

    if (user) {
      return new Response(
        200,
        {},
        {
          message: "User logged in successfully",
          data
          : {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            token: "fake-jwt-token",         
            balance: user.balance,
            creditScore: user.creditScore,
          }
        }
      );
    }

    return new Response(
      401,
      {},
      { message: "Invalid email or password!" }
    );
  });

//   // Get all users
//   server.get('/users', (schema) => {
//     return schema.users.all();
//   });

//   // Get user detail by ID
//   server.get("/users/:id", (schema, request) => {
//     const user = schema.users.find(request.params.id);
//     if (!user) {
//       return new Response(404, {}, { message: 'User not found' });
//     }
//     return new Response(200, {}, user);
//   });

//   // Create new user
//   server.post("/users", (schema, request) => {
//     const attrs = JSON.parse(request.requestBody);
//     return schema.users.create(attrs);
//   });

//   // Update user
//   server.patch("/users/:id", (schema, request) => {
//     const user = schema.users.find(request.params.id);
//     if (!user) {
//       return new Response(404, {}, { message: 'User not found' });
//     }
//     user.update(JSON.parse(request.requestBody));
//     return new Response(200, {}, user);
//   });

//   // Delete user
//   server.delete("/users/:id", (schema, request) => {
//     const user = schema.users.find(request.params.id);
//     if (!user) {
//       return new Response(404, {}, { message: 'User not found' });
//     }
//     user.destroy();
//     return new Response(204); // No content for successful deletion
//   });
// }
