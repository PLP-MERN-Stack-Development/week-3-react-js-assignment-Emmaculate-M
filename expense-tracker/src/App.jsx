import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Card from './components/ui/Card'; // ✅ Import Card
import Button from './components/ui/Button'; // ✅ Import Button
import Posts from './pages/Posts';

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', [
    { id: 1, title: 'Groceries', amount: 50, category: 'General' },
    { id: 2, title: 'Transport', amount: 15, category: 'Transport' },
    { id: 3, title: 'Books', amount: 30, category: 'Stationery' }
  ]);

  const [filterText, setFilterText] = useState('');

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handleAddExpense = (newExpense) => {
    console.log('Adding to state:', newExpense);
    setExpenses((prev) => [newExpense, ...prev]);
    console.log('New expenses list:', expenses);
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalAmount = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-navy flex items-center justify-center px-4">
      <Card className="max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-gold mb-6">
          My Expense Tracker
        </h1>

        <ExpenseForm onAddExpense={handleAddExpense} />

        <input
          type="text"
          placeholder="Search by title..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />

        <div className="mt-6 text-right font-semibold text-gray-700 dark:text-white">
          Total: ${totalAmount.toFixed(2)}
        </div>

        {/* Optional: Add export or reset button using your Button component */}
        {/* <Button variant="primary" className="mt-4 w-full">Export</Button> */}
      </Card>
    </div>
  );
}

export default App;
