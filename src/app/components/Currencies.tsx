import btc from '../assets/btc.png';
import { ICurrency } from '../types';

export const currencies: ICurrency[] = [
    {
        "name": "Bitcoin",
        "short_name": "BTC",
        "img": btc,
        "value": 65666
    },
    {
        "name": "US Dollar",
        "short_name": "USD",
        "img": '',
        "value": 1.00
    },
    {
        "name": "Ethereum",
        "short_name": "ETH",
        "img": "https://w7.pngwing.com/pngs/713/775/png-transparent-ethereum-logo-logos-logos-and-brands-icon.png",
        "value": 3288.82
    },
    {
        "name": "Euro",
        "short_name": "EUR",
        "img": "link to euro image",
        "value": 1.07
    },
    {
        "name": "Russian Ruble",
        "short_name": "RUB",
        "img": "https://figureandgroove.com/files/2020/04/Russia-Flag-National-Flag-of-Russia-scaled.jpg",
        "value": 0.0108
    },
    {
        "name": "Yuan",
        "short_name": "CNY",
        "img": "link to yuan image",
        "value": 0.13
    }
];