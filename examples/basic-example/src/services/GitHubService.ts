import axios from "axios";
import { singleton } from "reactject";

@singleton()
class GitHubService {
  public readonly baseUrl = "https://api.github.com";

  public async getUser(username: string) {
    const response = await axios.get(`${this.baseUrl}/users/${username}`);

    return response.data;
  }
}

export default GitHubService;
