import { useEffect, useState, useTransition } from 'react'
import NewToDo from './NewToDo'
import ToDoListItem from './ToDoListItem'

type Todo = {
	id: number
	title: string
	isDone: boolean
}

const ToDo = () => {
	const [isPending, startTransition] = useTransition()
	const [todos, setTodos] = useState<Todo[]>([])
	useEffect(() => {
		startTransition(() => {
			fetch('/todo')
				.then((res) => {
					if (res.ok) {
						return res.json()
					} else {
						throw new Error('Something went wrong')
					}
				})
				.then((data) => {
					setTodos(data.todos)
				})
		})
	}, [])

	const deleteTask = (id: number) => {
		startTransition(() => {
			fetch(`/todo/${id}`, {
				method: 'DELETE',
			})
				.then((res) => {
					if (res.ok) {
						return res.json()
					} else {
						throw new Error('Something went wrong')
					}
				})
				.then(() => {
					setTodos((prev) => prev.filter((todo) => todo.id != id))
				})
		})
	}

	const completeTask = (id: number, isDone: boolean) => {
		startTransition(() => {
			fetch(`/todo/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ isDone: isDone }),
			})
				.then((res) => {
					if (res.ok) {
						return res.json()
					} else {
						throw new Error('Something went wrong')
					}
				})
				.then(() => {
					setTodos((prev) =>
						prev.map((todo) => {
							if (todo.id === id) {
								return { ...todo, isDone: isDone }
							} else {
								return todo
							}
						})
					)
				})
		})
	}

	const addedTask = (todo: Todo) => {
		setTodos((prev) => [todo, ...prev])
	}

	return (
		<div className="max-w-3xl p-8 bg-gray-800 rounded-lg shadow-lg w-full text-gray-200">
			<div className="flex items-center mb-6">
				<svg
					className="h-8 w-8 text-indigo-500 stroke-current"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
					/>
				</svg>
				<h4 className="font-semibold ml-3 text-lg">My Jobs</h4>
			</div>
			<NewToDo addedTask={addedTask} />
			<div className="h-[500px] max-h-[500px] overflow-auto">
				{isPending && <div className="">Loading...</div>}
				{!isPending && todos.length === 0 && (
					<div className="text-center">No todos yet</div>
				)}
				{todos.map((todo: Todo, i) => (
					<ToDoListItem
						key={i}
						id={todo.id}
						task={todo.title}
						isDone={todo.isDone}
						completeTask={completeTask}
						removeTask={deleteTask}
					/>
				))}
			</div>
		</div>
	)
}

export default ToDo
