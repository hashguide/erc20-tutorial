# ERC20 Fungible Token Deployment 

_**Deployment to POA's Sokol Live Test Network using the Truffle environment and OpenZeppelin library of well-established Smart Contracts.**_

_**OpenZeppelin Contracts have already been tested thoroughly and follow all ERC Standards up-to-date.**_ _**For Production use; be sure to have final contracts audited to prevent loss of assets.**_

## Install Global Dependencies

- node
- npm || yarn
- truffle
- ganache-cli (**optional**)

_ERC20 Tutorial is performed in a Linux Environment, therefore, certain commands & methods of execution may differ from a Windows Environment. I will be using VS Code IDE for code editing and a bash terminal while setting up project environment._

## Setting up your project environment

1. Create new directory for your project & **cd** into the newly created project directory. The name of my project will be **'HashGuideCoin'**.\
$ `mkdir HashGuideCoin && cd "$_"`

1. Initialize your project using desired node package manager ( **npm** || **yarn** ) & initialize the **truffle** project. I will be using **yarn** in this tutorial but **npm** will work as well.\
$ `yarn init -y && truffle init`

1. Add **OpenZeppelin** Smart Contract Library to your project using desired Node Package Manager.
$ `yarn add @openzeppelin/contracts`

### Configuring Truffle

1. Before deploying to a live network or even an EVM development network, we need to edit the project's `truffle-config.js` configuration file. Now is a good time 
