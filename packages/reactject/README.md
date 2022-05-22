![GitHub](https://img.shields.io/github/license/carlossalasamper/reactject)
[![npm](https://img.shields.io/npm/v/reactject.svg)](https://www.npmjs.com/package/reactject)
[![npm](https://img.shields.io/npm/dt/reactject.svg)](https://www.npmjs.com/package/reactject)

# Reactject

<img src="https://raw.githubusercontent.com/carlossalasamper/reactject/master/assets/images/logo.png" style="width: 100%; max-width: 100%" />
<p align="center"><a href="https://es.reactjs.org">React</a> adapter of the <a href="https://github.com/microsoft/tsyringe">TSyringe</a> dependency injection container 💉</p>

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Registering](#registering)
  - [Resolving](#resolving)
    - [Classes](#classes)
    - [Hooks](#hooks)
    - [Third parties](#third-parties)
      - [Redux Toolkit](#redux-toolkit)
      - [More integrations](#more-integrations)
  - [Examples](#examples)
- [Support the project](#support-the-project)

## Introduction

Start managing your project's runtime dependencies properly by using the dependency injection pattern explicitly.

<hr>

## Installation

- react (\*)

```
npm install reactject
```

```
yarn add reactject
```

<hr>

## Usage

### Registering

Register the classes or interfaces you are going to use as dependencies using the [TSyringe decorators](https://github.com/microsoft/tsyringe#decorators).

Check the TSyringe container documentation if you have any questions about its use.

```typescript
import { injectable } from "reactject";
import axios from "axios";

@singleton()
class GitHubService {
  public readonly baseUrl = "https://api.github.com";

  public async getUser(username: string) {
    const response = await axios.get(`${this.baseUrl}/users/${username}`);

    return response.data;
  }
}

export default GitHubService;
```

### Resolving

Resolve the dependencies you have registered in the scopes where you need to use them.

#### Classes

To resolve dependencies within javascript classes we will not have to do anything special, since TSyringe is prepared to inject them through the constructor.

The following piece of code would allow us to inject dependencies into a class component.

```typescript
import { inject } from "reactject";

class MyComponent {
  constructor(
    @inject(GitHubService) private readonly gitHubService: GitHubService
  ) {}

  private getUser() {
    return this.gitHubService.getUser("carlossalasamper");
  }

  private render() {
    return <div>This is my component</div>;
  }
}

export default MyComponent;
```

#### Hooks

Access the container dependencies transparently using the hooks we have prepared.

```tsx
import { useResolve } from "reactject";

const MyComponent = () => {
  const gitHubService = useResolve(gitHubService);

  useEffect(() => {
    gitHubService.getUser("carlossalasamper");
  }, []);

  return <div>This is my component</div>;
};
```

#### Third parties

⚠️ **Creating classes that wrap the integrations would oversize the use of dependency injection in React and would also be very expensive to maintain.**

To use our dependencies in the integration code of third parties that do not offer a class through which we can inject the objects that we need, we will access the container directly.

For example, to access the container from a [Redux Toolkit AsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) we would do it as follows:

```typescript
import { container } from "reactject";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GitHubService from "../services/GitHubService";

const getUser = createAsyncThunk(
  "github/getUser",
  async (username: string, thunkAPI) => {
    const gitHubService = container.resolve(GitHubService);
    return gitHubService.getUser(username);
  }
);
```

### Examples

In the [/examples](/examples) folder you will find demo React applications that are using Reactject.

<hr>

## Support the project

☕️ Buy me a coffee so the open source party never ends.

<a href="https://www.buymeacoffee.com/carlossala95" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

<nav align="center">
  <a href="https://www.youtube.com/channel/UCC-EUKPStBfQ1nEIvSl6bAQ" target="_blank">YouTube ▶️</a>
  <a href="https://instagram.com/carlossalasamper" target="_blank">Instagram 📸</a>
  <a href="https://twitter.com/carlossala95" target="_blank">Twitter 🐦</a>
  <a href="https://facebook.com/carlossala95" target="_blank">Facebook 👍</a>
</nav>
<hr>
<p align="center">
  <a href="https://godofprogramming.com" target="_blank">godofprogramming.com</a>
</p>
