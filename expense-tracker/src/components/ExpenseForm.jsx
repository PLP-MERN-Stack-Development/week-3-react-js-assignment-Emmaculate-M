import { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('General')

  const handleSubmit = (e) => {    
    e.preventDefault()

    if (!title.trim() || isNaN(parseFloat(amount))) return;

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      category
    }

    console.log('Submitting new expense:', newExpense)

    onAddExpense(newExpense)
    setTitle('')
    setAmount('')
    setCategory('General')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-400"
          placeholder="e.g. Rent"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}  
          onChange={(e) => setAmount(e.target.value)}  
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-400"  
          placeholder="e.g. 100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-md"
        >
          <option>General</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Health</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm
