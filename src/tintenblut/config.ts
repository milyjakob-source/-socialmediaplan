/**
 * Address of the Apps Script web app that reads and writes the Tintenblut sheet (apps-script/social-kunde),
 * ending in /exec. Not a secret – it ends up in the public bundle anyway; the access code in the script
 * properties guards the data. The env variable wins, for local tests against another sheet.
 * Empty: the tool runs as a preview in memory.
 */
const WEB_APP_URL = '';

export const SKRIPT_URL = import.meta.env.VITE_TINTENBLUT_SKRIPT_URL || WEB_APP_URL;

export const istVorschau = !SKRIPT_URL;
