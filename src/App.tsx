import { useState } from 'react';
import './index.css';

function App() {
  // State untuk daftar chores
  const [chores, setChores] = useState([
    { text: 'This is an example chore', done: false },
  ]);
  // State untuk chore baru
  const [newChore, setNewChore] = useState('');
  
  // Mengelola chore yang sudah selesai
  const doneCount = chores.filter(chore => chore.done).length;

  // Menambah chore baru
  const addChore = () => {
    if (newChore.trim() === '') return; // Cegah chore kosong
    setChores([...chores, { text: newChore, done: false }]);
    setNewChore(''); // Reset input setelah chore ditambah
  };

  // Menghapus chore
  const deleteChore = (index: number) => {
    const updatedChores = chores.filter((_, i) => i !== index);
    setChores(updatedChores);
  };

  // Menandai chore sebagai selesai atau belum
  const toggleChore = (index: number) => {
    const updatedChores = chores.map((chore, i) =>
      i === index ? { ...chore, done: !chore.done } : chore
    );
    setChores(updatedChores);
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center relative">

    {/* SVG Background */}
    <div className='absolute inset-0 z-0'>
      <svg 
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className='w-full h-full object-cover'
      >
        <path 
          fill="#FF0066"
          d="M47.6,-53.2C63.3,-43.6,78.6,-30.1,84.7,-12.5C90.7,5.2,87.4,26.9,75.6,40.2C63.8,53.6,43.5,58.6,24.6,63.8C5.8,69,-11.6,74.3,-24.6,69C-37.5,63.6,-46,47.5,-53.1,32.2C-60.1,16.8,-65.7,2.1,-63.1,-10.8C-60.4,-23.7,-49.5,-34.8,-37.6,-45.1C-25.7,-55.4,-12.9,-64.9,1.6,-66.8C16,-68.6,32,-62.9,47.6,-53.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    {/* Main Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg z-10">
        <h2 className="text-white text-xl font-bold mb-4 text-center">Chores To Do List</h2>

        <ul>
          {chores.map((chore, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-700 text-white p-2 mb-2 rounded-md">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  checked={chore.done} 
                  onChange={() => toggleChore(index)} // Mengubah status chore
                />
                <span className={chore.done ? 'line-through' : ''}>
                  {chore.text}
                </span>
              </div>
              <button 
                className="bg-red-500 text-white px-2 py-1 rounded" 
                onClick={() => deleteChore(index)} // Menghapus chore
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        
        <p className="text-white mt-4">Done: {doneCount}</p>

        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Add a chore" 
            value={newChore}
            onChange={(e) => setNewChore(e.target.value)} // Mengelola input chore baru
            className="w-full p-2 mb-2 rounded-md bg-gray-600 text-white" 
          />
          <button 
            className="bg-blue-500 w-full text-white p-2 rounded-md" 
            onClick={addChore} // Menambah chore baru
          >
            ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
