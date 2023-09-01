import { getClubs as getClubsService } from '../../services/getClubs.js';
import getClubService from '../../services/getClub.js';
import deleteClubService from '../../services/deleteClub.js';
import createClubService from '../../services/createClub.js';

export function getClubs(req, res) {
  getClubsService(res);
}

export function getClub(req, res) {
  const { clubTla } = req.params;
  getClubService(res, clubTla);
}

export async function deleteClub(req, res) {
  const { clubTla } = req.params;
  deleteClubService(res, clubTla);
}

export async function createClub(req, res) {
  createClubService(req, res);
}

export async function updateClub(req, res) {
  const { clubTla } = req.params;
  res.send(`Should update the club ${clubTla} with the one that comes in req.body`);
}
