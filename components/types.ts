export type Todo = {
	text: string;
	done: boolean;
};

/** Usado em `initialTodos` (aceita `text` indefinido nos testes de fallback). */
export type TodoInput = {
	text?: string;
	done: boolean;
};

export type TodoListProps = {
	initialTodos?: TodoInput[];
};

