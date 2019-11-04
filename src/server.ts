import express from 'express';

import { postRouter } from './routes/post.route';

export const server = express();
server.use(express.json());

server.use('/api/posts', postRouter);
server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex</h3>');
});
