# CalcuLive
## Purpose
## Requirements
* Search for products by keyword [GET /browse-products](https://api.ods.od.nih.gov/dsld/v9/#browseProducts) → **List\<DSLD (label) ID\>**
* [GET /label/{dsldId}](https://api.ods.od.nih.gov/dsld/v9/#getLabel) → [Label](https://api.ods.od.nih.gov/dsld/v9/#Label)

## Data Schemas
###### user.ingredients_by_product<List>
fullName | brandName+brandIpSymbol | ingredientRows | otheringredients.ingredients 
-|-|-|-
string | string | list | list

###### user.ingredient_totals



## Running This Sample Locally

#### Install the dependencies with npm

```bash
$ npm install
```


#### Inject environment variables and run app
###### Option A
Install [doppler](https://dashboard.doppler.com/workplace/02491f71b74d63f6280c/projects) with
```bash
$ (curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sudo sh
```
Login, setup, run
```doppler
$ doppler login
$ doppler setup
$ doppler run -- npm start
```

###### Option B
Write the following to **.env** file
key|value
-|-
CLIENT_ID|Auth0 application client id
ISSUER_BASE_URL|https://auth.cruditech.com
SECRET|`$ openssl rand -hex 32`
BASE_URL|port:3000 url
PORT|3000
MONGODB_URL|\<instance name\>.mongodb.net
MONGODB_USERNAME|********
MONGODB_PASSWORD|********
|

