import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  let user = null;
  return <>{user ? <h1>Admin Dashboard</h1> : <UnauthenticatedApp />}</>;
}

export default App;