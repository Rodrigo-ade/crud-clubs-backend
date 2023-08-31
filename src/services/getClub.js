import fs from 'fs';
import { isClubTlaValid } from '../utilities/utilities.js';
import { TEAMS_PATH } from './getClubs.js';

export default function getClub(res, clubTla) {
  if (!isClubTlaValid(clubTla)) {
    return res.status(400).json({ error: `invalid club (${clubTla}) - must have 3 capital letters` });
  }
  try {
    const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
    const foundClub = clubs.find((club) => club.tla === clubTla);
    if (foundClub) {
      return res.status(200).json(foundClub);
    }
    return res.status(404).json({ error: `${clubTla} not in database` });
  } catch (err) {
    return res.status(500).send(err);
  }
}
