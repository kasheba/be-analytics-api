# analytics-api

NodeJS Express server side REST API application. The service exposes following two API, which feed off of the data from Parcl API.

## GET /api/city/name/:name

The city name housing price index API is responsible for getting price information for city housing price per square foot by name of the city.

> The name of the cities can be found [here](https://api.parcllabs.com/docs) 
> 

### response payload

```json
{
    "name": "New York City",
    "date": "2024-03-01",
    "median": 495.53,
    "percentile20th": 357.8,
    "percentile80th": 688.96,
    "standardDeviation": 190.73
}
```

## GET /api/city/code/{code}

The City code housing price Index API is responsible get the city index price information for a specific city identified by 2-letter `code`.

> The name of the cities can be found [here](https://api.parcllabs.com/docs)
> AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, PR, RI, SC, SD, TN, TX, UT, VA, VI, VT, WA, WI, WV, WY

### response payload

```json
{
    "name": "NY",
    "date": "2024-03-01",
    "median": 495.53,
    "percentile20th": 357.8,
    "percentile80th": 688.96,
    "standardDeviation": 190.73
}
```

## technology

- NodeJs
- Typescript
- Express
- dotenv
- [Parcl API](https://api.parcllabs.com/docs#/)

## how to run

### development
>
> npm run dev

### production
>
> npm run

## configuration

> PORT=7000
> PARCL_API_KEY=
