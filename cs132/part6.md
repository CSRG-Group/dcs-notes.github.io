---
layout: CS132
title: Processor Architecture
part: true
pre: part5
---

<p align="center">
    <b>Computer architecture</b> concerns the structure and properties of a computer system, as viewed from perspective of a software engineer while <b>computer organisation</b> is the same but as viewed from the perspective of a hardware engineer.
</p>

# Microprocessor Organisation

Considerations:

- How large is your main store? (no. of words) x (no. of bits)
- PC should have enough bits to be able to refer to every word in the main store. 
- How many programmatic instructions (the “function” the mnemonics refer to e.g. `CLEAR` or `ADD`) do you want to provide to software engineers?
  - Remember that every processor architecture has a different type of assembly language (assembly language is very processor specific).
  - The size of your opcode will dictate the number of  instructions you can allow programmers to use. E.g. 3-bit opcode = 2<sup>3</sup> = 8 different instructions.
- Your subsystems will have to communicate – we do this with shared busses and three-state buffers.
- How many arithmetic instructions do you have? This directly affects the number of function selects your CU must have. E.g. Lets say your processor has 4 arithmetic instructions: `CLEAR`, `DEC1`(decrement), `INC1`, `ADD#somevalue`. Then you will need 2 function selects from your CU to your ALU to specify which arithmetic instruction the ALU is executing.

## Instructions and Controls Signals



# Micro and Macro Instructions

# Control Unit Design

| Requirements of CU                                           | Implication                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Needs to operate at or near clock speed of microprocessor    | Needs to have a clock input.                                 |
| Needs to be aware of the state of the microprocessor         | Has to be connected to the CCR and its flags.                |
| Needs to take an Opcode.                                     | Needs an input for Opcode.                                   |
| Needs to translate opcode into appropriate sequence of processes to essentially execute opcode instructions. | Needs `Enable`, `Clock`, and `Read/Write` lines to all the components/subsystems to assert the sequence of signals to carry out the opcode. |
| Function selects                                             |                                                              |

# CISC vs RISC

Complex Instruction Set Computers and Reduced Instruction Set Computers.