---
layout: notes
title: "Displaying Math"
---

## How do I display Math?

The site uses MathJax to display mathematical equations there is a brief tutorial on how to include them in your pages a full tutorial can be found at the bottom of the page

Firstly, ensure that the top of the markdown (.md) file has YAML Front Matter containing the key-value pair `math: true`. If it's not there, add it into the front matter.

For math sections (ensure that there's a new line before and after the start and end `$$` respectively):

```
$$
1+1=2
$$
```

or `$$1+1=2$$` for in-line math

If there is no YAML Front Matter you can add it at the top of the file like this:

```
---
math: true
---
```

When adding MathJax to json files most notably quiz files a double slash is needed

```
$$x \\cdot (y + z) \\equiv (x \\cdot y) + (x \\cdot z)$$
```

[Detailed MathJax Tutorial](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)
