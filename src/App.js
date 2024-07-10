
function App() {
  return (
    <div className="text-center bg-gray-100 min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary-900 via-secondary-700 to-secondary-500 to-120%"  >
      <header className="bg-white shadow-2xl shadow-secondary-900 p-6 rounded">
        <h1 className="text-3xl font-bold underline text-blue-900">
          <p>
            {process.env.REACT_APP_SALUDO}
          </p>
        </h1>
      </header>
    </div>
  );
}

export default App;
