for (let i = 0; i < 10; i++) {
  let augment = i*800
setTimeout(() => {
  process.stdout.write('\r| ')
}, 100 + augment);
setTimeout(() => {
  process.stdout.write('\r/ ')
}, 300 + augment);
setTimeout(() => {
  process.stdout.write('\r- ')
}, 500 + augment);
setTimeout(() => {
  process.stdout.write('\r\\ ')
}, 700 + augment);
};