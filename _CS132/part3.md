---
layout: CS132
math: true
title: Assembler
part: true
---
## Microprocessor Fundamentals

Before diving into assembler, we need to be familiar with the **key components of all CPUs**. No matter how complex a CPU is, they always have the two following components.

- **Arithmetic Logic Unit** (ALU): this performs **math and logic**
- **Control Unit** (CU): this decodes program **instructions** and handles **logistics** for execution
- **Program Counter** (PC): this tracks the **memory address** of the **next instruction** for execution
- **Instruction Register** (IR): contains the **most recent instruction** fetched
- **Memory Address Register** (MAR): contains the address of the _region_ of memory for read/write purposes
- **Memory Data Register** (MDR): contains **fetched data** from memory or **data ready to be written** to memory. The MDR is also sometimes referred to as the Memory Buffer Register (MBR).

Remember that the **Control Unit** is connected to all components



In the Von Neumann architecture of microprocessor design, both instructions and data are stored in the same memory (In Harvard architecture they are separated)

Each instruction is split into two parts, the opcode and the operands. The opcode indicates which instruction it is, and the operand the parameters of the instruction

### The fetch-decode-execute cycle

The CPU works by executing instructions in sequence to perform a task. Since the instructions are stored in memory, we need three steps to do this called the **fetch-decode-execute cycle**:

> The CPU will constantly perform the following instruction cycle (the **fetch-decode-execute cycle**):
>
> - Retrieve instructions from memory
> - Decode to form recognisable operations
> - Execute to impact the current state

❕❗ **Learn the fetch-decode-execute cycle**. Think of it every time you look at a CPU, or a series of instructions. Think about which of the components (the CU or the ALU) are operating and when.

The instruction cycle takes place over **several CPU clock cycles** – the same clock cycles we saw in **sequential logic circuits**. The fetch-decode-execute cycle relies on several CPU components interacting with one another.

The operations composing the cycle are:

#### Fetch stage

1. Copy the address of the next instruction stored in the program counter to the memory address register
   **MAR <- PC**
2. Read the instruction in the main store at the address in the memory address register into the memory data register
   **MDR <- MS[MAR]**
3. Copy the instruction from the memory data register to the instruction register
   **IR <- MDR**
4. Increment the program counter to point to the address of the next instruction
   **PC <- PC + 1**

#### Decode stage

1. The control unit extracts and decodes the opcode from the instruction in the instruction register

2. The effective address is read to establish opcode type

   If indirect addressing is used, more data needs to be read from the main store (MS) before the instruction is executed, but if direct addressing is used, the execution can proceed immediately

#### Execute stage

1. The control unit signals to functional CPU components, e.g. to indicate which busses to enable, or set whether the main store should be read from or written to
2. Changes in the state of the machine, e.g. data registers, program counter, main store, resulting from the execution of the instruction may occur



## Registers

Now that we have the FDE cycle established, we need **registers** to help store intermediate information- this can either be in the form of memory or system flags. The Motorola 68008 will be used to give context to each type of register:

> You can think of a register as a parallel set of bits which can be toggled on or off.

### Data registers
- These are useful for storing **frequently used values** or **intermediate results** of calculations.
- You typically **only need one** data register **on chip** – however, the advantage of having many registers is that **fewer references to external memory are needed**.

> The 68008 has 32 bit data registers. This is a _long_ register; 16 bits form a _word_, and 8 bits form a _byte_.

### Status registers
- These have various status bits that are set or reset by the **ALU**.
- They are a _set of flags_:
  -  Half are for the **system** (CU)
  -  The **conditional control register** is a **subset of flags**

| ⬅ System byte ➡ |                 ⬅ User byte ➡                 |
| :-------------: | :-------------------------------------------: |
|     8 bits      | 8 bits, where a few bits will make up the CCR |

> The CCR is made up of several bits representing statuses such as _extend, negative, zero, overflow, carry_. If you wanted to check the status of the computer in a program, you could use bitwise **AND** against a bitmask (the string of bits you want toggled) and seeing if the final result is the flag you wanted to see.

### Address register
- These are used as **pointer registers** in the calculation of operand addresses.
- Operations on these addresses **do not alter the CCR**.
- Only the **ALU** has the capacity to incur changes in status (through operations on non-addresses).

#### Stack pointer
- This is an **address register** that points to the **next free location**; it can hold **subroutine return addresses**.

> The 68008 has pointer registers `A0-A6` whilst `A7` is used as a system stack pointer.

### Program counter
We are already familiar with what the PC does – it is a **32 bit** register on the 68008 that keeps track of the address at which the next instruction will be found. 

> If you were writing a software emulator, think of the memory as an array of strings (each string is an opcode). The PC would be an integer; your code would access `memory[PC]` to find out which opcode to pull from the memory and decode. Therefore, by incrementing the PC (an 8-bit, 16-bit, or 32-bit integer in your code) you can increment through the memory array. You can sometimes increment the PC by multiple amounts.
> Generally speaking, if you were to be writing an emulator for any CPU, you _could_ represent each register as an n-bit unsigned integer as you can toggle bits and perform bitwise operations, including bitshifts, on each integer variable. You would typically want to implement memory as a simple array of m-bit integers, where m is the word length of your CPU.

## Register Transfer Language

> RTL is used to describe the operations of the microprocessor as it is executing program instructions.
> It is also a way of making sure we access the correct parts of the microprocessor – **do not confuse it with assembler instructions**.

| Example RTL | Meaning |
|-------------|---------|
| `[MAR] ⬅ [PC]` | _Transfer_ the contents of the PC **to** the MAR |
| `[MS(12345)]` | The _contents_ of memory _location_ 12345 in the _main store_ |
| `[D1(0:7)] <- [D0(0:7)]` | <i>Transfer</i> the contents of the 1st 8bits of `D0` to the 1st 8bits of `D1` |

### Example: Instruction fetching
Given a series of instructions in words, we can find a way to represent this in RTL. Consider the following example:

| Plain words | RTL equivalent |
|-------------|----------------|
| Contents of PC transferred to MAR address buffers | `[MAR] ⬅ [PC]` |
| Increment the PC | `[PC] ⬅ [PC] + 1` |
| Load MBR from external memory, and set $$R / \bar W$$ to Read | `[MBR] ⬅ [MS([MAR])]`; $$R / \bar W$$ to Read |
| Transfer opcode to IR from MBR | `[IR] ⬅ [MBR]` |
| Decode the instruction | `CU ⬅ [IR(opcode)]` |

If you wanted to add a constant byte to a register (take `D0` from the 68008), you would engage the ALU and then transfer this into a register:
```
{ continue previous cycle }
[MBR] ⬅ [MS([MAR])]
ALU ⬅ [MBR] + D0
[DO] ⬅ ALU
```
As you can see, RTL describes how we can specifically set values in registers and interact with components in a standardised language.

## Assembly Language

*You should be able to explain the motivations, applications, and characteristics of high-level and low-level programming languages.* 

Code written in high-level programming languages typically go through a compiler, or for some languages like Python an [interpreter](https://www.computerscience.gcse.guru/theory/translators) (FYI only), and is eventually **translated** into machine code that your microprocessor understands. Low-level assembly code is **assembled** by an assembler into machine code.

<blockquote class="extra" markdown="span">
    Sometimes, the compilation process first compiles code into a lower-level assembly language and then the assembler assembles it into machine code, but in other cases high-level languages can be translated directly to machine code.
    I previously had the misunderstanding that high-level languages are
    **always** compiled to some kind of assembler language and is then 
    assembled to machine code, but this is not the case.
</blockquote>

The **motivation** for low-level languages is to give programmers more **control** of how the microprocessor executes a particular program, as it allows you to define the exact sequence of instructions that will be executed by the microprocessor. High-level programming languages don’t have the capability to provide such specific instructions. Sometimes, this means that the resultant machine code has **greater performance** than one that was compiled from a high-level language.

|                     High-level Language                      | Machine Code  |                      Assembler Language                      |
| :----------------------------------------------------------: | :-----------: | :----------------------------------------------------------: |
| Human readable. <br />Difficult to translate into performant machine code whilst retaining original intention. | Not readable. | More readable than machine code but more precise than high-level languages. |

> Assembly language saves us from machine code by using **mnemonics**. We can provide **memory locations** and **constants**, as well as **symbolic names**. These features are not afforded to us by RTL!

### Assembler Format

Assembly language typically takes the following form:

|  | Label (Optional) | Opcode | Operand | Comment |
|:-----:|:------:|:-------:|:-------:|:-------:|
| **Example** | `START:` | `move.b` | `#5, D0` | `|load D0 with 5` |
{: .centeredtable}

### Assembly Language Conventions

There are several conventions of Assembly language to keep in mind:

| Number Symbol | Meaning |
|---------|-------------|
| `#` | Indicates a constant. A number without `#` is an address. By default, numbers are in base 10. |
| `$` | A **hex** value. E.g. `ORG $4B0 | this program starts at hex 4B0` |
| `%` | A **binary** value. E.g. `add.b #%11, D0 | add 3 to D0` |

<br/>

| Directives | Definition | Convention | Example |
|------------|------------|------------|---------|
| Label names | You can assign labels to represent bytes or instructions | Label or name followed by `:` | `ANS: DS.B 1` will leave 1 byte of memory empty and name it ANS |
| Defining storage (`DS`) | Instruct the assembler to reserve some memory | `DS.{data type} {amount}` | `DS.B 1` will leave 1 byte of memory free. See data types further on. |
| Origin (`ORG`) | Tells the assembler where in memory to start putting the instructions or data | `ORG` followed by value | `ORG $4B0` starts the program at hex `4B0` |

If you want to string together an assembler instruction, you typically write them in the form
`operation.datatype`  `source,`   `destination`

### Data types and assembler instructions

Previously, we saw how the `DS` directive requires a data type and then an amount of data to set aside; Assembler language defines three types of data type:
- **8 bits / byte**: `.b`
- **2 bytes / word**: `.w`
- **4 bytes / long word**: `.l`

> You can typically omit the data type and `.` if you are working with a **word**.

## Instruction set aspects

Generally speaking, there are two aspects to a CPU instruction set:
- **Instructions** which tell the processor which operations to perform
  - Data movement: this is similar to what we have already seen with RTL
  - Arithmetic instructions: keep in mind whether your CPU can operate on fractional numbers
  - Logical instructions
  - Branch instructions
  - System control instructions
- **Addressing modes** tell the processor which ways it can access data or memory locations, or how they may be calculated by the CPU.

> Addressing modes can provide data, specify where it is, and how to go find it.
> You may describe direct addresses, or relative addresses where you compare one address to another to find it.

### Data Movement Instructions

The `move` operations are similar to RTL, just pay attention to the data type.

```
move.b D0,D1  | [D1(0:7)] <- [D0(0:7)]
moveb  D0,D1  | same
exg.b  D4,D5  | exchange contents of two registers
swap   D2     | swap lower and upper words of D2
lea  $F20,A3  | load effective address [A3] <- [$F20]
```

### Arithmetic Instructions

Depending on your processor architecture, you may or may not have floating point support.

```
add.l  Di,Dj  | [Dj] <- [Di] + [Dj]
addx.w Di,Dj  | also add in x bit from CCR
mulu.w Di,Dj  | [Dj(0:31)] <- [Di(0:15)] * [Dj(0:15)] signed multiplication
```

You also have `sub` (subtract), `mulu` (unsigned mult), `divu` and `divs`. You don’t have to memorise or know these very well but the key takeaways are 

- The “variables” (around the comma `,`) are operated on sequentially (left to right). 
- The result of the operation is stored in the second variable (after the comma `,`).
- You can add or subtract bits from the CCR
- Division and multiplication use the first half of the bits available (unless specified) because the resultant register has a fixed bit length (32 bits in the above example).

### Logical instructions

We can often use **bitmasks** to achieve our goals in conjunction with **bitwise operations**.

```
AND.B #%11110000, D3 | bitwise AND on 1111 0000 and first 8bits of D3
```

Additional pointers:

- **Shift operations** are fundamental; for example, you can multiply by 2 using left shift operations.
- Other operations such as rotations also exist.

### Branch instructions
These are crucial for **control flow statements**; we typically branch based on **conditions set in the CCR**.

```
LDA NumA | Read the value "NumA"
CMP NumB | Compare against "NumB"
BCC Loc  | Go to label "Loc" if "NumA" < "NumB", or in RTL: [PC] <- Loc
```

[Example](https://www.c64-wiki.com/wiki/BCC) for illustration purposes (we don’t need to know what `LDA` or `CMP` is exactly just roughly understand the syntax). Branch instructions cause the processor to branch (jump) to a labelled address.

- CCR flags are set by the previous instruction
- The current instruction can test the state of the CCR bits and branch if a certain **condition** is met.

### Subroutines and Stacks
Subroutines (`JSR`; jump, `RTS`; return) let you use the **same code repeatedly** reducing program size and improving readability. It is similar to functions.

Typically when a subroutine is called (with `JSR <subroutine label>`), the current address in the PC is **pushed** to a stack and your stack pointer points to the newly pushed address (current address). The address of the subroutine is “loaded” into the PC and the instructions in the subroutine is executed.

When `RTS` is called, the stack is **popped** and the **popped address** is put into the PC; the stack pointer points to the next address at the top of the stack.

## Addressing modes
As mentioned earlier, there are several ways for the CPU to access memory; you should be familiar with the following, and they are found on many CPUs (not just the 68008): 

| Address type | Definition | Example |
|--------------|------------|---------|
| Direct address | The address to act on is **held within a specified register** (in this case `D2` and `D3`) | `move D3, D2` |
| Immediate address | The **operand** forms part of the instruction and **remains constant** - no fetch from memory is made | `move.b #$42, D5` |
| Absolute address | The **operand** contains the address as an **explicit constant** – not useful because programs are stored at different addresses at each run-time. | `move.l D2, $7FFF0` which moves the long value held in D2 to address `$7FFF0` |
| Relative address | These all **relate to the program counter** to write **position independent code** | `move d16(PC), D3` move contents that are located in the address +16 addresses from PC to `D3` |

> Indirect addressing is never on the exam; however, this is where we add offsets, increments, or indexed addressing to access memory or data. 

[Additional source #1](http://www.cs.iit.edu/~cs561/cs350/addressing/addsclm.html), [Additional source #2](https://www.geeksforgeeks.org/addressing-modes/)

