# DelConsole

DelConsole is a powerful Node.js command-line interface (CLI) tool designed to streamline the process of removing `console.log()` statements from JavaScript, TypeScript, JSX, and TSX files within a target project directory. Whether you're preparing for production or simply aiming to clean up your development environment, DelConsole offers a fast and efficient solution.

## Features

- **Cross-Language Support**: Automatically detects and processes JavaScript, TypeScript, JSX, and TSX files.
- **Recursive Processing**: Traverses through directories recursively to find and remove `console.log()` statements across your entire project.
- **Verbose Mode**: Provides detailed output on what changes are being made, ensuring transparency and control over the removal process.

## Installation

To install DelConsole globally on your system, run:

```console
npm install -g delconsole `
```

## Usage

After installing, you can start using DelConsole right away. Here are some basic commands to get you started:

### Running on a Specific Project Folder

To remove all `console.log()` statements from a specific folder, use the following syntax:

```console
delconsole -path-your project folder
```

Replace `path-to-your-project-folder` with the actual path to the folder you wish to process.

### Running Within the Current Project Folder

To remove all `console.log()` statements from the current directory and its subdirectories, simply run:

```console
delconsole
```

### Running on the fly

TO use delconsole without installing it,you can run

```console
npx delconsole
```

## Contributing

Contributions to DelConsole are welcome. Whether it's adding new features, improving existing ones, or fixing bugs, please feel free to submit pull requests or open issues on my [GitHub repository](https://github.com/SonetAD/delconsole)

## License

DelConsole is released under the MIT license. See the [LICENSE](LICENSE) file for details.
