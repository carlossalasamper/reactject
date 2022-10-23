import { useResolve, useResolveMany } from "reactject";
import logo from "./logo.svg";
import "./App.css";
import GitHubService from "./services/GitHubService";
import { useCallback, useEffect, useState } from "react";

function App() {
  const { kuka } = useResolveMany({ kuka: GitHubService });
  const gitHubService = useResolve(GitHubService);
  const [isLoading, setIsLoading] = useState(false);
  const [gitHubUser, setGitHubUser] = useState(null);
  const loadUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const user = await gitHubService.getUser("carlossalasamper");
      setGitHubUser(user);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [gitHubService]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p style={{ padding: "0px 15px" }}>
            {JSON.stringify(gitHubUser, undefined, 2)}
          </p>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
