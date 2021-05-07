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
