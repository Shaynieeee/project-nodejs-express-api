# Create Product
## Endpoint
> **POST** /products

## Request Header
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
    "close_hour": "datetime",
    "discount": {
       "type": "String",
       "value": "float"
   }
}
```

## Response Body (Success 201)
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
      "close_hour": "datetime",
      "discount": {
       "type": "String",
       "value": "float"
   },
      "audit_trail": {
          "changed_by": "String",
          "changed_at": "datetime",
          "created_at": "datetime",
          "created_by": "String"
          }
      }
  ]
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
      "close_hour": "datetime",
      "discount": {
       "type": "String",
       "value": "float"
   }
    },
      "audit_trail": {
          "changed_by": "String",
          "changed_at": "datetime",
          "created_at": "datetime",
          "created_by": "String"
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

# Get Product list (with pagination)
> **GET** /products

**Query Parameters**:
  - `page` (int, optional): The page number to retrieve. Defaults to `1`.
  - `size` (int, optional): The number of products per page. Defaults to `20`.

## Request Header
`Authorization: Bearer <token>`

## Request Body

## Response Body (Success 200)
```
  {
    "success": true,
    "data": {
      "products": [
        {
          "id": "long",
          "name": "String",
          "quantity": "int",
          "price": "float",
          "type": "String",
          "photo": "String",
          "created_at": "datetime",
          "address": "String",
          "open_hour": "datetime",
          "close_hour": "datetime",
          "discount": {
       "type": "String",
       "value": "float"
   }
        }
      ],
      "pagination": {
        "current_page": "int",
        "total_pages": "int",
        "total_items": "int",
        "page_size": "int"
      }
    }
  }
```
## Response Body (Error 500)
```
{
  "success": false,
  "error": "Interval server error"
}
```

# Get Product detail
> **GET** /products/{id}

## Request Header
`Content-Type: application/json`
`Authorization: Bearer <token>`

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
    "close_hour": "datetime",
    "discount": {
       "type": "String",
       "value": "float"
   }
  },
      "audit_trail": {
          "changed_by": "String",
          "changed_at": "datetime",
          "created_at": "datetime",
          "created_by": "String"
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
  "close_hour": "datetime",
  "discount": {
       "type": "String",
       "value": "float"
   }
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
    "close_hour": "datetime",
     "discount": {
       "type": "String",
       "value": "float"
   }
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

# Create Order
> **POST** /orders

## Request Header
`Content-Type: application/json`

## Request Body
```
{
  "user_id": "bigint",
  "book_start_date": "datetime",
  "book_end_date": "datetime",
  "status": "String",
  "total_amount": "float",
  "payment_method": "String",
  "order_items": [
    {
      "product_id": "bigint",
      "price": "float",
      "discount": "float",
      "quantity": "int",
      "total_amount": "float"
    }
  ]
}
```
## Response Body (Success 201)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "user_id": "bigint",
    "book_start_date": "datetime",
    "book_end_date": "datetime",
    "status": "String",
    "total_amount": "float",
    "payment_method": "String",
    "order_items": [
      {
        "product_id": "bigint",
        "price": "float",
        "discount": "float",
        "quantity": "int",
        "total_amount": "float"
      }
    ],
      "audit_trail": {
          "changed_by": "String",
          "changed_at": "datetime",
          "created_at": "datetime",
          "created_by": "String"
          }
   }
}
```
# Complete Order(Mark Status as "COMPLETED")
> **PATCH** /orders/{id}/complete

## Request Header
`Authorization: Bearer <token>`

## Request Body
```
```
## Response Body (Success 200)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "status": "COMPLETED"
  }
}
```
## Response Body (Error 404)
```
{
  "success": false,
  "error": "Order not found"
}
```
# Cancel Order(Mark Status as "CANCELED")
> **PATCH** /orders/{id}/cancel

## Request Header
`Authorization: Bearer <token>`

## Request Body
```
```

## Response Body (Success 200)
```
{
  "success": true,
  "data": {
    "id": "bigint",
    "status": "CANCELED"
  }
}
```
## Response Body (Error 404)
```
{
  "success": false,
  "error": "Order not found"
}
```
# Get Order List
> **GET** /orders

## Request Header
`Authorization: Bearer <token>`

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
      "user_id": "bigint",
      "book_start_date": "datetime",
      "book_end_date": "datetime",
      "status": "String",
      "total_amount": "float",
      "payment_method": "String",
      "created_at": "datetime",
      "updated_at": "datetime"    
    }
  ],
    "pagination": {
        "current_page": "int",
        "total_pages": "int",
        "total_items": "int",
        "page_size": "int"
      }
}
```
## Response Body (Error 404)
```
{
  "success": false,
  "error": "Internal Server Error"
}
```
# Get Order Status History
> **GET** /orders/{id}/status-history

## Request Header
`Authorization: Bearer <token>`

## Request Body
```
```

## Response Body (Success 200)
```
{
  "success": true,
  "data": [
    {
      "id": "long",
      "order_id": "long",
      "status": "String",
      "changed_at": "String (datetime)"
    }
  ]
}
```

## Response Body (Error 404)
```
{
  "success": false,
  "error": "Order not found"
}
```
# Get Order Detail (with Status History)
> **GET** /orders/{id}

## Request Header
`Authorization: Bearer <token>`

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
    "user_id": "bigint",
    "book_start_date": "datetime",
    "book_end_date": "datetime",
    "status": "String",
    "total_amount": "float",
    "payment_method": "String",
    "order_items": [
      {
        "product_id": "bigint",
        "price": "float",
        "discount": "float",
        "quantity": "int",
        "total_amount": "float"
      }
    ],
    "status_history": [
      {
        "id": "long",
        "status": "String",
        "changed_at": "datetime"
      }
    ],
    "audit_trail": 
      {
        "changed_by": "String",
        "changed_at": "datetime",
        "created_at": "datetime",
        "created_by": "String"
      }
   }
 ]
}
```

## Response Body (Error 404)
```
{
  "success": false,
  "error": "Order not found"
}
```
