process.stdout.write("prompt > ");
const pwd = require("./pwd");

process.stdin.on("data", (data) => {
  pwd(data);
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
