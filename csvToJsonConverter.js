const CSVToJSON = csv => {
    const lines = csv.split(/\r?\n/);
    const keys = lines[0].split(',');
    return lines.slice(1).map(line => {
        return line.split(',').reduce((acc, cur, i) => {
            const toAdd = {};
            toAdd[keys[i]] = cur;
            return { ...acc, ...toAdd };
        }, {});
    });
};

const fs = require('fs')
const data = fs.readFileSync('./csv/2022VAERSDATA.csv', 'utf-8');

console.log(CSVToJSON(data))