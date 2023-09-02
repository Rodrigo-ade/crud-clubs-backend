import { getClubs as getClubsService } from '../../services/getClubs.js';
import getClubService from '../../services/getClub.js';
import deleteClubService from '../../services/deleteClub.js';
import createClubService from '../../services/createClub.js';
import updateClubService from '../../services/updateClub.js';
import { isClubTlaValid } from '../../utilities/utilities.js';

export function getClubs(req, res) {
  getClubsService(res);
}

export function getClub(req, res) {
  const { clubTla } = req.params;
  if (!isClubTlaValid(clubTla)) {
    return res.status(400).json({ message: `invalid club (${clubTla}) - must have 3 capital letters` });
  }
  return getClubService(res, clubTla);
}

export async function deleteClub(req, res) {
  const { clubTla } = req.params;
  deleteClubService(res, clubTla);
}

export async function createClub(req, res) {
  createClubService(req, res);
}

export async function updateClub(req, res) {
  updateClubService(req, res);
}
