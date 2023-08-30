export async function getClubs(req, res) {
  res.send('Should retrieve clubs list');
}

export async function getClub(req, res) {
  const { teamTla } = req.params;
  res.send(`Should retrieve club ${teamTla}`);
}

export async function deleteClub(req, res) {
  const { teamTla } = req.params;
  res.send(`Should delete club ${teamTla}`);
}

export async function createClub(req, res) {
  res.send('Should create club that comes in req.body (upload and get club logo)');
}

export async function updateClub(req, res) {
  res.send('Should update the club with the one that comes in req.body');
}
