function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  let frequency1 = {};
  let frequency2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  console.log(frequency1);
  console.log(frequency1);
  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }

    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }

  return true;
}
