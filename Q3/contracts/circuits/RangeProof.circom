pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template RangeProof(n) {
    assert(n <= 252);
    signal input in; // this is the number to be proved inside the range
    signal input range[2]; // the two elements should be the range, i.e. [lower bound, upper bound]
    signal output out;
    signal hOut;
    signal lOut;

    component low = LessEqThan(n);
    component high = GreaterEqThan(n);

    high.in[0] <== in;
    high.in[1] <== range[0];
    hOut <== high.out;
    hOut * (hOut - 1) === 0;

    // less than upperbound
    low.in[0] <== in;
    low.in[1] <== range[1];
    lOut <== low.out;
    lOut * (lOut - 1) === 0;

    out <== hOut * lOut;
}

component main = RangeProof(10);
