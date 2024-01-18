import { useState, useTransition } from 'react'

const NewToDo = ({
	addedTask,
}: {
	addedTask: (params: { id: number; title: string; isDone: boolean }) => void
}) => {
	const [isPending, startTransition] = useTransition()
	const [title, setTitle] = useState('')
	const addTask = () => {
		if (title === '') return
		startTransition(() => {
			fetch('/todo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title }),
			})
				.then((res) => {
					if (res.ok) {
						return res.json()
					} else {
						throw new Error('Something went wrong')
					}
				})
				.then((data) => {
					addedTask(data.todo)
					setTitle('')
				})
		})
	}

	return (
		<button className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
			<svg
				className="w-5 h-5 text-gray-400 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				/>
			</svg>
			<input
				className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
				type="text"
				value={title}
				disabled={isPending}
				onChange={(e) => setTitle(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						addTask()
					}
				}}
				placeholder="add a new task"
			/>
		</button>
	)
}

export default NewToDo
