// Market configuration — centers, zoom, airports, CAD links
const MARKETS = {
    dfw: {
        name: 'Dallas–Fort Worth',
        center: [32.82, -96.93],
        zoom: 10,
        airports: [
            { name: 'DFW International', code: 'DFW', coords: [32.8998, -97.0403] },
            { name: 'Dallas Love Field', code: 'DAL', coords: [32.8471, -96.8518] },
            { name: 'Fort Worth Alliance', code: 'AFW', coords: [32.9876, -97.3189] },
            { name: 'Fort Worth Meacham', code: 'FTW', coords: [32.8196, -97.3625] }
        ],
        cadUrl: 'https://www.dallascad.org/',
        cadName: 'DCAD / TAD',
        gisUrl: 'https://www.dallascad.org/SearchAddr.aspx',
        taxUrl: 'https://www.dallascounty.org/tax/',
        zoningAuthority: 'Varies by municipality'
    },
    austin: {
        name: 'Austin',
        center: [30.35, -97.70],
        zoom: 11,
        airports: [
            { name: 'Austin-Bergstrom Intl', code: 'AUS', coords: [30.1975, -97.6664] }
        ],
        cadUrl: 'https://www.traviscad.org/',
        cadName: 'TCAD / WCAD',
        gisUrl: 'https://www.traviscad.org/property-search',
        taxUrl: 'https://tax-office.traviscountytx.gov/',
        zoningAuthority: 'City of Austin / Williamson County'
    },
    'san-antonio': {
        name: 'San Antonio',
        center: [29.46, -98.52],
        zoom: 11,
        airports: [
            { name: 'San Antonio Intl', code: 'SAT', coords: [29.5337, -98.4698] },
            { name: 'Stinson Municipal', code: 'SSF', coords: [29.3370, -98.4711] }
        ],
        cadUrl: 'https://www.bcad.org/',
        cadName: 'BCAD',
        gisUrl: 'https://bexar.trueautomation.com/clientdb/?cid=110',
        taxUrl: 'https://www.bexar.org/tax/',
        zoningAuthority: 'City of San Antonio'
    },
    houston: {
        name: 'Houston',
        center: [29.78, -95.40],
        zoom: 10,
        airports: [
            { name: 'George Bush Intercontinental', code: 'IAH', coords: [29.9902, -95.3368] },
            { name: 'William P. Hobby', code: 'HOU', coords: [29.6454, -95.2789] }
        ],
        cadUrl: 'https://www.hcad.org/',
        cadName: 'HCAD',
        gisUrl: 'https://public.hcad.org/records/quicksearch.asp',
        taxUrl: 'https://www.hctax.net/',
        zoningAuthority: 'No municipal zoning (Houston)'
    },
    charlotte: {
        name: 'Charlotte',
        center: [35.22, -80.85],
        zoom: 11,
        airports: [
            { name: 'Charlotte Douglas Intl', code: 'CLT', coords: [35.2141, -80.9431] }
        ],
        cadUrl: 'https://www.mecknc.gov/assessorsoffice/',
        cadName: 'Mecklenburg County',
        gisUrl: 'https://polaris3g.mecklenburgcountync.gov/',
        taxUrl: 'https://www.mecknc.gov/taxes/',
        zoningAuthority: 'City of Charlotte / Mecklenburg County'
    }
};
