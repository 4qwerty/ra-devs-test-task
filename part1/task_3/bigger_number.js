function nextBigger(n) {
    const arrayDigits = [...n.toString()].map(Number);
    const sortedDigits = arrayDigits.sort((a,b) => {
        return b - a
    }).join('')

    return +sortedDigits !== n ? +sortedDigits : -1
}

module.exports = nextBigger;
