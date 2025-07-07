function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
      <div>
        <h2 className="font-medium">{expense.title}</h2>
        <p className="text-sm text-gray-600">${expense.amount}</p>
      </div>
      <button
        onClick={() => onDelete(expense.id)}
        className="text-red-500 hover:text-red-700 font-semibold text-sm"
      >
        Delete
      </button>
    </div>
  )
}

export default ExpenseItem
