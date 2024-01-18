const ToDoListItem = ({
	id,
	task,
	isCompleted,
	completeTask,
	removeTask,
}: {
	id: string
	task: string
	isCompleted: boolean
	completeTask: () => void
	removeTask: () => void
}) => {
	return (
		<div className="flex flex-row w-full justify-between hover:bg-gray-900 items-center group px-2">
			<input
				className="hidden"
				type="checkbox"
				id={id}
				checked={isCompleted}
				onChange={completeTask}
			/>
			<label
				className="flex items-center h-10 px-2 rounded cursor-pointer"
				htmlFor={id}>
				<span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
					<svg
						className="w-4 h-4 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
				<span className={'ml-4 text-sm ' + (isCompleted && 'line-through')}>
					{task}
				</span>
			</label>
			<button
				onClick={removeTask}
				className="text-red-600 h-5 w-5 hidden group-hover:block">
				<svg
					fill="currentColor"
					strokeWidth="0"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3Zm6.464 7.586-2.828-2.829-1.414 1.415L11.585 12l-2.828 2.828 1.414 1.415 2.828-2.829 2.829 2.829 1.414-1.415L14.413 12l2.829-2.828-1.414-1.415-2.829 2.829Z"></path>
				</svg>
			</button>
		</div>
	)
}

export default ToDoListItem
