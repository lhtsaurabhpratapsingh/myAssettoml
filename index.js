const express = require('express');
const cors = require('cors');

require('dotenv').config();

const path = require('path');


const PORT = process.env.PORT 

const app = express();

app.use(cors());
app.get('/.well-known/stellar.toml', (req, res, next) => {
    const options = {
      root: path.join(__dirname, 'public'),
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("content-type", "text/plain");
    res.sendFile('stellar.toml', options);
  })

  app.get('/sep24/info',(req,res)=>{
    res.json({
        "deposit": {
            "LHTASSET": {
                "enabled": true,
                "fee_fixed": 1.0
            }
        },
        "withdraw": {
            "LHTASSET": {
                "enabled": true,
                "fee_fixed": 1.0
            }
        },
        "fee": {
            "enabled": true
        },
        "features": {
            "account_creation": true,
            "claimable_balances": true
        }
    })
    })
    // endpoint

    app.get('/auth', (req,res)=>{
      res.json({
        "account":"GCRO75HUU4TGKNW5XD2Z7Y6G4QZP5BGKCSRMZGNFX44GRO7II4FA7EKB",
        "home_domain":"lastasset.herokuapp.com",
        "client_domain":"test.org"

      })
    })

    app.get('/FEDERATION_SERVER', (req, res) =>{
        res.json({
            "stellar_address": "sp@gmail.com*lastasset.herokuapp.com",
            "account_id": "GCRO75HUU4TGKNW5XD2Z7Y6G4QZP5BGKCSRMZGNFX44GRO7II4FA7EKB",
            "memo_type": "id",
            "memo": "123"
          })

    })


app.get('/', (req, res) =>{
    res.send('hello world')
})


app.listen((PORT), () => console.log(`listening on port ${PORT}`));

