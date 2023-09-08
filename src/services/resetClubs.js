import fs from 'fs';
import { TEAMS_PATH, TEAMS_BACKUP_PATH } from '../appSettings.js';

export default function resetClubsService(res) {
  try {
    const backupClubs = JSON.parse(fs.readFileSync(TEAMS_BACKUP_PATH));
    fs.writeFileSync(TEAMS_PATH, JSON.stringify(backupClubs));
    return res.status(201).json({ message: 'Teams updated' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
}
