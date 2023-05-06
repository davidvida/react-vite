import { ItemStatus } from '@/types/todo-item';
import { rest } from 'msw';

export const API_BASE_URL = process.env.API_BASE_URL;

export const handlers = [
  rest.get(`${API_BASE_URL}/todos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
      { _id: '1111111', description: 'Item 1', status: ItemStatus.IN_PROGRESS },
      { _id: '1111112', description: 'Item 2', status: ItemStatus.IN_PROGRESS }
    ]), ctx.delay(150))
  })
];
