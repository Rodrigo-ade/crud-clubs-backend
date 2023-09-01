import fs from 'fs';
import mapClub from '../mappers/clubMapper.js';
import { isDataValid } from '../utilities/utilities.js';
import { TEAMS_PATH } from './getClubs.js';

export default function createClub(req, res) {
  const data = req.body;
  const { file } = req;
  const LAST_TEAM_ID_MINUS_LENGTH = 1025;

  if (!file || !data || !isDataValid(data)) {
    return res.status(400).json({ message: 'Missing required data' });
  }

  const crestUrl = `src/data/uploads/${req.file.filename}`;
  const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
  const clubId = clubs.length + LAST_TEAM_ID_MINUS_LENGTH;
  const club = mapClub(clubId, data, crestUrl);
  clubs.push(club);
  fs.writeFileSync(TEAMS_PATH, JSON.stringify(clubs));

  return res.status(201).json({ message: `The new  team has been added (http://localhost:8080/clubs/${club.tla})` });
}
