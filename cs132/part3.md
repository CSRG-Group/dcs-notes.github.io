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
There are several 
