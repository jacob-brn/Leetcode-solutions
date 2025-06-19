var longestCommonPrefix = function (strs) {
  let prefix = "";

  if (strs.length < 1 && strs.length > 0) {
    prefix += strs[0];
  }

  strs.sort();

  let firstString = strs[0];
  let lastString = strs[strs.length - 1];
  let length =
    firstString.length > lastString.length
      ? firstString.length
      : lastString.length;

  for (let i = 0; i < length; i++) {
    if (firstString[i] === lastString[i]) prefix += firstString[i];
    else break;
  }

  return prefix;
};
