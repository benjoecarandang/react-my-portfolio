import UnauthenticatedApp from "./components/UnauthenticatedApp";

import "./App.css";

function App() {
  let user = null;
  return <>{user ? <h1>Admin Dashboard</h1> : <UnauthenticatedApp />}</>;
}

export default App;