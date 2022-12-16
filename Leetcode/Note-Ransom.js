function checkMagazine(magazine, note) {
  let hash_mag = {};
  let result = "Yes";

  magazine.forEach((m) => {
    hash_mag[m] = hash_mag[m] ? hash_mag[m] + 1 : 1;
  });

  note.forEach((n) => {
    if (hash_mag[n] > 0) hash_mag[n] -= 1; 
    else {
      result = "No";
      return;
    }
  });
  console.log(result);
}

const mag = ["give", "me", "one", "grand", "today", "night"];
const note = ["give", "one", "grand", "today"];

checkMagazine(mag, note);
