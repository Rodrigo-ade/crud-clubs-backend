import fs from 'fs';
import { TEAMS_PATH, PORT } from '../appSettings.js';
import mapClub from '../mappers/clubMapper.js';

export default function updateClub(fileName, data, res) {
  const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
  const crestUrl = `http://localhost:${PORT}/${fileName}`;
  const oldClubIndex = clubs.findIndex((oldClub) => oldClub.tla === data.tla);

  if (oldClubIndex === -1) {
    return res.status(400).json({ message: `Can not update a club that doesn't exists (${data.tla})` });
  }
  const clubId = clubs[oldClubIndex].id;
  const club = mapClub(clubId, data, crestUrl);
  clubs.splice(oldClubIndex, 1);
  clubs.push(club);
  fs.writeFileSync(TEAMS_PATH, JSON.stringify(clubs));
  return res.status(201).json({ message: `The new team has been updated (http://localhost:8080/clubs/${club.tla})` });
}
