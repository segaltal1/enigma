import { databaseService } from './database.service';

async function getBtcMarket() {
    const { btcMarkets } = await databaseService.query();
    return btcMarkets;
}

export const btcService = {
    getBtcMarket
}
