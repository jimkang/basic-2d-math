basic-2d-math
==================

Simple 2D math utils.

Functions for operating on 2D vectors extracted from a project for the purpose of using in other projects. There are many 2D vector modules out there; I haven't had time to evaluate them. If you do, you should!

Installation
------------

    npm install basic-2d-math

Usage
-----

    var b2d = require('basic-2d-math');
    b2d.getVectorMagnitude([3, 4]); // 5
    b2d.addPairs([-5, 3], [2, -1]); // [-3, 2]
    b2d.subtractPairs([-5, 3], [2, -1]); // [-7, 4]
    b2d.multiplyPairBySingleValue([4, -3], 32); // [128, -96]
    b2d.changeVectorMagnitude([5, 5], 10); // [7.07, 7.07]

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
