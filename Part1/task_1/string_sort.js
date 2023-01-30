
function sortString (str) {
    if (str.trim() === '') {
        return str
    }

    const arrStr = str.split(' ')

    return arrStr.sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

module.exports = sortString;
