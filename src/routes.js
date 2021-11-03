import { AppBoard } from './cmps/AppBoard';
import { WatchList } from './pages/WatchList';

const routes = [
    {
        path: '/',
        component: AppBoard,
    },
    {
        path: '/kraken',
        component: AppBoard,
    },
    {
        path: '/watchlist',
        component: WatchList,
    }
]

export default routes;