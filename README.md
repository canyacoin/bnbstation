# BNBStation

This repo is mirrored from the Gitlab primary repository:

https://gitlab.com/canyacoin/binancechain-resources/bnbstation


## Overview

Binance Fee Station https://bnbstation.info

Built with Angular and Webpack, hosted on Firebase.

**Fees are pulled in realtime**

Mainnet: https://dex.binance.org/api/v1/fees

Testnet: https://testnet-dex.binance.org/api/v1/fees

Prices: https://api.coinmarketcap.com/v1/ticker/binance-coin/


API results are cached in the page as a backup to prevent DOS'ing the validators

TODO: cache results in firebase real-time database. 


## Setup

Clone the repo and then install dependencies:

```
npm install
```

Run a local build:
```
npm run start
```

Build the package:
```
npm run build
```

Deploy to Firebase:
```
firebase login              <-- ask for access to the firebase instance
firebase use <project-id>
firebase deploy
```

If you would like to maintain this repo please contact the CanYa team. 
