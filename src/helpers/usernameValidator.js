export function usernameValidator(email) {
  const re = /\S+/;
  if (!email) return "Username can't be empty.";
  if (!re.test(email)) return "Ooops! We need a valid user name.";
  return "";
}
