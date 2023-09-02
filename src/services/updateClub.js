import fs from 'fs';
import { TEAMS_PATH, LAST_TEAM_ID_MINUS_LENGTH } from './getClubs.js';
import mapClub from '../mappers/clubMapper.js';

export default function updateClub(fileName, data, res) {
  const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
  const crestUrl = `src/data/uploads/${fileName}`;
  const clubId = clubs.length + LAST_TEAM_ID_MINUS_LENGTH;
  const club = mapClub(clubId, data, crestUrl);

  const oldClubIndex = clubs.findIndex((oldClub) => oldClub.tla === club.tla);

  if (oldClubIndex === -1) {
    return res.status(400).json({ message: `Can not update a club that doesn't exists (${club.tla})` });
  }
  clubs.splice(oldClubIndex, 1);
  clubs.push(club);
  fs.writeFileSync(TEAMS_PATH, JSON.stringify(clubs));
  return res.status(201).json({ message: `The new team has been updated (http://localhost:8080/clubs/${club.tla})` });
}
