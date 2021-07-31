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

module.exports.flipPath = path => {
    let r;

    switch(path) {
        case '5':
            r = '6';
            break;
        case '6':
            r = '5';
            break;
        case '7':
            r = '8';
            break;
        case '8':
            r = '7';
            break;
        case 'A':
            r = 'x';
            break;
        case 'B':
            r = 'F';
            break;
        case 'C':
            r = 'Z';
            break;
        case 'D':
            r = 'D';
            break;
        case 'E':
            r = 'Q';
            break;
        case 'F':
            r = 'B';
            break;
        case 'G':
            r = 'T';
            break;
        case 'H':
            r = 'J';
            break;
        case 'J':
            r = 'H';
            break;
        case 'L':
            r = 'R';
            break;
        case 'M':
            r = 'N';
            break;
        case 'N':
            r = 'M';
            break;
        case 'Q':
            r = 'E';
            break;
        case 'R':
            r = 'L';
            break;
        case 'T':
            r = 'G';
            break;
        case 'U':
            r = 'U';
            break;
        case 'V':
            r = 'Y';
            break;
        case 'W':
            r = 'p';
            break;
        case 'Y':
            r = 'V';
            break;
        case 'Z':
            r = 'C';
            break;
        case 'o':
            r = 'q';
            break;
        case 'p':
            r = 'W';
            break;
        case 'q':
            r = 'o';
            break;
        case 'x':
            r = 'A';
            break;
    }

    return r;
}