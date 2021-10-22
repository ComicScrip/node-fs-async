const fs = require('fs');

/*
const fileContents = fs.readFileSync('users.txt', { encoding: 'utf-8' });

const lines = fileContents.split('\n');

const result = lines
  .map((line) => {
    const [firstName, lastName] = line.split(' ');
    return `${firstName} ${lastName.toUpperCase()}`;
  })
  .join('\n');

fs.writeFileSync('usersCapitalized.txt', result);
console.log('operation completed');
*/

fs.readFile('users.txt', { encoding: 'utf-8' }, (err, fileContents) => {
  if (err) console.log('cannot read the file');
  else {
    const lines = fileContents.split('\n');
    const result = lines
      .map((line) => {
        const [firstName, lastName] = line.split(' ');
        return `${firstName} ${lastName.toUpperCase()}`;
      })
      .join('\n');
    fs.writeFile(
      'usersCapitalized.txt',
      result,
      { encoding: 'utf-8' },
      (err) => {
        if (err) console.log('cannot write file');
        else console.log('operation completed');
      }
    );
  }
});
console.log('doing other stuff...');
