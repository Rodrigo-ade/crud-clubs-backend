import fs from 'fs';
import mapClub from '../mappers/clubMapper.js';
import { TEAMS_PATH, PORT } from '../appSettings.js';

export default function createClub(data, fileName, res) {
  const NEW_TEAM_ID = 2000;
  const crestUrl = `http://localhost:${PORT}/${fileName}`;
  const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
  const clubId = clubs.length + NEW_TEAM_ID;
  const club = mapClub(clubId, data, crestUrl);
  clubs.push(club);
  fs.writeFileSync(TEAMS_PATH, JSON.stringify(clubs));

  return res.status(201).json({ message: `The new team has been added (http://localhost:8080/clubs/${club.tla})` });
}
