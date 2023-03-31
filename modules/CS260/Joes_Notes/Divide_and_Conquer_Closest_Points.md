
## Problem

Given a set of pints on a plane find the pair of points $$(x_1,y_1)$$ and $$(x_2,y_2)$$ with the smallest euclidean distance between them. 

$$
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
$$


## Solution

Divide the set of points by a line L such that there are $$n/2$$ points on each side of the line

Find the closest pair of points of each side recursively.

Find closes pair with one point in each side

return the best of the 3 solutions

### Technique 1
To find the closest pair with one point on each side

observation: Only the points within $$\delta$$ of the dividing line

where $$\delta$$ is the smallest distance of the closest pair of points between the left hand side and the right hand side

Select and sort points in 2 $$\delta$$ of their y-coordinate

Check distance of only those within 7 positions in the sorted list

### Correctness
Choosing the next 7 elements can seem counter intuitive the proof is as follows

let $$\delta$$ be the minimum distance from the left side group or the right side group

Create a rectangle $$R$$ of width $$2\delta$$ centered on the midpoint line and height $$\delta$$

Divide the rectangle into 8 squares each of side length $$\delta/2$$

Diagram:
![An image showing 8 squares and rectangle R](/assets/ClosestPairProof.png)

There can be at most 1 point per square as all points on the same side must be at least $$\delta$$ distance

The furthest two locations in a square are

$$
\sqrt{(\frac{\delta}{2})^2+ (\frac{\delta}{2})^2}
$$

$$
= \sqrt{\frac{\delta^2}{2}}
$$

$$
= \frac{\delta}{\sqrt{2}} \lt \delta
$$

Let $$p_i$$ be a point on the bottom line of $$R$$

There can be at most 7 other points in R, one in each square.
(the actual number is less however 7 is easy to prove)

### Code

```
ClosestPair(Points)
    find line L so that half the points are 
    on the left side and half on the right

    d1- ClosestPair(point on left side)
    d2- ClosestPair(point on right side)

    d = min(d1,d2)

    selected = all points within d of the line

    sort selected by y value

    For each point in selected
        check the next 7 points
            if (new distance < d)
                d = new distance
    
    return d
```
This solution can be achieved in $$\theta(n \log^2n)$$ due to the need to sort y at each step.

It is possible to remove the need to sort y by integrating a merge sort, allog with the smallest distance each call returns the sorted values of X and Y. The left and right are then merged to produce a sorted array for y in $$O(n)$$ for an overall time complexity of $$\theta (n \log n)$$