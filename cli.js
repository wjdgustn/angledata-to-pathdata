#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const utils = require('./utils');
const { inputs } = require('./cli_input.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

process.stdout.write(inputs[0]);

rl.on('line', line => {
    input.push(line);
    if(input.length < inputs.length) process.stdout.write(inputs[input.length]);
    else rl.close();
}).on('close', () => {
    if(input.length < inputs.length) {
        console.log('\n\n변환을 취소합니다.');
        process.exit(0);
    }

    input = input.map(a => isNaN(a) ? a : Number(a));

    const file = fs.readFileSync(input[0]);
    fs.writeFileSync('./converter_backup.adofai', file);

    const level = utils.ADOFAIParser(file);
    if(!level.angleData) {
        console.log('이 맵은 자유각도 레벨이 아닙니다!');
        process.exit(0);
    }

    let pathData = '';
    let lastPath = '';
    level.angleData.forEach(a => {
        let path;
        if(a == 360) path = utils.flipPath(lastPath);
        else if(a < 0) path = utils.angleMap[360 + a];
        else path = utils.angleMap[a];
        lastPath = path;

        if(!path) {
            console.log('지원되지 않는 레벨입니다.');
            process.exit(0);
        }

        pathData += path;
    });

    delete level.angleData;
    level.pathData = pathData;

    fs.writeFileSync(input[0], JSON.stringify(level, null, 2));
});