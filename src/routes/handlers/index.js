import getClubsService from '../../services/getClubs.js';

export async function getClubs(req, res) {
  try {
    const clubs = await getClubsService();
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getClub(req, res) {
  const { clubTla } = req.params;
  res.send(`Should retrieve club ${clubTla}`);
}

export async function deleteClub(req, res) {
  const { clubTla } = req.params;
  res.send(`Should delete club ${clubTla}`);
}

export async function createClub(req, res) {
  res.send('Should create club that comes in req.body (upload and get club logo)');
}

export async function updateClub(req, res) {
  const { clubTla } = req.params;
  res.send(`Should update the club ${clubTla} with the one that comes in req.body`);
}
