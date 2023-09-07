import fs from 'fs';
import { TEAMS_PATH } from '../appSettings.js';

export default function getClub(res, clubTla) {
  try {
    const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
    const foundClub = clubs.find((club) => club.tla === clubTla);
    if (foundClub) {
      return res.status(200).json(foundClub);
    }
    return res.status(404).json({ message: `${clubTla} not in database` });
  } catch (err) {
    return res.status(500).send(err);
  }
}
