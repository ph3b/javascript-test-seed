export const transformPalindrome = number => {
  if (isPalindrome(number)) {
    return number;
  } else {
    const nextTry =
      number +
      Number(
        String(number)
          .split("")
          .reverse()
          .join("")
      );

    if (nextTry < Number.MAX_SAFE_INTEGER) {
      return transformPalindrome(nextTry);
    } else {
      return -1;
    }
  }
};

const isPalindrome = number =>
  String(number) ===
  String(number)
    .split("")
    .reverse()
    .join("");
