## Variables, Number Systems, and I/O

### Variables

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

### Number systems

#### Two's Complement

_Useful links: [source](https://www.cs.cornell.edu/~tomf/notes/cps104/twoscomp.html#:~:text=Two's%20complement%20is%20the%20way,add%20one%20to%20the%20result.&text=That%20is%20how%20one%20would%20write%20%2D28%20in%208%20bit%20binary.)_ _[conversion tool](https://www.rapidtables.com/convert/number/decimal-to-binary.html)_

Two's complement is the way in which computers represent integers. To get the two's complement negative notation of an integer, you perform the following steps:

1. Write out the number in binary
2. Invert the digits
3. Add one to the result

**It is a given** that if the leftmost bit is a `1`, then **this number is negative**.

**⚠ Important:** If you are converting a positive integer _to_ two's complement form, then you simply do a basic conversion. When converting to binary, you only invert the bits if you have a negative number. Similarly, if you see the number `00011110`, this is `30`- you do not need to do the hokey-pokey inversion magic. If you are reading from a binary number, you can either read the basic decimal number _OR_ the decimal from the signed 2's complement. In which case, the number `11111101` would read `253` and `-3` respectively.

For example, given 8 bits and the number -28:
##### Write out the binary form
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

#### Two's Complement: Converting to decimal
It is therefore also possible to convert _from_ Two's Complement; take the number `0xFFFFFFFF` as an example. This is the hex representation of `1111 1111 1111 1111 1111 1111 1111 1111`.

At first glance, we can tell that **this number is negative**, as it has a leading (leftmost) bit set to `1`.

If you want to see what this number is a negative _of_, then we follow a similar set of steps:

1. Invert all the bits
2. Add one

Therefore, inverting all the bits `0xFFFFFFFF` results in `0000 0000 0000 0000 0000`. Then, adding `1` leads to `0000 0000 0000 0001`, which is the number `1`. Therefore, the _negative_ of `0xFFFFFFFF` is 1, and hence the _value_ is `-1`.

### IEEE 754 notation for floating point numbers

_Useful links: [GeeksforGeeks (source)](https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/)_ _[Conversion Tool](https://www.h-schmidt.net/FloatConverter/IEEE754.html)_

Before we begin, a brief reminder on fractional binary: `9.125 = 101.001`. We achieved this result with the following intuition:

| Binary place values | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>-1</sup> | 2<sup>-2</sup> | 2<sup>-3</sup> |
|------------|-----|-----|-----|--------|--------|--------|
| Binary bits| 1 | 0 | 1 | 0 | 0 | 1|
| Decimal values | 8 | 0 | 1 | 0 | 0 | 0.125 |

The table is a little janky, but it hopefully gets the point across; you continue in descending powers of 2 as you go rightwards. Anything beyond `2^1` is followed by a decimal place, `.`.

#### Components of the IEEE 754 Floating Point Number

Before diving into the components, it's much better to look at an example. Therefore, take the decimal number `43.625`; this has binary representation `101011.101`. However, we would represent this as `1.01011101` x 2<sup>5</sup>.


There are three basic components which make up the IEEE 754 floating point number:
1. The **sign of Mantissa**: this is a _single bit_ where a `0` represents a positive number, whilst a `1` represents a negative number.
2. The **biased exponent**: this is an _eight bit_ exponent field which represents both positive and negative exponents. Therefore, the exponent is **127 greater** than the index for 2<sup>a</sup>. For example, given the index 2<sup>5</sup>, the value of the exponent would actually be `a = 5 + 127 = 132 = 10000100 (binary)`
3. The **Mantissa**: this is a _twenty-three bit_ field which makes up the numbers to the **left of the exponent**. However, there is **never a leading 0**. Being binary, we **exclude the first 1** to give us more precision. Therefore, `101011101 => 01011101000000000000000`.

With these components established, we can rewrite our previous example, `43.625`, `1.01011101` x 2<sup>5</sup> in IEEE 754 notation:
| Sign (1 bit) | Exponent (8 bits) | Mantissa (23 bits) | Complete representation |
|-|-|-|-|
|`0`|`100000`|`01011101000000000000000`| `010000001011101000000000000000` |

#### IEEE 754 Double-precision Number

Luckily for our computers, there is also a specification for double-precision numbers; it basically uses the same components, except for the fact that there are more bits.

| Sign (1 bit) (no change) | Exponent (11 bits) (is now **1023 larger**, not 127) | Mantissa (52 bits) | Complete representation is 64 bits |
|-|-|-|-|
