export function isClubTlaValid(clubTla) {
  const TLA_REGEX = /^[A-Z]{3}$/;
  if (!TLA_REGEX.test(clubTla)) {
    return false;
  }
  return true;
}
