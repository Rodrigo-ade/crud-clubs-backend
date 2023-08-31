import fs from 'fs';

export const TEAMS_PATH = 'src/data/teams.json';

export function getClubs(res) {
  try {
    const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
}
