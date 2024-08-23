# Create User (Register Customer)
## Endpoint
> **POST** /register

## Request Header

## Request Body
```
{
    "username": "String",
    "password": "String"
}
```

## Response Body (Success 200)
```
{
    "success": "true"
}
```

## Response Body (Error 500)
```
{
    "success": "false",
    "error": "Username have been registered"
}
```

# Create User (Create Employee)
> **POST** /users

## Request Header
- Access Token

## Request Body
```
{
    "username": "String",
    "password": "String",
    "name": "String",
    "gender": "String",
    "address": "String",
    "role_id": "int"
}
```

## Response Body (Success 200)
```
{
    "success": "true"
}
```

## Response Body (Error 500)
```
{
    "success": "false",
    "error": "Username have been registered"
}
```

# Get User List
> **GET** /users

## Request Header
- Access Token

## Request Body

## Response Body (Success 200)
```
{
    "success": "true",
    "data": {
        "users": [
            {
                "id": "long",
                "username": "String",
                "password": "String",
                "name": "String",
                "gender": "String",
                "address": "String",
                "role_id": "int",
                "created_at": "2024-08-23 17:47:00",
                "updated_at": "2024-08-23 17:47:00",
                "created_by": 1,
                "updated_by": 1
            }
        ]
    }
}
```

# Get User Detail
> **GET** /users/{id}

## Request Header
- Access Token

## Request Body

## Response Body (Success 200)
```
{
    "success": "true",
    "data": {
        "id": "long",
        "username": "String",
        "password": "String",
        "name": "String",
        "gender": "String",
        "address": "String",
        "role_id": "int",
        "created_at": "2024-08-23 17:47:00",
        "updated_at": "2024-08-23 17:47:00",
        "created_by": 1,
        "updated_by": 1
    }
}
```

## Response Body (Not Found 404)
```
{
    "success": "false",
    "error": "User id is not found"
}
```

# Update Customer
> **PATCH** /users/customers/{id}

## Request Header
- Access Token

## Request Body
```
{
    "password": "String",
    "name": "String",
    "gender": "String",
    "address": "String"
}
```

## Response Body (Success 200)
```
{
    "success": "true"
}
```

## Response Body (Forbidden 400)
```
{
    "success": "false",
    "error": "Access is denied"
}
```

# Update User
> **PATCH** /users/{id}

## Request Header
- Access Token

## Request Body
```
{
    "username": "String",
    "password": "String",
    "name": "String",
    "gender": "String",
    "address": "String",
    "role_id": "int"
}
```

## Response Body (Success 200)
```
{
    "success": "true"
}
```

## Response Body (Forbidden 400)
```
{
    "success": "false",
    "error": "Access is denied"
}
```

# Delete User
> **DELETE** /users/{id}

## Request Header
- Access Token

## Request Body

## Response Body (Success 200)
```
{
    "success": "true"
}
```

## Response Body (Forbidden 400)
```
{
    "success": "false",
    "error": "Access is denied"
}
```