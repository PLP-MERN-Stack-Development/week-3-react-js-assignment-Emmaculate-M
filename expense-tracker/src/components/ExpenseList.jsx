function ExpenseList({ expenses, onDelete }) {
  if (!expenses.length) {
    return (
      <div className="text-center text-gray-500 italic py-4">
        No expenses to display.
      </div>
    )
  }

  return (
    <ul className="space-y-4">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-4">        
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{expense.title}</h3>
            <p className="text-sm text-gray-600">Amount: ${expense.amount.toFixed(2)}</p>
            <p className="text-sm text-gray-400">Category: {expense.category}</p>
          </div>
          <button
            onClick={() => onDelete(expense.id)}
            className="text-red-600 hover:text-red-800 text-sm border border-red-200 px-3 py-1 rounded-lg transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList
