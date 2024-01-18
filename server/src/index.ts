import express from 'express'
import cors from 'cors'
import type { Request, Response } from 'express'
import supertokens from 'supertokens-node'
import { middleware, errorHandler } from 'supertokens-node/framework/express'
import './util/SuperToken'
import path from 'path'
import todoRoute from './todo'

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
		allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
		credentials: true,
	})
)
app.use(middleware())
app.use(errorHandler())

// app.get('/', (req: Request, res: Response) => {
// 	res.json({ message: 'Hello World!' })
// })
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/auth', (_: Request, res: Response) => {
	res.redirect('/')
})

app.use('/todo', todoRoute)

app.use('*', (_: Request, res: Response) => {
	res.status(404).json({ message: 'Not Found' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
