import './index.css';

function App() {

return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-white text-xl font-bold mb-4 text-center">Chores ToDo List</h2>
            
            <ul>
              <li className="flex justify-between items-center bg-gray-700 text-white p-2 mb-2 rounded-md">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Create Guest Experience mobile check-in</span>
                </div>
                <button className="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
              </li>
            </ul>
            
            <p className="text-white mt-4">Done: 0</p>

            <div className="mt-4">
              <input type="text" placeholder="Add todo" className="w-full p-2 mb-2 rounded-md bg-gray-600 text-white" />
              <button className="bg-blue-500 w-full text-white p-2 rounded-md">ADD TASK</button>
            </div>
          </div>
        </div>
  );
};

export default App;