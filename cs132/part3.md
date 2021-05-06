---
layout: 132/CS132
slides: true
layout: notes
math: true
title: Assembler
---
# Assembler

## Microprocessor Fundamentals

Before diving into assembler, we need to be familiar with the **key components of all CPUs**. No matter how complex a CPU is, they always have the two following components.

- **Arithmetic Logic Unit** (ALU): this performs **math and logic**
- **Control Unit** (CU): this decodes program **instructions** and handles **logistics** for execution

> The CPU will constantly perform the following instruction cycle (the **fetch-decode-execute cycle**):
> - Retrieve instructions from memory
> - Decode to form recognisable operations
> - Execute to impact the current state

### Learn the fetch-decode-execute cycle. Think of it every time you look at a CPU, or a series of instructions. Think about which of the components (the CU or the ALU) are operating and when.

The instruction cycle takes place over **several CPU clock cycles**- the same clock cycles we saw in **sequential logic circuits**. The FDE cycle relies on several CPU components interacting with one another.

### FDE Components
There are several components that make up the FDE cycle:
- ALU
- CU
- **Program Counter** (PC): this tracks the **memory address** of the **next instruction** for execution
- **Instruction Register** (IR): contains the **most recent instruction** fetched
- **Memory Address Register** (MAR): contains the address of the _region_ of memory for read/write purposes
- **Memory Data Register** (MDR): contains **fetched data** from memory or **data ready to be written** to memory

> Remember that the **Control Unit** is connected to all components

A typical instruction cycle may look something like this:
| Fetch | Decode | Execute |
|-------|--------|---------|
| <ul><li>Instruction Received from memory location in PC</li><li>Retrieved instruction stored in IR</li><li>PC incremented to point to next instruction in memory</li></ul> | <ul><li>Opcode retrieved / instruction decoded</li><li>Read effective address to establish opcode type</li> | <ul><li>CU signals functional CPU components</li><li>Can result in changes to data registers, such as the PC etc.</li><li>PC incremented to point to next instruction in memory</li></ul> |
  
## Registers

Now that we have the FDE cycle established, we need **registers** to help store intermediate information- this can either be in the form of memory or system flags. The Motorola 68008 will be used to give context to each type of register:

> You can think of a register as a parallel set of bits which can be toggled on or off.

#### Data registers
- These are useful for storing **frequently used values** or **intermediate results** of calculations.
- You typically **only need one** register **on chip**- however, the advantage of having many registers is that **fewer references to external memory are needed**.

> The 68008 has 32 bit data registers. This is a _long_ register; 16 bits form a _word_, and 8 bits form a _byte_.

#### Status registers
- These have various status bits that are set or reset by the **ALU**.
- They are a _set of flags_:
  -  Half are for the **system** (CU)
  -  The **conditional control register** is a **subset of flags**

| ⬅ System byte ➡ | ⬅ User byte ➡ |
|-------------|-----------|
| 8 bits | Several bits will make up the CCR |

> The CCR is made up of several bits representing statuses such as _extend, negative, zero, overflow, carry_. If you wanted to check the status of the computer in a program, you could use bitwise **AND** against a bitmask (the string of bits you want toggled) and seeing if the final result is the flag you wanted to see.
 
#### Address reguster
- These are used as **pointer registers** in the calculation of operand addresses.
- Operations on these addresses **do not alter the CCR**.
- The **ALU** has the capacity to incur changes in status (operations on non-addresses
