// Hook Claude Code : formate automatiquement avec Prettier chaque fichier modifié.
// Ne fait rien si Prettier n'est pas installé dans le projet.
const { execSync } = require("child_process");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  try {
    const data = JSON.parse(input);
    const file = data.tool_input && data.tool_input.file_path;
    if (!file || !/\.(js|jsx|ts|tsx|css|scss|html|json|md)$/i.test(file)) return;
    execSync(`npx --no-install prettier --write "${file}"`, { stdio: "ignore" });
  } catch (e) {
    // On ignore les erreurs : le hook ne doit jamais bloquer Claude.
  }
});
