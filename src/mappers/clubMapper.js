import Area from '../entities/area.js';
import Club from '../entities/club.js';
import { getClubColors } from '../utilities/utilities.js';

export default function mapClub(id, data, crestUrl) {
  const {
    country,
    name,
    shortName,
    tla,
    address,
    phone,
    website,
    email,
    founded,
    color1,
    color2,
    venue,
  } = data;
  const clubColors = getClubColors(color1, color2);
  const area = new Area(country);
  const validWebsite = website.includes('http') ? website : `https://${website}`;
  return new Club(
    id,
    area,
    name,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    validWebsite,
    email,
    founded,
    clubColors,
    venue,
  );
}
