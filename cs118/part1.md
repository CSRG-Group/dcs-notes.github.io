<flex style="display:flex; justify-content: space-between;">
<a href="index.html" title="CS118 Home">🏡CS118</a>
<a href="part2.html" title="Conditional Statements">Next👉</a>
</flex>


# Variables, Number Systems, and I/O

## Variables

**Variables** are what we store _values_ in. A value can be anything from a primitive value, all the way up to an object instance. They're declared like this:

``` java
// Creating an integer variable
int x = 5;

// Creating a String variable
String str = "I am a string";

// Instantiating a Scanner object and storing it in a variable
Scanner sinput = new Scanner(System.in);

// You can then call Scanner methods like so:
int a = sinput.nextInt();
```

## Number systems

### Two's Complement

_Useful links: [source](https://www.cs.cornell.edu/~tomf/notes/cps104/twoscomp.html#:~:text=Two's%20complement%20is%20the%20way,add%20one%20to%20the%20result.&text=That%20is%20how%20one%20would%20write%20%2D28%20in%208%20bit%20binary.)_ _[conversion tool](https://www.rapidtables.com/convert/number/decimal-to-binary.html)_

Two's complement is the way in which computers represent integers. To get the two's complement negative notation of an integer, you perform the following steps:

1. Write out the number in binary
2. Invert the digits
3. Add one to the result

**It is a given** that if the leftmost bit is a `1`, then **this number is negative**.

**⚠ Important:** If you are converting a positive integer _to_ two's complement form, then you simply do a basic conversion. When converting to binary, you only invert the bits if you have a negative number. Similarly, if you see the number `00011110`, this is `30`- you do not need to do the hokey-pokey inversion magic. If you are reading from a binary number, you can either read the basic decimal number _OR_ the decimal from the signed 2's complement. In which case, the number `11111101` would read `253` and `-3` respectively.

For example, given 8 bits and the number -28:
##### Write out the binary form of +28
`28 = 0 0 0 1 1 1 0 0`
##### Invert the digits
`0 0 0 1 1 1 0 0 => 1 1 1 0 0 0 1 1`
##### Add 1
``` 
1 1 1 0 0 0 1 1
              1 +
-----------------
1 1 1 0 0 1 0 0
```

### Two's Complement: Converting to decimal
It is therefore also possible to convert _from_ Two's Complement; take the number `0xFFFFFFFF` as an example. This is the hex representation of `1111 1111 1111 1111 1111 1111 1111 1111`.

At first glance, we can tell that **this number is negative**, as it has a leading (leftmost) bit set to `1`.

If you want to see what this number is a negative _of_, then we follow a similar set of steps:

1. Invert all the bits
2. Add one

Therefore, inverting all the bits `0xFFFFFFFF` results in `0000 0000 0000 0000 0000`. Then, adding `1` leads to `0000 0000 0000 0001`, which is the number `1`. Therefore, the _negative_ of `0xFFFFFFFF` is 1, and hence the _value_ is `-1`.

### Java’s numeric data types

| Type    | Bytes           | Value in Decimal                         |
| ------- | --------------- | ---------------------------------------- |
| `byte`  | 1 byte (8 bits) | -128 to +127                             |
| `short` | 2 bytes         | -32768 to +32767                         |
| `int`   | 4 bytes         | -2<sup>31</sup> to +(2<sup>31</sup> - 1) |
| `long`  | 8 bytes         | -2<sup>63</sup> to +(2<sup>63</sup> - 1) |

We’ve seen how two’s complement is used to represent **integers**. For decimal numbers, like `float` and `double`, we use floating point notation to store their values (IEEE-754).

A `float` is 32-bits and can represent numbers between -3.4e38 and 3.4e38 with 6 to 7 significant digits of accuracy.

A `double` is 64-bits and can be represent numbers between -1.7e308 and 1.7e308 with 14 to 15 significant digits of accuracy. 

## IEEE 754 notation for floating point numbers

_Useful links: [GeeksforGeeks (source)](https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/)_ _[Conversion Tool](https://www.h-schmidt.net/FloatConverter/IEEE754.html)_

Before we begin, a brief reminder on fractional binary: `9.125 = 1001.001`. We achieved this result with the following intuition:

| Binary place values | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup>| 2<sup>0</sup> | 2<sup>-1</sup> | 2<sup>-2</sup> | 2<sup>-3</sup> |
|------------|-----|-----|-----|--------|--------|--------|--------|
| Binary bits| 1 | 0 | 0 | 1 | 0 | 0 | 1|
| Decimal values | 8 | 0 | 0 | 1 | 0 | 0 | 0.125 |

The table is a little janky, but it hopefully gets the point across; you continue in descending powers of 2 as you go rightwards. Anything beyond `2^0` is followed by a decimal place, `.`.

### Components of the IEEE 754 Floating Point Number

Before diving into the components, it's much better to look at an example. Therefore, take the decimal number `43.625`; this has binary representation `101011.101`. However, we would represent this as `1.01011101` x 2<sup>5</sup>. 

In general the value of a floating point number is determined by

> (-1)<sup>(Sign Bit)</sup> x 1.(Mantissa) x 2<sup>(Biased Exponent) - 127</sup>


There are three basic components which make up the IEEE 754 floating point number:
1. The **Sign Bit**: this is a _single bit_ where a `0` represents a positive number, whilst a `1` represents a negative number.
2. The **Biased Exponent**: this is an _eight bit_ exponent field which represents both positive and negative exponents. It is **biased** because it is a fixed positive value that is then subtracted by 127 to represent either a positive or negative exponent. For example, given the exponent bits 10000100<sub>2</sub> = 132<sub>10</sub>. We arrive at the index 2<sup>5</sup> because 2<sup>132-127</sup> = 2<sup>5</sup>. 
3. The **Mantissa**: this is a _twenty-three bit_ field which makes up the numbers to right of the decimal point `.` (as shown in the formula above). The most significant bit (the left most) is 1/2<sup>1</sup>, then 1/2<sup>2</sup>, and so on. In most cases, the value before the `.` is 1, however in some cases which we will explain in the **special** cases section below, it may be 0 (this is when it is renormalised). 

With these components established, we can rewrite our previous example, `43.625`, `1.01011101` x 2<sup>5</sup> in IEEE 754 notation:

| Sign (1 bit) | Exponent (8 bits) | Mantissa (23 bits) |
|--------------|-------------------|--------------------|
| `0`          | `10000100`      | `01011101000000000000000` |

**Complete representation:** `0 10000100 01011101000000000000000`

### IEEE 754 Double-precision Number

Luckily for our computers, there is also a specification for double-precision numbers; it basically uses the same components, except for the fact that there are more bits.

>  (-1)<sup>(Sign Bit)</sup> x 1.(Mantissa) x 2<sup>(Biased Exponent) - 1023</sup>

- **Sign Bit.** No change in bits.
- **Mantissa.** 52-bits
- **Biased Exponent.** 11-bits

### Special values

IEEE 754 also has some special values you need to keep in mind:

When the **exponent bits** = `0000 0000`
- If the _fraction_ is `0`, the value is `0` or `-0`.
- Otherwise, renormalise the number with this form: (`-1`)<sup>sign bit</sup> x `0.(fraction)` x 2<sup>-127</sup>

The **exponent bits** = `1111 1111`
- If the _fraction_ is `0`, the value is `+- infinity`.
- Otherwise, the value is `NaN`, otherwise known as **not a number**.

## Output

The main content I gleamed from this was to be familiar with the three Linux streams:

| Stream | Purpose | Example |
|--------|---------|---------|
| `System.in` | Collect input | `Scanner` uses this stream to collect user input |
| `System.out` | Send normal output | Your typical `System.out.println()` will output to this stream |
| `System.err` | Send output when there is an error | Some IDE's such as Eclipse will output to this stream to highlight text in a different colour |

## Casting

Generally speaking, this is the process of **changing the data type** of one piece of data from one type to another. You need to be familiar with the different types (pun not intended) of casting:

|  | Implicit casting | Explicit casting |
|---------|------------------|------------------|
| **Definition** | No loss of precision | Possible loss of precision |
| **Example** | `float pi = 3.141f;` <br />`double big_pi = pi;` | `float pi = 3.141f;` <br />`int less_pi = pi;` |

The compiler will 'let you know' (otherwise known as screaming) if you attempt an **explicit cast**. However, if this is intentional you can do it like this.

```java
// lets say you want to cast a variable from a float to an int
float pi = 3.144;
int more_pi = (int) pi; // essentially tells the compiler not to worry
```

## Lazy and strict evaluation

You will be familiar with both `&/&&` and `|/||`; if you use either of these, your code will still compile correctly. However, one is **strict** whilst the other is **lazy**. If you need a quick way to remember this, a **SINGLE CHARACTER** means **STRICT** evaluation.

The only difference between a strict and a lazy evaluation is how many of the operands are computed; this means that if you are expecting something to happen on the RHS of a comparison, **only a strict evaluation** will execute the LHs as well as the RHS. In essence, a lazy comparison will only execute both operands if needed.

```java
int a = 5;

// Lazy AND example; the LHS is false, so the overall statement is false. The RHS is not executed, and a = 5.
if (false && (a++ == 5)) {}

// Strict AND example; the LHS is false, but the RHS is still executed. a = 6 after this, even though the result is false.
if (false & (a++ == 5)) {}

// Therefore, a lazy OR operator will not execute the RHS if the LHS is true.
```
## Pre- and Post-increment

There are two ways to increment a numerical variable using the `++` operation:

| Prefix `++var` | Postfix `var++` |
|-|-|
| The value is _incremented first_, and then returned. | The value is _returned first_, and then it is incremented |

I've found that a useful way to remember this is to think of where the `++` is; in the prefix case, the `++` precedes the variable name. Therefore, you can think of the return always happening when you reach the `var`. Hence, prefix `++var` incremements and then returns, whilst postfix `var++` returns and then increments.

## Operator precedence _(BIDMAS on steroids)_

The Java creators realised that they too wanted to implement operator precedence. It follows this order:

| P | U | M | A | S | R | E | S | L | A |
|-|-|-|-|-|-|-|-|-|-|
| Postfix | Unary | Multiplicative | Additive | Shift | Relational | Equality | Strict Ops | Lazy Ops | Assignment |
| `var++` | `++var` | `* / %` | `+ -` | `<<`| `<= < >= >` | `== !=` | `&` | `&&` | `= += -= *= /= ...`|
