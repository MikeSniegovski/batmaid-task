import { rest } from 'msw'
import response from './mock.json'

export const handlers = [
    rest.get('/cleanings', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(response),
        )
    }),
]