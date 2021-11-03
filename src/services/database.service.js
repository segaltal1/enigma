const gDatabase = require('../data/data.json');

async function query() {
    return gDatabase
}

export const databaseService = {
    query
}
