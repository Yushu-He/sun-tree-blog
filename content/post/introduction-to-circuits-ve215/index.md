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
---

## Techniques for circuit analysis

### Nodal analysis: based on KCL

Nodal analysis provides a general procedure for analyzing circuits using node voltages as the circuit variables.

#### Steps

1. Select a node as the reference node, i.e. ground. Then, assign voltages v1, v2, …, vn-1 to the remaining n−1 nodes.
1. Apply KCL to each of the n−1 nonreference nodes. Use Ohm’s law to express the branch current in terms of node voltages: the sum of currents entering minus leaving a node = 0
1. Solve the resulting simultaneous equations to obtain the unknown node voltages

Note: you don't need to care which voltage is higher, simply use the **voltage at the node you are analyzing - voltage at other node** and apply the Ohm's law, because the equation is the same for either case.

#### Nodal Analysis by Inspection

If a circuit with only independent current
sources has nonreference nodes, the nodevoltage equations can be written as

<div>
$$
\left[
\begin{array}{cccc}
G_{11} & G_{12} & \cdot\cdot\cdot & G_{1N} \\
G_{21} & G_{22} & \cdot\cdot\cdot & G_{2N} \\
\cdot\cdot\cdot & \cdot\cdot\cdot & \cdot\cdot\cdot & \cdot\cdot\cdot & \\
G_{11} & G_{12}&\cdot\cdot\cdot&G_{1N}\end{array}
\right]
\left[
\begin{array}{c}
v_1\\
v_2\\
\cdot\cdot\cdot\\
v_4
\end{array}
\right]=
\left[
\begin{array}{c}
i_1\\
i_2\\
\cdot\cdot\cdot\\
i_4
\end{array}
\right]
$$
</div>

**Note**: Only valid for circuits with **current sources** and **linear resistors**.

$G_{kk}=$Sum of the conductances connected to node ${k}$
$G_{kj}=G_{jk}=$Negative of the sum of the conductances directly connecting nodes $k$ and $j$, $k\neq j$
$v_k=$Unknown voltage at node ${k}$
$i_k=$Sum of all independent current sources directly connected to node , with currents **entering** the node treated as **positive**

#### Cramer's rule

Let $A=(a_1,...a_n)$ be a matrix $\in Mat(n\times n;\reals)$, $x,b$ be vectors $\in \reals^n$.
Then for $Ax=b$, we has solution that
$$
x_i=\dfrac{\det (...,a_{i-1} , b , a_{i+1} , ...)}{\det (A)}
$$

### Mesh analysis: based on KVL

