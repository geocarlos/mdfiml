const csvToJson = csv => {
    const lines = csv.split('\n');

    const headers = lines.shift().split(',');
    const entries = [];

    for (const line of lines) {
        const values = line.match(/("[^"]+"|[^,]+)|,,/g);
        const obj = {};

        if (!values) continue;

        for (let i = 0; i < values.length; i++) {
            obj[headers[i]] = values[i].replace(',,', '');
        }
        entries.push(obj);
    }

    return entries;
};

const main = () => {
    const csvPath = process.argv[2];
    const fs = require('fs');

    try {
        const csv = fs.readFileSync(csvPath).toString();
        const entries = csvToJson(csv);
        console.log(entries)
        for (const entry of entries) {
            for (key in entry) {
                console.log(`${key}: ${entry[key]}`)
            }
            console.log('---------------------------------------')
        }
        fs.writeFileSync('entries.json', JSON.stringify(entries));
    } catch (error) {
        console.error(JSON.stringify(error));
    }
};

if (require.main === module) {
    main();
}