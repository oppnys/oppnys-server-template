import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const {parsed} = dotenv.config({ path: path.join(__dirname, '../../.env') })

export default parsed;
