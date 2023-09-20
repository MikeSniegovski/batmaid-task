import { rest } from 'msw'
import response from './mock.json'

export const handlers = [
    rest.get('/cleanings', (req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json(response),
        )
    }),
]