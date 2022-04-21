# Online-store-api

## Índice


### 1. Resumen del proyecto 📃

Una API es un programa a través del cual podemos realizar consultas (request) y obtener respuestas (response) por medio de los [verbos HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods). 


### 2. Especificación de ENDPOINTS 

### 2.1 Categorías 
📌 (route) GET /category

##### Route:

| Method                    |    Path    |
|---------------------------|------------|
| GET                       |  /category |


##### Response:

Se obtiene la lista de categorías en un [objeto JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON):


    [
        {
            "id": 1,
            "name": "bebida energetica"
        },
        {
            "id": 2,
            "name": "pisco"
        },
        {
            "id": 3,
            "name": "ron"
        }
    ]


📌 (route) GET /category/:id

##### Route:

| Method                    |      Path      |
|---------------------------|----------------|
| GET                       |  /category/:id |


##### Response:

Se obtiene la lista de categorías según el id correspondiente en un [objeto JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON):


    [
        {
            "id": 1,
            "name": "bebida energetica"
        }
    ]


### 2.2 Productos

📌 (route) GET /product

| Method                    |    Path   |
|---------------------------|-----------|
| GET                       |  /product |

##### Response:

Se obtiene la lista de productos según el id correspondiente en un [objeto JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON):


    [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
        },
        {
            "id": 6,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1
        },
        {
            "id": 7,
            "name": "ENERGETICA SCORE",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
            "price": 1290,
            "discount": 0,
            "category": 1
        },
        {
            "id": 8,
            "name": "PISCO ALTO DEL CARMEN 35º",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
            "price": 7990,
            "discount": 10,
            "category": 2
        }
    ]


📌 (route) GET /product/:category


| Method                    |         Path        |
|---------------------------|---------------------|
| GET                       |  /product/:category |


    [
        {
            "id": 98,
            "name": "Cerveza Escudo Normal LATA 350CC",
            "url_image": "",
            "price": 600,
            "discount": 0,
            "category": 6
        },
        {
            "id": 99,
            "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image": "",
            "price": 800,
            "discount": 0,
            "category": 6
        }
    ]



📌 Realizado [Shiran Olave Terrazas](https://www.linkedin.com/in/shiran-trrzs/)