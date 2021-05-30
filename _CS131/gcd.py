#!/usr/bin/python3

from math import log10, ceil

def printTableRow(a,b,r):
    print("| {} | {} | {} |".format(
        str(a).ljust(strPad),
        str(b).ljust(strPad),
        str(r).ljust(strPad)
    ))

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
strPad = ceil(max(log10(a), log10(b)))

if a < b:
    a,b = b,a
r = -1

while r != 0:
    r = a % b
    printTableRow(a,b,r)
    a,b = b,r

print("GCD = {}".format(a))
