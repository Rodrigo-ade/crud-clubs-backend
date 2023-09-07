import fs from 'fs';

export const TEAMS_PATH = 'src/data/teams.json';
export const PORT = 8080;
export const LAST_TEAM_ID_MINUS_LENGTH = 1025;

export function getClubs(res) {
  try {
    const clubs = JSON.parse(fs.readFileSync(TEAMS_PATH));
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).send(err);
  }
}
