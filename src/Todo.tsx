import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	ChakraProvider,
	Checkbox,
	IconButton,
	Input,
	Select,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useState } from "react";

interface Task {
	id: string;
	title: string;
	status: string;
}

const initialTasks: Task[] = [
	{ id: "1", title: "Task 1", status: "Backlog" },
	{ id: "2", title: "Task 2", status: "Undo" },
	{ id: "3", title: "Task 3", status: "Running" },
];

const TodoList: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

	const handleSelectTask = (taskId: string) => {
		setSelectedTasks((prev) =>
			prev.includes(taskId)
				? prev.filter((id) => id !== taskId)
				: [...prev, taskId],
		);
	};

	const handleDeleteSelected = () => {
		setTasks((prev) => prev.filter((task) => !selectedTasks.includes(task.id)));
		setSelectedTasks([]);
	};

	const handleEditTask = (
		taskId: string,
		newTitle: string,
		newStatus: string,
	) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === taskId
					? { ...task, title: newTitle, status: newStatus }
					: task,
			),
		);
	};

	return (
		<ChakraProvider>
			<Box p={5}>
				<Button colorScheme="red" onClick={handleDeleteSelected} mb={4}>
					一括削除
				</Button>
				<Table>
					<Thead>
						<Tr>
							<Th />
							<Th>タスク</Th>
							<Th>状態</Th>
							<Th>アクション</Th>
						</Tr>
					</Thead>
					<Tbody>
						{tasks.map((task) => (
							<Tr key={task.id}>
								<Td>
									<Checkbox
										isChecked={selectedTasks.includes(task.id)}
										onChange={() => handleSelectTask(task.id)}
									/>
								</Td>
								<Td>
									<Input
										value={task.title}
										onChange={(e) =>
											handleEditTask(task.id, e.target.value, task.status)
										}
									/>
								</Td>
								<Td>
									<Select
										value={task.status}
										onChange={(e) =>
											handleEditTask(task.id, task.title, e.target.value)
										}
									>
										<option value="Backlog">Backlog</option>
										<option value="Undo">Undo</option>
										<option value="Running">Running</option>
										<option value="Checking">Checking</option>
										<option value="Done">Done</option>
									</Select>
								</Td>
								<Td>
									<IconButton
										aria-label="Delete"
										icon={<DeleteIcon />}
										colorScheme="red"
										onClick={() => handleSelectTask(task.id)}
									/>
									<IconButton
										aria-label="Edit"
										icon={<EditIcon />}
										colorScheme="blue"
										ml={2}
									/>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</ChakraProvider>
	);
};

export default TodoList;
