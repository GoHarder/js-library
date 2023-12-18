# JavaScript Library <!-- omit in toc -->

A library of private npm packages of common JavaScript functions.

## Table of contents <!-- omit in toc -->
- [Installation](#installation)
- [Authors](#authors)

## Installation

The first step to install the package is to make the package file. In this tutorial we will install the math library.

```bash
# Change the directory to the math library.
cd packages/math/

# The pack command will create a file `harder-js-math-x.x.x.tgz`
npm pack  
```

You can take that package file and move it to another project to use. The command example below shows the package file being installed from a `local_modules` directory.

```bash
npm install ./local_modules/harder-js-math-x.x.x.tgz
```

## Authors
- [@GoHarder](https://www.github.com/GoHarder)
