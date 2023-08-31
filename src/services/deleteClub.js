import fs from 'fs';
import { TEAMS_PATH } from './getClubs.js';

export default function deleteClub(res, clubTla) {
  try {
    const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
    const clubToDeleteIdx = clubs.findIndex((club) => club.tla === clubTla);

    if (clubToDeleteIdx === -1) {
      return res.status(404).json({ message: `club ${clubTla} was not found` });
    }
    clubs.splice(clubToDeleteIdx, 1);
    fs.writeFileSync(TEAMS_PATH, JSON.stringify(clubs));
    return res.status(200).json({ message: `club ${clubTla} was successfully deleted` });
  } catch (err) {
    return res.status(500).send(err);
  }
}
