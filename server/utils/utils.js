import util from "util";
import fs from "fs";

const readFile = util.promisify(fs.readFile);

export const queryParser = async (path) => await readFile(path, 'utf8');
