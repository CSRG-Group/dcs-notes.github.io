---
layout: 132/CS132
slides: true
layout: notes
math: true
title: Memory Systems
---

# Memory Systems
## Memory hierarchy
When deciding on a memory technology, you must consider the following factors:
- Frequency of access
- Access time
- Capacity required
- Financial cost

> The **designer's dilemma** is the conflict that is caused by choosing between low cost, high capacity storage or high cost, low capacity storage.
> Ideally, we would want our storage access to be frequent, quick, and spatially efficient- the balance of these three leads to the cost of the storage.

<img src="part4res/4-1.png" alt="Memory hierarchy diagram" class="center"/>

We know that roughly **90%** of memory accesses are within +-2KB of the previous program counter position. Therefore, we should only choose expensive memory **when we need it**, which is due to **spatial locality**.

**Temporal locality** refers to the likelihood that a particular memory location will be referenced in the future.

## Cache Memory
- Cache is **kept small to limit cost**; it is also **transparent to the programmer**. However, this does allow _some_ control over what is stored in it.
- A cache access is known as a **'cache hit'**.
- Cache speed is incredibly important- moving down the memory hierarchy will take orders of magnitude more time for similar memory hits.

> **Moore's Law** is focused on the transistor count within integrated circuits. It states that this count doubles roughly every two years.
> Currently, single core frewuency is tailing off; this has lead the industry to focus on multicore performance instead.
> Comparitively, memory access speed is improving much more slowly; access time and capacity can become a huge bottleneck when it comes to creating performant systems.
 
> Cache concepts are not included in these notes as they are not fully examined, and also do not feature in the revision videos.

## Memory Cell Organisation
Now that we're familiar with different parts of the memory hierarchy, it's crucial that we understand how this memory is actually constructed (down to the metal almost). 

### Semiconductor Memory (main store)
Semiconductor memory is the most common form of main store memory, otherwise known as **RAM**. It can be broken up into several groups:
- **Static RAM** (SRAM)
  - SRAM uses a **flip-flop** as storage element for each bit.
- **Dynamic RAM** (DRAM)
  - For each bit, the **presence or absence of charge** in a capacitor to determine a `1` or `0`.
  - The capacitor charge **leaks away over time**, which requires **periodic refreshing**.
  - DRAM is typically cheaper than SRAM which is why we accommodate for the higher overhead.
  
> Refreshing DRAM incurs a **constant overhead**, which means that it **does not increase per bit**.

Both **SRAM and DRAM are volatile** memory storage- therefore, power must continuously be applied. However, the similarities end there and it is crucial to recognise the differences between the two memory cells.

> Always ask yourself about the cost of these memory technologies- it is the reason we have decided to use semiconductor memory as our main store.

| SRAM cells | DRAM cells |
|------------|------------|
| Provides **better read/write times** | Generally simpler and more compact, which allows for **greater memory cell density** |
| **Cache memory**, both on and off chip, is implemented as SRAM | Cheaper to produce than equivalent SRAM memory, and hence is used for **main memory** |

DRAM can be organised even further:
- Synchronous DRAM (SDRAM)
- Rambus DRAM (RDRAM)
- Double Data Rate Synchronous (DDR SDRAM)
- Cache DRAM (CDRAM)

## Organising memory 

### Memory cells
Before we begin organising memory, it's useful to know what the individual memory cells will look like. Think of them as single boxes with the following properties:
- They only store two states (`1` or `0`).
- They are capable of being written to as well as read from. This is controlled by a $$R / \barW$$ line which determines which direction the information will flow from.
- They are enabled when a single pin, such as a `SELECT` line, is powered.

<img src="part4res/4-2.png" alt="Memory cell diagram" class="center" style="zoom: 50%;"/>

> You can think of a memory cell as a means of storing a single bit.

### Storing single words

In order to store multiple bits together (i.e. words), we will simply store a series of memory cells next to each other. We will need some column selecting I/O to handle selecting the individual bits of the word correctly.

<img src="part4res/4-3.png" alt="Memory cell word diagram" style="zoom: 50%;"/>

### Storing multiple words

Now that we have organised individual words, we want to store multiple words in memory. We can use this grid arrangement to arrange the words in parallel as follows (imagine we wanted to store four of the 4-bit words shown above):

<img src="part4res/4-4.png" alt="Memory cell words diagram" style="zoom: 50%;"/>

In our **address decoder**, we have $$ log_{2} (W) $$ many control pins, where $$ W $$ is the number of words we want to store in memory. (This is because each pin can be high or low, and hence refer to two distinct words). 

**We want to maintain a square grid of cells.** We could simply have a 16-bit word, which we partition into four individual words (it is possible to put smaller words into the registers of larger ones). However, this would require 16 data lines on the column selection IO, with each bit requiring power; this would be rather lopsided and would result in a column selector doing all the work. Maintaining a square grid means that we can balance the number of required pins across two different pieces of IO, each with their own power requirements.

> We are trying to avoid long, narrow arrays when we design our memory cell arrays. We want to **maximise space for memory cells** and minimise space taken up by IO.
 


