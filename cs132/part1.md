# Data Representation

## Representation and number systems

In terms of the exam, the most important concept is **value versus representation** of any number. In practice, this means you need to accept that you cannot always represent a value across different bases using the same number of symbols.

There are four available symbols to us:

| Number system | Symbols | Base |
|---------------|---------|------|
| Binary        | `0`, `1` | 2 |
| Octal         | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7` | 8 |
| Decimal       | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` | 10 |
| Hex           | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `A`, `B`, `C`, `D`, `E`, `F` | 16 |

It is crucial that you learn to distinguish between representations of these numbers- for example, 16<sub>10</sub> = 10000<sub>2</sub> = 20<sub>8</sub> = 10<sub>16</sub>.

For any number system, you can use the following equation to calculate the value of a number: 
```
value = (sum from i = 0 to i = (N-1)) symbol(i) x base^i

// Change this to an image at some point
```
### Sizes of symbols
As the base increases, we can see that a single symbol can represent bases more concisely than in other bases- take the following examples:
- Octal symbols can represent 3 bits:
  - 111<sub>2</sub> = 7<sub>8</sub>
  - 010 100 011<sub>2</sub> = 243<sub>8</sub>
- Hex symbols can represent four bits:
  - 1111<sub>2</sub> = 15<sub>10</sub> = F<sub>16</sub>
  - 1010 0011<sub>2</sub> = A3<sub>16</sub>

A decimal symbol requires roughly **3.3 bits**, and therefore hex and octal are much more convenient when describing values on a bus.

## Electrical circuit representation (transistor-transistor logic)

In terms of electrical circuits, we can still communicate using a binary system. We use two voltage ranges to determine when we register a `0` or a `1`:
| Voltage | Signal |
| ------- | ------ |
| 0V - 0.8V | 0 |
| 2.4V - 5V | 1 |

You can therefore carry this information on a wire; if you have multiple wires running in parallel, this is known as a **parallel bus**- a collection of wires communicating a value between sub-circuits.

## Bits, Bytes, Words, and Bus sizes

You need to understand and recall the value ranges (or size) of the aforementioned terms:
| Magic word | Explanation | Value range |
| ---------- | ----------- | ----------- |
| Bit | Binary digit | Values 0<sub>2</sub> or 1<sub>2</sub> inclusive |
| Byte | 8 bits | Values 0<sub>10</sub> to 255<sub>10</sub> inclusive |
| Nibble | 4 bits | Values 0<sub>10</sub> to 15<sub>10</sub> inclusive |
| Word | The number of **bits** a machine can **process simultaneously** | Machine specific- increasing over time |

The **disadvantages** of increased word size are increased CPU, bus, and memory complexity. This results in an **exponential increase in cost**.

## Converting between decimal and hexadecimal
