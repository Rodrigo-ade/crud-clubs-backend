export function isClubTlaValid(clubTla) {
  const TLA_REGEX = /^[A-Z]{3}$/;
  if (!TLA_REGEX.test(clubTla)) {
    return false;
  }
  return true;
}

export function getClubColors(color1, color2) {
  return `${color1} / ${color2}`;
}

export function isDataValid(data) {
  let valid = true;

  Object.values(data).forEach((value) => {
    if (value === '') {
      valid = false;
    }
  });

  return valid;
}

export function getNextClubId(clubs) {
  let newId = -Infinity;
  clubs.forEach((club) => {
    if (club.id > newId) {
      newId = club.id;
    }
  });
  return newId + 1;
}
