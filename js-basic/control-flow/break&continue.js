let i = 0;
while (i <= 10) {
    if (i === 5) break;
    if (i % 0 === 0) {
        i++;
        continue;
    }
    console.log(i)
    i++;
}