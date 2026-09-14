import './App.css'

function App() {
  return (
    <div className="container">

      <div className="card">

        <div className="logo">
          🐳
        </div>

        <h1>
          ReactJS + Docker
        </h1>

        <h2>
          Docker Compose Project
        </h2>

        <p>
          This React application is running inside a Docker container.
          The project is built with React, Vite, Docker and Docker Compose.
        </p>

        <div className="status">
          <div className="item">
            <span>⚛️</span>
            <strong>ReactJS</strong>
            <small>Frontend Framework</small>
          </div>

          <div className="item">
            <span>🐳</span>
            <strong>Docker</strong>
            <small>Container Platform</small>
          </div>

          <div className="item">
            <span>📦</span>
            <strong>Compose</strong>
            <small>Container Management</small>
          </div>
        </div>

        <button>
          Running on localhost:5173
        </button>

      </div>

    </div>
  )
}

export default App