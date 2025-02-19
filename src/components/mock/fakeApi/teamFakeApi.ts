import { Server, Request, Response } from "miragejs";

export function teamFakeApi(server: Server) {
  // Fetch all teams
  server.get('/teams', (schema) => { return schema.teams.all();});

  // Fetch all teams for a specific user
  server.get('/users/:userId/teams', (schema, request) => {
    const userId = request.params.userId;
    return schema.teams.all().models.filter(team => team.members.some(member => member.member_id === userId))
  })
  server.get("/blogs", (schema) => {
    const blogs = schema.teams.all().models.flatMap((team) => {
      return team.blog ? { ...team.blog, team_name: team.name } : [];
    });
  
    return new Response(200, {}, { blogs });
  });
  

  // Fetch blogs for a specific team
  server.get('/teams/:teamId/blogs', (schema, request) => {
    const teamId = request.params.teamId;
    const team = schema.teams.find(teamId);
    if (!team) {
      return new Response(404, {}, { message: 'Team not found' });
    }
    const blogs = team.blog?[team.blog] : [];
    return new Response(200, {}, { blogs });
  });

// server.post('/join/:teamId', (schema, request) =>{
//   const teamId = request.params.teamId;
//   const { userId } = JSON.parse(request.requestBody) ;

//   return new Response(200, {}, {message: 'Join Request sent succesfully'}) 
// }  );

server.post(`/join/:teamId`, (schema, request) => {
  const { teamId }= request.params;
  console.log("Received teamId:", teamId);
  const { userId } = JSON.parse(request.requestBody);
  console.log("Received teamId:", teamId, "userId:", userId);

  // Check if team exists
  const team = schema.teams.find(teamId);
  if (!team) {
    return new Response(404, {}, { message: 'Team not found' });
  }

  // Check if user already exists in the team
//   const isUserInTeam = team.members.some((mem) => mem.member_id === userId);
//   if (isUserInTeam) {
//     return new Response(400, {}, { message: 'User is already a member of this team' });
//   }
//   const joinRequestId = `${userId}-${teamId}`;
//   if (team.joinRequests.some((req) => req.id === joinRequestId)) {
//     return new Response(400, {}, { message: 'Join request already exists' });
//   }
//   // Add the request to the team's joinRequests
  
//   team.update({
//     joinRequests: [
//       ...team.joinRequests,
//       { id: joinRequestId, userId, status: 'pending' },
//     ],
//   });
//   console.log('Request Params:', request.params);
// console.log('Request Body:', JSON.parse(request.requestBody));
// console.log('Teams:', schema.teams.all().models);

  
//   return new Response(200, {}, { message: 'Join request sent successfully' });
if (!team.members) {
  team.update({ members: [] });
}

if (team.members.some((member) => member.id === userId)) {
  return new Response(400, {}, { message: "User already a member" });
}

team.members.push({ id: userId });
return new Response(200, {}, { message: "Join request successful" });
});

server.get('/join-requests/:teamId', (schema, request) => {
  const teamId = request.params.teamId;
  const team = schema.teams.find(teamId);

  if (!team) {
    return new Response(404, {}, { message: 'Team not found' });
  }

  return new Response(200, {}, { joinRequests: team.joinRequests });
});

server.post('/join-requests/:teamId/:requestId', (schema, request) => {
  const { teamId, requestId } = request.params;
  const { action } = JSON.parse(request.requestBody); // action: 'approve' or 'deny'

  const team = schema.teams.find(teamId);
  if (!team) {
    return new Response(404, {}, { message: 'Team not found' });
  }

  const requestIndex = team.joinRequests.findIndex((req) => req.id === requestId);
  if (requestIndex === -1) {
    return new Response(404, {}, { message: 'Join request not found' });
  }

  const joinRequest = team.joinRequests[requestIndex];

  if (action === 'approve') {
    team.update({
      members: [
        ...team.members,
        { id: joinRequest.userId, role: 'user' },
      ],
      joinRequests: team.joinRequests.filter((req) => req.id !== requestId),
    });

    return new Response(200, {}, { message: 'User added to the team successfully' });
  } else if (action === 'deny') {
    team.update({
      joinRequests: team.joinRequests.filter((req) => req.id !== requestId),
    });

    return new Response(200, {}, { message: 'Join request denied' });
  }

  return new Response(400, {}, { message: 'Invalid action' });
});


  // Create a new team
  server.post('/teams', (schema, request: Request) => {
    const attrs = JSON.parse(request.requestBody);

    //  // Validation: Check required fields
    //  if (!attrs.name || !attrs.purpose || !attrs.creator_id) {
    //   return new Response(400, {}, { error: "Missing required team attributes" });
    // }

    return schema.teams.create(attrs);
  });


  // Get a specific team by ID
  server.get('/teams/:id', (schema, request: Request) => {
    const team = schema.teams.find(request.params.id);
    if (!team) {
      return new Response(404, {}, { message: 'Team not found' });
    }
    return new Response(200, {}, team);
  });

  // Add a user to a team
  server.post('/teams/:id/approve-member', (schema, request) => {
    const teamId = request.params.id; // Extract team ID from the route parameter
    const { userId } = JSON.parse(request.requestBody); // Parse the body to get the user ID
  
    // Find the team and user in the Mirage schema
    const team = schema.teams.find(teamId);
    const user = schema.users.find(userId);
  
    if (team && user) {
      // Check if the user is in the pending members list
      const pendingMembers = team.pending_members || [];
      const isPending = pendingMembers.some((pending) => pending.member_id === userId);
  
      if (!isPending) {
        // If the user is not found in pending members, return an error
        return new Response(400, {}, { error: "User not found in pending members" });
      }
  
      // Update the team: remove user from pending, add to members
      team.update({
        pending_members: pendingMembers.filter((pending) => pending.member_id !== userId), // Remove from pending
        members: [
          ...team.members, // Keep existing members
          { member_id: userId, role: 'member' }, // Add new member with default role
        ],
      });
  
      // Return the updated team
      return new Response(200, {}, team);
    }
  
    // If the team or user does not exist, return a 404 error
    return new Response(404, {}, { error: "Team or user not found" });
  });
  

  
  // Remove a member from a team  
  server.delete('/teams/:id/remove-member', (schema, request: Request) => {
    const teamId = request.params.id;
    const { userId } = JSON.parse(request.requestBody);
    const team = schema.teams.find(teamId);

    if (team) {
      team.update({
        members: team.members.filter((member) => member.member_id !== userId),
      });

      return new Response(200, {}, { message: "User removed from the team" });
    }

    return new Response(404, {}, { error: "Team not found" });
  });

  
  // Update team details
  server.put('/teams/:id', (schema, request: Request) => {
    const teamId = request.params.id;
    const updatedAttrs = JSON.parse(request.requestBody);
    const team = schema.teams.find(teamId);

    if (team) {
      team.update(updatedAttrs);
      return new Response(200, {}, team);
    }

    return new Response(404, {}, { error: "Team not found" });
  });
}