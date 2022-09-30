---
title: Notes-Introduction to Circuits-VE215
description: Notes of my VE215 course
slug: introduction-to-circuits-ve215
date: 2022-09-20 08:32:44+0000
image: cover.jpg
categories:
    - VE215
tags:
    - VE215
    - Notes
math: true
draft: true
---

## Techniques for circuit analysis

### Nodal analysis: based on KCL

Nodal analysis provides a general procedure for analyzing circuits using node voltages as the circuit variables.

#### With current sources

##### Steps

1. Select a node as the reference node, i.e. ground. Then, assign voltages v1, v2, …, vn-1 to the remaining n−1 nodes.
1. Apply KCL to each of the n−1 nonreference nodes. Use Ohm’s law to express the branch current in terms of node voltages: the sum of currents entering minus leaving a node = 0
1. Solve the resulting simultaneous equations to obtain the unknown node voltages

Note: you don't need to care which voltage is higher, simply use the **voltage at the node you are analyzing - voltage at other node** and apply the Ohm's law, because the equation is the same for either case.

##### Nodal Analysis by Inspection

If a circuit with only independent current
sources has nonreference nodes, the nodevoltage equations can be written as

$$
\left[\begin{array}{cccc}
G_{11} & G_{12} & \cdot\cdot\cdot & G_{1N} \newline
G_{21} & G_{22} & \cdot\cdot\cdot & G_{2N} \newline
\cdot\cdot\cdot & \cdot\cdot\cdot & \cdot\cdot\cdot & \cdot\cdot\cdot \newline
G_{N1} & G_{N2} & \cdot\cdot\cdot & G_{NN}
\end{array}\right]
\left[\begin{array}{c}
v_1 \newline
v_2 \newline
\cdot\cdot\cdot \newline
v_N
\end{array}\right]=
\left[\begin{array}{c}
i_1 \newline
i_2 \newline
\cdot\cdot\cdot \newline
i_N
\end{array}\right]
$$

**Note**: Only valid for circuits with **current sources** and **linear resistors**.

$G_{kk}=$Sum of the conductances connected to node $k$.

$G_{kj}=G_{jk}=$Negative of the sum of the conductances directly connecting nodes $k$ and $j$, $k\neq j$

$v_k=$Unknown voltage at node $k$

$i_k=$Sum of all independent current sources directly connected to node, with currents **entering** the node treated as **positive**

##### Cramer's rule

Let $A=(a_1,...a_n)$ be a matrix $\in Mat(n\times n;\reals)$, $x,b$ be vectors $\in \reals^n$.
Then for $Ax=b$, we has solution that
$$
x_i=\dfrac{\det (...,a_{i-1} , b , a_{i+1} , ...)}{\det (A)}
$$

##### Examples

#### With voltage sources

### Mesh analysis: based on KVL

#### Definitions on Independent loop and Mesh

- **Independent loop**: A loop is said to be independent if it contains at least one branch which is not a part of any other independent loop。
- **Mesh**: A mesh is a loop that does not contain any other loop within it. (Smallest loops)

number of meshes = max. number of independent loops

If a circuit has n nodes, b branches, and l independent loops, then b = l + n - 1. This applied to meshes, too: b = m + n -1 where m is the number of meshes

#### With voltage sources

##### Steps

##### Mesh Analysis by Inspection

- Diagonal: the sum of the resistances in the related mesh
- Off-diagonal: the negative of the resistance common to meshes
- Voltage sources: the algebraic sum taken clockwise of all independent voltage sources in the related mesh, with voltage rise treated as positive

In general, if a circuit with only independent voltage sources has N meshes, the node-current equations can be written as

$$
\left[\begin{array}{cccc}
R_{11} & R_{12} & \cdot\cdot\cdot & R_{1N} \newline
R_{21} & R_{22} & \cdot\cdot\cdot & R_{2N} \newline
\cdot\cdot\cdot & \cdot\cdot\cdot & \cdot\cdot\cdot & \cdot\cdot\cdot \newline
R_{N1} & R_{N2} & \cdot\cdot\cdot & R_{NN}
\end{array}\right]
\left[\begin{array}{c}
i_1 \newline
i_2 \newline
\cdot\cdot\cdot \newline
i_N
\end{array}\right]=
\left[\begin{array}{c}
v_1 \newline
v_2 \newline
\cdot\cdot\cdot \newline
v_N
\end{array}\right]
$$

$R_{kk}=$Sum of the resistances in mesh $k$.

$R_{kj}=R_{jk}=$Negative of the sum of the resistances in common with meshes $k$ and $j$, $k\neq j$

$i_k=$Unknown current for mesh $k$ in the clockwise direction

$v_k=$Sum taken clockwise of all independent voltage sources in mesh $k$, with voltage rise treated as positive

#### With current sources
