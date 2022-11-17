![GitHub](https://img.shields.io/github/license/carlossalasamper/reactject)
[![npm](https://img.shields.io/npm/v/reactject.svg)](https://www.npmjs.com/package/reactject)
[![npm](https://img.shields.io/npm/dt/reactject.svg)](https://www.npmjs.com/package/reactject)

# Reactject

<p align="center">
  <img src="https://raw.githubusercontent.com/carlossalasamper/reactject/master/assets/images/logo.png" style="width: 100%; max-width: 800px" />
</p>
<p align="center">💉 The <a href="https://github.com/microsoft/tsyringe">TSyringe</a> framework to use dependency injection explicitly in <a href="https://es.reactjs.org">React</a>.</p>

- [Introduction](#introduction)
- [Reasons to use Reactject](#reasons-to-use-reactject)
  - [⚙️ React TSyringe adapter](#⚙️-react-tsyringe-adapter)
  - [🚀 Full execution control](#🚀-full-execution-control)
  - [👨‍👩‍👧‍👦 Structured dependencies](#👨‍👩‍👧‍👦-structured-dependencies)
  - [🏗️ On-demand features](#🏗️-on-demand-features)
- [Installation](#installation)
- [Usage](#usage)
  - [Modules](#modules)
  - [Registering](#registering)
  - [Resolving](#resolving)
    - [Classes](#classes)
    - [Hooks](#hooks)
    - [Third parties](#third-parties)
  - [Examples](#examples)
- [Support the project](#support-the-project)

## Introduction

🎉 Welcome to this framework that gives you full control over dependency management at runtime in React apps.

To keep it short, Reactject is the necessary piece to connect your React application with the dependency container in an elegant way.

Additionally the API adds new features and decorators to enhance the development experience.

<small>Reactject is built on Microsoft's TypeScript efficient open source dependency container <a href="https://github.com/microsoft/tsyringe">TSyringe</a>.</small>

<hr>

## Reasons to use Reactject

These are the reasons you didn't know why you should install Reactject in your React project.

### ⚙️ React TSyringe adapter

Reactject exposes the TSyringe container and adds optimized hooks to resolve dependencies in functional components.

```typescript
const MyComponent = () => {
  const gitHubService = useResolve(GitHubService);

  // TODO: use githubService to interact with the API

  return <div>This is my component</div>;
};
```

### 🚀 Full execution control

Reactject works as a TSyringe wrapper to decide when and where the modules registration begins.

<small>The "module" concept is very similar to <a href="https://angular.io/guide/architecture-modules">the Angular's one</a>, but each module can choose between to use a child container or to register dependencies in the parent module container.</small>

```typescript
import {
  ReactjectModule,
  Reactject,
  module,
  DependencyContainer,
} from "reactject";
import GithubService from "./GithubService";

@module()
class AppModule extends ReactjectModule {
  register(container: DependencyContainer) {
    super(container);

    container.registerSingleton(GithubService);
  }
}

Reactject.start(AppModule);
```

### 👨‍👩‍👧‍👦 Structured dependencies

Use our `@module` decorator to specify the submodules of a module. Modules will be registered recursively after `Reactject.start(AppModule)` execution.

```typescript
@module({
  submodules: [PaymentModule, SharedModule],
})
class AppModule extends ReactjectModule {}

Reactject.start(AppModule);
```

All the dependencies of both `PaymentModule` and `SharedModule` will be registered when Reactject starts.

### 🏗️ On-demand features

We are aware that there are still not too many functionalities nor is the direction of the project well defined.

But we can see this situation as an opportunity to listen to the community and develop, after an evaluation, the features that are most requested.

[Support us](#support-the-project) and participate in the community to be part of the history of Reactject.

<hr>

## Installation

```
npm install reactject
```

```
yarn add reactject
```

<hr>

## Usage

### Modules

In Reactject you register your dependencies organized by modules and when you start the root module (AppModule) the framework register all the submodules recursively.

Think modules are a pattern to group your dependencies and scope them with the `container` prop of the `@module` decorator. Dependencies in a module are by default registered in the global app container.

```typescript
// GithubService.ts
import { injectable } from "reactject";
import axios from "axios";

@injectable()
class GitHubService {
  public readonly baseUrl = "https://api.github.com";

  public async getUser(username: string) {
    const response = await axios.get(`${this.baseUrl}/users/${username}`);

    return response.data;
  }
}

export default GitHubService;
```

```typescript
// GithubModule.ts
import { ReactjectModule, Reactject, module } from "reactject";
import GithubService from "./GithubService";

@module({
  container: "child",
})
export class GithubModule extends ReactjectModule {
  register(container: DependencyContainer) {
    super(container);

    container.registerSingleton(GithubService);
  }
}
```

```typescript
// AppModule.ts
import { ReactjectModule, Reactject, module } from "reactject";
import { GithubModule } from "./GithubModule";

@module({
  submodules: [GithubModule],
})
class AppModule extends ReactjectModule {}

Reactject.start(AppModule);
```

### Registering

Register the classes or interfaces you are going to use as dependencies using the [TSyringe decorators](https://github.com/microsoft/tsyringe#decorators).

Check the TSyringe container documentation if you have any questions about its use.

Mark your class as @injectable and register it explicitly in a module.

```typescript
// GithubService.ts
import { injectable } from "reactject";
import axios from "axios";

@injectable()
class GitHubService {
  public readonly baseUrl = "https://api.github.com";

  public async getUser(username: string) {
    const response = await axios.get(`${this.baseUrl}/users/${username}`);

    return response.data;
  }
}

export default GitHubService;
```

```typescript
// GithubModule.ts
import { ReactjectModule, Reactject, module } from "reactject";
import GithubService from "./GithubService";

@module()
export class GithubModule extends ReactjectModule {
  register(container: DependencyContainer) {
    super(container);

    container.registerSingleton(GithubService);
  }
}
```

### Resolving

Resolve the dependencies you have registered in the scopes where you need to use them.

#### Classes

To resolve dependencies within javascript classes we will not have to do anything special, since TSyringe is prepared to inject them through the constructor.

The following piece of code would allow us to inject dependencies into a class component.

```tsx
import { inject } from "reactject";
import GitHubService from "../services/GitHubService";

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
import GitHubService from "../services/GitHubService";

const MyComponent = () => {
  const gitHubService = useResolve(GitHubService);

  useEffect(() => {
    gitHubService.getUser("carlossalasamper");
  }, []);

  return <div>This is my component</div>;
};

export default MyComponent;
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

<p align="center">☕️ Buy me a coffee so the open source party never ends.</p>

<p align="center"><a href="https://www.buymeacoffee.com/carlossala95" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a></p>

<p align="center">
  <a href="https://www.youtube.com/channel/UCC-EUKPStBfQ1nEIvSl6bAQ" target="_blank">YouTube ▶️</a>
  <a href="https://instagram.com/carlossalasamper" target="_blank">Instagram 📸</a>
  <a href="https://twitter.com/carlossala95" target="_blank">Twitter 🐦</a>
  <a href="https://facebook.com/carlossala95" target="_blank">Facebook 👍</a>
</p>
<p align="center">
  <a href="https://godofprogramming.com" target="_blank">godofprogramming.com</a>
</p>
