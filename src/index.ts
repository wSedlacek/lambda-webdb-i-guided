import { server } from './server';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
