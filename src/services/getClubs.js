import fs from 'fs';

export default async function getClubs() {
  return JSON.parse(fs.readFileSync('src/data/t1eams.json'));
}
