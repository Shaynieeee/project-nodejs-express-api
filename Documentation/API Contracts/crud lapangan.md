# Create Product
## Endpoint
> **POST** /products

## Request Header

## Request Body
```
{
   "type": "String",
    "name": "String",
    "quantity": "int",
    "price": "float",
    "photo": "String",
    "address": "String",
    "open_hour": "datetime",
    "close_hour": "datetime"
}
```

## Response Body (Success 201)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "type": "String",
    "name": "String",
    "quantity": "int",
    "price": "float",
    "photo": "String",
    "created_at" : "datetime",
    "address": "String",
    "open_hour": "datetime",
    "close_hour": "datetime"
  }
}
```

## Response Body (Error 400)
```
{
  "success": false,
  "error": "Bad Request"
}
```
# Get Product List
> **GET** /products

## Request Header
`Content-Type: application/json`

## Request Body
```
```

## Response Body (Success 200)
```
{
  "success": true,
  "data": [
    {
      "id": "bigint",
      "type": "String",
      "name": "String",
      "quantity": "int",
      "price": "float",
      "photo": "String",
      "address": "String",
      "open_hour": "datetime",
      "close_hour": "datetime"
    }
  ]
}
```
## Response Body (Error 500)
```
{
  "success": false,
  "error": "Internal Server Error"
}
```
# Get Product detail
> **GET** /products{id}

## Request Header
`Content-Type: application/json`

## Request Body
```
```

## Response Body (Success 200)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "type": "String",
    "name": "String",
    "quantity": "int",
    "price": "float",
    "photo": "String",
    "address": "String",
    "open_hour": "datetime",
    "close_hour": "datetime"
  }
}
```

## Response Body (Error 404)
```
{
  "success": false,
  "error": "Product not found"
}
```

# Update Product 
> **PATCH** /products/{id}

## Request Header
`Content-Type: application/json`
`Authorization: Bearer <token>`

## Request Body
```
{
  "type": "String",
  "name": "String",
  "quantity": "int",
  "price": "float",
  "photo": "String",
  "address": "String",
  "open_hour": "datetime",
  "close_hour": "datetime"
}
```
## Response Body (Success 200)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "type": "String",
    "name": "String",
    "quantity": "int",
    "price": "float",
    "photo": "String",
    "created_at": "datetime"
    "address": "String",
    "open_hour": "datetime",
    "close_hour": "datetime"
  }
}
```
## Response Body (Error 400)
```
{
  "success": false,
  "error": "Bad Request"
}
```
# Delete Product
> **DELETE** /products/{id}

## Request Header
`Authorization: Bearer <token>`

## Request Body
```
```

## Response Body (Success 200)
```
{
  "success": true
}
```
## Response Body (Error 401)
```
{
  "success": false,
  "error": "Product not found"
}
```
# Create Discount
> **POST** /discounts

## Request Header
`Content-Type: application/json`

## Request Body
```
{
  "product_id": "bigint",
  "type": "String",
  "value": "float"
}
```
## Response Body (Success 201)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "product_id": "bigint",
    "type": "String",
    "value": "float"
  }
}
```
## Response Body (Error 400)
```
{
  "success": false,
  "error": "Bad Request"
}
```
# Get Discount detail
> **GET** /discounts/{id}

## Request Header
`Content-Type: application/json`

## Request Body
```
```
## Response Body (Success 200)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "product_id": "bigint",
    "type": "String",
    "value": "float"
  }
}
```
## Response Body (Error 404)
```
{
  "success": false,
  "error": "Discount not found"
}
```
# Update Discount
> **PATCH** /discounts/{id}

## Request Header
`Content-Type: application/json`
`Authorization: Bearer <token>`

## Request Body
```
{
  "type": "String",
  "value": "float"
}
```
## Response Body (Success 200)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "product_id": "bigint",
    "type": "String",
    "value": "float"
  }
}
```
## Response Body (Error 404)
```
{
  "success": false,
  "error": "Bad Request"
}
```
# Delete Discount
> **PATCH** /discounts/{id}

## Request Header
`Authorization: Bearer <token>`

## Request Body
```