import express from 'express'
import type { Response } from 'express'
import supertokens from 'supertokens-node'
import { SessionRequest } from 'supertokens-node/framework/express'
import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import TodoService from './service'

const router = express.Router()

router.use(verifySession())

router.get('/', async (req: SessionRequest, res: Response) => {
	const userId = req.session!.getUserId()
	const todos = await TodoService.getTodos({ userId })
	return res.json({ todos })
})

router.post('/', async (req: SessionRequest, res: Response) => {
	const userId = req.session!.getUserId()
	const { title } = req.body
	const todo = await TodoService.createTodo({
		userId,
		title,
	})
	return res.json({ todo })
})

router.put('/:id', async (req: SessionRequest, res: Response) => {
	const userId = req.session!.getUserId()
	const { id } = req.params
	const { text, isDone } = req.body
	const todo = await TodoService.updateTodo({
		userId,
		todoId: parseInt(id),
		text,
		isDone,
	})
	return res.json({ todo })
})

router.delete('/:id', async (req: SessionRequest, res: Response) => {
	const userId = req.session!.getUserId()
	const { id } = req.params
	await TodoService.deleteTodo({
		userId,
		todoId: parseInt(id),
	})
	return res.json({ message: 'Todo deleted' })
})

export default router
