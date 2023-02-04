const multivalue = [0, null, undefined, '', 2, 3];


function shahid(peramiter, peramiter2) {
      peramiter2 = 0;
    for (let value of peramiter)
    if (value)
    peramiter2++;
    return peramiter2;
}
console.log(shahid(multivalue));