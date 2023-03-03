const pwdFormula = (cmd) => {
  const { cwd } = require("node:process");
  if (cmd == "pwd") {
    process.stdout.write(`${cwd()}`);
    process.stdout.write("\nprompt > ");
  }
};

module.exports = pwdFormula;
