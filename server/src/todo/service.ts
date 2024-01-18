import { db } from '../util/db'

export default class TodoService {
	public static async getTodos({ userId }: { userId: string }) {
		const todos = await db.todos.findMany({
			where: { user: userId },
			orderBy: { id: 'desc' },
		})
		return todos
	}

	public static async createTodo({
		userId,
		title,
	}: {
		userId: string
		title: string
	}) {
		const todo = await db.todos.create({
			data: {
				title,
				user: userId,
			},
		})
		return todo
	}

	public static async updateTodo({
		userId,
		todoId,
		text,
		isDone,
	}: {
		userId: string
		todoId: number
		text: string
		isDone: boolean
	}) {
		const todo = await db.todos.findUnique({
			where: { id: todoId, user: userId },
		})
		if (!todo) throw new Error('Todo not found')

		await db.todos.update({
			where: { id: todoId, user: userId },
			data: { title: text, isDone },
		})
		return {
			...todo,
			title: text,
			isDone,
		}
	}

	public static async deleteTodo({
		userId,
		todoId,
	}: {
		userId: string
		todoId: number
	}) {
		const todo = await db.todos.findUnique({
			where: { id: todoId, user: userId },
		})
		if (!todo) throw new Error('Todo not found')

		await db.todos.delete({ where: { id: todoId, user: userId } })
		return todo
	}
}
