# react-canadapost

A simple Canada Post shipping calculator with react redux form

[Live Demo](https://canada-post.herokuapp.com/)

## Setup

First register for the [Canada Post developer program](https://www.canadapost.ca/cpo/mc/business/productsservices/developers/services/gettingstarted.jsf) to get API keys

```
git clone https://github.com/hutchgrant/react-canadapost.git
cd ./react-canadapost
npm install
npm install --prefix client
```

### Development

Edit ./config/dev.js to include your development API keys

```
CanadaPostUser: '',
CanadaPostPass: '',
CanadaPostCustomerID:''
```

launch the server and client with monitors

```
npm run dev
```

### Production

set the following environment variables on your host with your production API keys:

```
CANADA_POST_USER = ''
CANADA_POST_PASS = ''
CANADA_POST_ID = ''
```

Build client:

```
cd ./client
npm run build
```

## License

react-canadapost is available under the [MIT License](https://github.com/hutchgrant/react-canadapost/blob/master/LICENSE).

## Contributing

All contributions will be placed under the same MIT license, contributers must agree to that license.
For more information see [contributing](https://github.com/hutchgrant/react-canadapost/blob/master/CONTRIBUTING.md).

## Author

**Grant Hutchinson (hutchgrant)**
