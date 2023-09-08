import fs from 'fs';
import mapClub from '../mappers/clubMapper.js';
import { TEAMS_PATH, PORT } from '../appSettings.js';
import { getNextClubId } from '../utilities/utilities.js';

export default function createClub(data, fileName, res) {
  const crestUrl = `https://crud-clubs-back.onrender.com/${fileName}`;
  const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
  const clubId = getNextClubId(clubs);
  const club = mapClub(clubId, data, crestUrl);
  clubs.push(club);
  fs.writeFileSync(TEAMS_PATH, JSON.stringify(clubs));

  return res.status(201).json({ message: `The new team has been added (http://localhost:8080/clubs/${club.tla})` });
}
