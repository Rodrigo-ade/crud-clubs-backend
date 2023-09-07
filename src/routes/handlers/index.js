import getClubsService from '../../services/getClubs.js';
import getClubService from '../../services/getClub.js';
import deleteClubService from '../../services/deleteClub.js';
import createClubService from '../../services/createClub.js';
import updateClubService from '../../services/updateClub.js';
import { isClubTlaValid, isDataValid } from '../../utilities/utilities.js';

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
  const data = req.body;
  const { file } = req;
  if (!file || !data || !isDataValid(data)) {
    return res.status(400).json({ message: 'Missing required data' });
  }
  const fileName = file.filename;
  return createClubService(data, fileName, res);
}

export async function updateClub(req, res) {
  const { file } = req;
  const { clubTla } = req.params;
  const data = req.body;
  data.tla = clubTla;

  if (!file || !data || !isDataValid(data)) {
    return res.status(400).json({ message: 'Missing required data' });
  }
  const fileName = file.filename;
  return updateClubService(fileName, data, res);
}
