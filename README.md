[![npm](https://img.shields.io/npm/v/reactject.svg)](https://www.npmjs.com/package/reactject)
[![npm](https://img.shields.io/npm/dt/reactject.svg)](https://www.npmjs.com/package/reactject)

# Reactject

<img src="./assets/images/logo.png?raw=true" style="max-width: 100%" />
<p align="center"><a href="https://es.reactjs.org">React</a> adapter of the <a href="https://github.com/microsoft/tsyringe">TSyringe</a> dependency injection container 💉</p>

- [Compatibility](#compatibility)
- [Usage](#usage)
  - [Installation](#installation)
  - [Registering](#registering)
  - [Resolving](#resolving)
    - [Classes](#classes)
    - [Hooks](#hooks)
    - [Third parties](#third-parties)
      - [Redux Toolkit](#redux-toolkit)
- [Support us](#support-us)

## Compatibility

- React (\*)
- React Native (\*)

<hr>

## Usage

### Installation

```
npm install reactject
```

```
yarn add reactject
```

### Registering

Register the classes or interfaces you are going to use as dependencies using the TSyringe decorators.

```typescript
// TODO
```

### Resolving

Resolve the dependencies you have registered in the scopes where you need to use them.

#### Classes

To resolve dependencies within javascript classes we will not have to do anything special, since TSyringe is prepared to inject them through the constructor.

```typescript
// TODO
```

#### Hooks

```typescript
// TODO
```

#### Third parties

To use the dependencies that we have registered in third-party library snippets, we have prepared wrapper classes of the most used in React.

##### Redux Toolkit

```typescript
// TODO
```

## Support us

☕️ Buy me a coffee so the open source party never ends.

<a href="https://www.buymeacoffee.com/carlossala95" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
