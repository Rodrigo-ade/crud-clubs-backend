import fs from 'fs';
import { TEAMS_PATH } from '../appSettings.js';

export default function getClubs(res) {
  try {
    const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
}
