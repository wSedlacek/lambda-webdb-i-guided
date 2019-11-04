import { Router } from 'express';

import { db } from '../data/db.js';

export const postRouter = Router();

postRouter.get('/', (req, res) => {});
postRouter.get('/:id', (req, res) => {});
postRouter.post('/', (req, res) => {});
postRouter.put('/:id', (req, res) => {});
postRouter.delete('/:id', (req, res) => {});
