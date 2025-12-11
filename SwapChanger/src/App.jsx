import './App.css'

function App() {

const my = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Currency Swap Calculator</h1>

        {/* From Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-center">From</h2>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Amount</label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">Currency</label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition text-lg">
            ⇅
          </button>
        </div>

        {/* To Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">To</h2>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Converted Amount</label>
            <input
              type="text"
              readOnly
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Converted amount"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">Currency</label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md transition font-medium">
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
