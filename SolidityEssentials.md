Solidity
--------

-   Object-oriented, high-level language for implementing smart contracts.

-   Smart contracts are programs that govern the behavior of accounts within the Ethereum state.

-   The code is law.

So, before going further lets understand What actually ethereum is?

-   Introduced in 2014

-   Launched in 2015

-   second-largest cryptocurrency by market value, outranked only by Bitcoin.

-   An open-source blockchain that is known for its smart contract functionality.

1.  What is Ethereum?

-   Imagine we have a big notebook where we write down transactions between people. Each page in the notebook represents a block, and each transaction we write is like adding a line to that page. This notebook is shared with lots of other people, so everyone has a copy of it.

-   Now, Ethereum is like a digital version of this notebook, but it's way smarter. Instead of just writing transactions, we can also write little programs called "smart contracts" into the notebook. These smart contracts automatically execute when certain conditions are met.

-   The Ethereum blockchain is made up of accounts, which we can think of like bank accounts. An account has a balance of Ether (the currency used on the Ethereum blockchain), and we can send and receive Ether payments to other accounts, just like wer bank account can wire transfer money to other bank accounts.

1.  Why was Ethereum needed? 

-   Well, it was created because Bitcoin, the first cryptocurrency, could only handle transactions. Ethereum was needed to expand possibilities. With Ethereum's smart contracts, we can do a lot more than just sending money around. we can create decentralized applications (dApps) for things like finance, gaming, or even voting, without needing a central authority.

-   So, Ethereum works by using a network of computers (called nodes) to maintain this digital notebook, ensuring that everyone has the same copy. When someone wants to add a transaction or execute a smart contract, they send it to the network, and the nodes work together to validate and add it to the notebook.

-   Ethereum is like the platform where we can build dApp and solidity is the language.

Solidity is statically typed, supports inheritance, libraries, and complex user-defined types, among other features.

### USE CASES OF SOLIDITY

-   Create contracts for uses such as voting, finance (a loan contract), crowdfunding, blind auctions, and multi-signature wallets.

### Fundamentals of SOLIDITY

-   contract - collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. Type of global object.

-   get() - to get the value.

-   set() -  to modify or set the value.

-   Ethereum keypair - the keypair is like having a mailbox in a town (wer Ethereum wallet), with a public address (the public key) for receiving mail (cryptocurrency), and a private key (like the mailbox key) for accessing and sending mail securely.

-   events -  Events allow clients to react to specific contract changes we declare.

-   address - a 160-bit value that does not allow any arithmetic operations, only used to store addresses of contracts, or a hash.

-   public - allows us to access the current value of the state variable from outside of the contract.

-   Typecasting - sometimes we need to change the datatypes in solidity.

1\.  Rules and Conditions: A smart contract contains specific rules and conditions that define how it should behave. These rules are written in code, similar to instructions we might give to a computer.

2\.  Variables: Just like in regular programs, smart contracts can have variables that store data. These variables can represent things like numbers, text, or even addresses on the blockchain.

3\.  Functions: Smart contracts can have functions, which are like mini-programs that perform specific tasks. These functions can manipulate data, perform calculations, or interact with other smart contracts.

4\.  Events: Smart contracts can emit events, which are notifications that something has happened within the contract. These events can be listened to by other smart contracts or external applications.

5\.  Blockchain Integration: Smart contracts live on a blockchain, which is a distributed ledger that records all transactions. This means that once a smart contract is deployed to the blockchain, it cannot be altered or tampered with.

6\.  Execution: When certain conditions specified in the smart contract are met, it automatically executes the associated actions. For example, if we have a smart contract for transferring digital currency, when someone sends a request to transfer funds, the smart contract will execute the transfer if the conditions are satisfied.

-   EVM is the runtime environment for smart contracts in Ethereum.

-   Transactions are isolated.

-   A transaction is a message that is sent from one account to another account (which might be the same or empty, see below). It can include binary data (which is called "payload") and Ether.

Gas
---

Imagine we're driving a car, and we need fuel to make it run. Gas in the context of blockchain is similar---it's the fuel needed to execute operations on the blockchain network.

-   What is it? Gas represents the computational cost required to perform actions or execute smart contracts ( each function in contracts has its limited gas ) on a blockchain.

-   How it works: Every operation or computation on the blockchain network consumes gas. More complex operations or those requiring more resources (like storage or processing power) cost more gas.

-   Why it's important: Gas helps maintain the integrity and security of the blockchain network by preventing abuse of computational resources. Users pay gas fees to miners for validating and executing transactions and smart contracts.

Struct
------

Solidity reserves 256 bits of storage regardless of the uint size. For example, using uint8 instead of uint (uint256) won't save we any gas.

But there's an exception to this: inside structs.

If we have multiple uints inside a struct, using a smaller-sized uint when possible will allow Solidity to pack these variables together to take up less storage. For example:

```sol
struct NormalStruct {
  uint a;
  uint b;
  uint c;
}

struct MiniMe {
  uint32 a;
  uint32 b;
  uint c;
}
```

// `mini` will cost less gas than `normal` because of struct packing
NormalStruct normal = NormalStruct(10, 20, 30);
MiniMe mini = MiniMe(10, 20, 30); 
For this reason, inside a struct we use the smallest integer sub-types we can get away with.

Time Units
---------

The variable now will return the current unix timestamp of the latest block (the number of seconds that have passed since January 1st 1970). The unix time as I write this is 1515527488.

Note: Unix time is traditionally stored in a 32-bit number. This will lead to the "Year 2038" problem, when 32-bit unix timestamps will overflow and break a lot of legacy systems. So if we wanted our DApp to keep running 20 years from now, we could use a 64-bit number instead — but our users would have to spend more gas to use our DApp in the meantime. 

```
uint lastUpdated;

// Set `lastUpdated` to `now`
function updateTimestamp() public {
  lastUpdated = now;
}

// Will return `true` if 5 minutes have passed since `updateTimestamp` was 
// called, `false` if 5 minutes have not passed
function fiveMinutesHavePassed() public view returns (bool) {
  return (now >= (lastUpdated + 5 minutes));
}
```


Transactions
------------

In everyday life, we might make transactions when buying groceries or transferring money to a friend. In blockchain, transactions involve sending or receiving digital assets (like cryptocurrency) or interacting with smart contracts.

What is it? A transaction is a record of a transfer or interaction on a blockchain network. It typically includes sender and recipient addresses, amount transferred, and sometimes additional data.

How it works: Transactions are initiated by users and broadcast to the network. Miners validate transactions by confirming that the sender has sufficient funds and ensuring they meet the network's rules. Valid transactions are added to blocks and added to the blockchain.

Why it's important: Transactions enable the transfer of value and the execution of operations on the blockchain. They provide transparency, security, and immutability to digital interactions.

Contract Deployment
-------------------

Deploying a smart contract is like releasing a new program or application---it involves making the contract available and operational on the blockchain network.

What is it? Contract deployment is the process of uploading and activating a smart contract on the blockchain. Once deployed, the contract is accessible to users and can execute its predefined functions.

How it works: Developers write smart contract code using programming languages like Solidity (for Ethereum) or Vyper. They then compile the code into bytecode, which is deployed to the blockchain using a transaction. Once deployed, the contract is assigned a unique address and becomes part of the blockchain's state.

Why it's important: Contract deployment enables the creation of decentralized applications (dApps) and the execution of automated processes on the blockchain. It allows developers to implement trustless and transparent solutions for various use cases, such as decentralized finance (DeFi), supply chain management, and voting systems.

In summary, gas powers blockchain operations, transactions facilitate digital interactions, and contract deployment enables the execution of smart contracts on the blockchain network. Smart contracts are the rules for the app.

Transactions are something that is triggered by the users.

Smarts contracts automatically get triggered when there is an exchange without the need for a middleman, that's why they are deployed on blockchain.

```

1gas = 10^-9 ETH\
Each account has a data area called storage.

The EVM is not a register machine but a stack machine, so all computations are performed on a data area called the stack.

The only way to remove code from the blockchain is when a contract at that address performs the self-destruct operation

```

Hands-on with Ethereum Ecosystem Tools:
---------------------------------------

-   Development Workflow: Developers use Hardhat to write, compile, and deploy their smart contracts. They might also use Hardhat to run automated tests to ensure their contracts work as intended.

-   Integration with Metamask: Once the smart contracts are deployed, users interact with them through dApps, often using Metamask as their wallet and connection to the Ethereum network.

-   Security and Reliability: Developers may use OpenZeppelin's audited smart contract templates within their projects to ensure security and reliability. These contracts can be deployed using Hardhat and interacted with via Metamask.

Functions
---------

-   ### Function Modifiers

-   view - if we are only seeing the data.

-   pure - if we are not manipulating the data.

-   ### Visibility

-   public - anyone can call the fn

-   private - only the fn's within that contract can call the fn.

-   internal - only that contract's fn's and its inherited contract's fn's can call it.

-   external - this can be called outside of contract and its hierarchy. 

-   ### multiple assignment:

-   uint a;

uint b;

uint c;

(a, b, c) = multipleReturns(); // returns 1,2,3

// if cared about only c --->

(,,c) = multipleReturns();

OpenZeppelin
------------

-   OpenZeppelin is a library of secure and community-vetted smart contracts that we can use in wer own DApps
-   running functions costs real money for wer users, code optimization is much more important in Ethereum than in other programming languages