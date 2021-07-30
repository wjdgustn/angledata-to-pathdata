String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

module.exports.ADOFAIParser = level => {
    try {
        return JSON.parse(level);
    }
    catch (e) {
        return JSON.parse(String(level).trim()
            .replaceAll(', ,', ',')
            .replaceAll('}\n', '},\n')
            .replaceAll('},\n\t]', '}\n\t]')
            .replaceAll(', },', ' },')
            .replaceAll(', }', ' }')
            .replaceAll('\n', '')
            .replaceAll('}\n', '},\n'));
    }
}

module.exports.angleMap = {
    0: "R",
    15: "p",
    30: "J",
    45: "E",
    60: "T",
    75: "o",
    90: "U",
    105: "q",
    120: "G",
    135: "Q",
    150: "H",
    165: "W",
    180: "L",
    195: "x",
    210: "N",
    225: "Z",
    240: "F",
    255: "V",
    270: "D",
    285: "Y",
    300: "B",
    315: "C",
    330: "M",
    345: "A",
    999: "!"
}