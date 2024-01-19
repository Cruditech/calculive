![CalcuLive](/public/assets/img/logo/calculiverounded.png)
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

## System Design
![CalcuLive System Diagram](/public/assets/img/calculiveroundedsysdiagram.png)

## Visual Design

### Color Palette

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| turqoise | ![#0BDED0](https://via.placeholder.com/20/0BDED0?text=+) #0BDED0 |
| medium slate blue | ![#9860F3](https://via.placeholder.com/20/9860F3?text=+) #9860F3 |
| tangerine | ![#F58A07](https://via.placeholder.com/20/F58A07?text=+) #F58A07 |
| berkeley blue | ![#052F5F](https://via.placeholder.com/20/052F5F?text=+) #052F5F |
| rich black | ![#0D1F2D](https://via.placeholder.com/20/0D1F2D?text=+) #0D1F2D |

