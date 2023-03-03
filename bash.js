process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd'){
    const {cwd} = require ('node:process');
    process.stdout.write(`${cwd()}`)
  } else {

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}});
