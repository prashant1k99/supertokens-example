import express from 'express'
import type { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Hello World!' })
})

app.use('*', (_: Request, res: Response) => {
	res.status(404).json({ message: 'Not Found' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
