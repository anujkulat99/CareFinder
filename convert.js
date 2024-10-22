const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();
fs.readFile('ushospitals.xml', (err, data) => {
    if (err) throw err;

    parser.parseString(data, (err, result) => {
        if (err) throw err;

        fs.writeFile('hospitalsModel.json', JSON.stringify(result, null, 2), (err) => {
            if (err) throw err;
            console.log('JSON file has been saved.');
        });
    });
});