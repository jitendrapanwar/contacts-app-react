import React, { Component } from 'react';
import './App.css';

class App extends Component {



  render() {
  const data = [
  {
    "regionValue": "Americas",
    "countryList": [
      {
        "countryValue": "United States",
        "countryCode": "us",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/us.jpg",
        "url": "https://am.jpmorgan.com/us/en/asset-management/gim/liq/home"
      }
    ]
  },
  {
    "regionValue": "Asia Pacific",
    "countryList": [
      {
        "countryValue": "Australia",
        "countryCode": "au",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/au.jpg",
        "url": "https://am.jpmorgan.com/au/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Hong Kong",
        "countryCode": "hk",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/hk.jpg",
        "url": "https://am.jpmorgan.com/hk/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Singapore",
        "countryCode": "sg",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/sg.jpg",
        "url": "https://am.jpmorgan.com/sg/en/asset-management/gim/liq/home"
      }
    ]
  },
  {
    "regionValue": "Europe",
    "countryList": [
      {
        "countryValue": "Austria",
        "countryCode": "at",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/at.jpg",
        "url": "https://am.jpmorgan.com/at/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Belgium",
        "countryCode": "be",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/be.jpg",
        "url": "https://am.jpmorgan.com/be/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Denmark",
        "countryCode": "dk",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/dk.jpg",
        "url": "https://am.jpmorgan.com/dk/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Finland",
        "countryCode": "fi",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/fi.jpg",
        "url": "https://am.jpmorgan.com/fi/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "France",
        "countryCode": "fr",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/fr.jpg",
        "url": "https://am.jpmorgan.com/fr/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Germany",
        "countryCode": "de",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/de.jpg",
        "url": "https://am.jpmorgan.com/de/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Ireland",
        "countryCode": "ie",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/ie.jpg",
        "url": "https://am.jpmorgan.com/ie/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Italy",
        "countryCode": "it",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/it.jpg",
        "url": "https://am.jpmorgan.com/it/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Luxembourg",
        "countryCode": "lu",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/lu.jpg",
        "url": "https://am.jpmorgan.com/lu/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Netherlands",
        "countryCode": "nl",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/nl.jpg",
        "url": "https://am.jpmorgan.com/nl/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Norway",
        "countryCode": "no",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/no.jpg",
        "url": "https://am.jpmorgan.com/no/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Spain",
        "countryCode": "es",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/es.jpg",
        "url": "https://am.jpmorgan.com/es/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Sweden",
        "countryCode": "se",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/se.jpg",
        "url": "https://am.jpmorgan.com/se/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "Switzerland",
        "countryCode": "ch",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/ch.jpg",
        "url": "https://am.jpmorgan.com/ch/en/asset-management/gim/liq/home"
      },
      {
        "countryValue": "United Kingdom",
        "countryCode": "gb",
        "flagPath": "/content/dam/jpm-am-aem/global/en/images/common/flags/gb.jpg",
        "url": "https://am.jpmorgan.com/gb/en/asset-management/gim/liq/home"
      }
    ]
  }
];

    return (
      <div className="app-container">
        { data.map((region,index) => {
          const { regionValue, countryList} = region;
          return (
            <div key={index} className='region-column'>
            <Region name={regionValue}>
              <Countries list={countryList} />
            </Region>
            </div>
          )
        })
        }
      </div>
    );
  }
}

const Region = props => {
  return (
    <React.Fragment>
      <h1 className='region-title'>{props.name}</h1>
      {props.children}
    </React.Fragment>
  ) 
}

const Countries = ({list}) => {
  return (
    <div className="countries-list">
    { list.map((country, index) => {
        return <Country key={index} data={country} />
      })
    }
    </div>
  )
}

const Country = props => {
  const { countryValue } = props.data;
  return <p className='country-box'>{countryValue}</p>
}

export default App;
