const content = {
    "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    }

const crossContent = {
    "width": 770,
    "height": 400,
    "currencies": [
      "EUR",
      "USD",
      "JPY",
      "GBP",
      "CHF",
      "AUD",
      "CAD",
      "NZD"
    ],
    "isTransparent": false,
    "colorTheme": "dark",
    "locale": "en"
  }
  
const futures = {
    "colorTheme": "dark",
    "dateRange": "12M",
    "showChart": true,
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "330",
    "height": "660",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "rgba(106, 109, 120, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
      {
        "title": "Indices",
        "symbols": [
          {
            "s": "FOREXCOM:SPXUSD",
            "d": "S&P 500"
          },
          {
            "s": "FOREXCOM:NSXUSD",
            "d": "US 100"
          },
          {
            "s": "FOREXCOM:DJI",
            "d": "Dow 30"
          },
          {
            "s": "INDEX:NKY",
            "d": "Nikkei 225"
          },
          {
            "s": "INDEX:DEU40",
            "d": "DAX Index"
          },
          {
            "s": "FOREXCOM:UKXGBP",
            "d": "UK 100"
          }
        ],
        "originalTitle": "Indices"
      },
      {
        "title": "Futures",
        "symbols": [
          {
            "s": "CME_MINI:ES1!",
            "d": "S&P 500"
          },
          {
            "s": "CME:6E1!",
            "d": "Euro"
          },
          {
            "s": "COMEX:GC1!",
            "d": "Gold"
          },
          {
            "s": "NYMEX:CL1!",
            "d": "Crude Oil"
          },
          {
            "s": "NYMEX:NG1!",
            "d": "Natural Gas"
          },
          {
            "s": "CBOT:ZC1!",
            "d": "Corn"
          }
        ],
        "originalTitle": "Futures"
      },
      {
        "title": "Bonds",
        "symbols": [
          {
            "s": "CBOT:ZB1!",
            "d": "T-Bond"
          },
          {
            "s": "CBOT:UB1!",
            "d": "Ultra T-Bond"
          },
          {
            "s": "EUREX:FGBL1!",
            "d": "Euro Bund"
          },
          {
            "s": "EUREX:FBTP1!",
            "d": "Euro BTP"
          },
          {
            "s": "EUREX:FGBM1!",
            "d": "Euro BOBL"
          }
        ],
        "originalTitle": "Bonds"
      },
      {
        "title": "Forex",
        "symbols": [
          {
            "s": "FX:EURUSD",
            "d": "EUR/USD"
          },
          {
            "s": "FX:GBPUSD",
            "d": "GBP/USD"
          },
          {
            "s": "FX:USDJPY",
            "d": "USD/JPY"
          },
          {
            "s": "FX:USDCHF",
            "d": "USD/CHF"
          },
          {
            "s": "FX:AUDUSD",
            "d": "AUD/USD"
          },
          {
            "s": "FX:USDCAD",
            "d": "USD/CAD"
          }
        ],
        "originalTitle": "Forex"
      }
    ]
  }

const crypto = {
    "width": 500,
    "height": 490,
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "dark",
    "locale": "en"
  }


export {content, crossContent, futures, crypto}