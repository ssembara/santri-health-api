# API DOCS Disease

## List Diseases

Request :
- Method : GET
- Endpoint : `/api/diseases`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [
     {
        "id" : "number",
        "name": "string",
        "description": "string",
        "indicators": [],
        "createdAt": "datetime",
        "updatedAt": "datetime"
     },
      {
        "id" : "number",
        "name": "string",
        "description": "string",
        "indicators": [],
        "createdAt": "datetime",
        "updatedAt": "datetime"
     },
      {
        "id" : "number",
        "name": "string",
        "description": "string",
        "indicators": [],
        "createdAt": "datetime",
        "updatedAt": "datetime"
     },
   ]
}
```

## GET Diseases

Request :
- Method : GET
- Endpoint : `/api/diseases/{id}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id" : "number",
        "name": "string",
        "description": "string",
        "indicators": [],
        "createdAt": "datetime",
        "updatedAt": "datetime"
     }
}
```

## Create Disease

Request :
- Method : POST
- Endpoint : `/api/diseases`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "string",
    "description": "string",
    "indicators": []
}
```

Response :

```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id" : "number",
        "name": "string",
        "description": "string",
        "indicators": [],
        "createdAt": "datetime",
        "updatedAt": "datetime"
     }
}
```

## Update Disease

Request :
- Method : PUT
- Endpoint : `/api/diseases/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "string",
    "description": "string",
    "indicators": []
}
```

Response :

```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id" : "number",
        "name": "string",
        "description": "string",
        "indicators": [],
        "createdAt": "datetime",
        "updatedAt": "datetime"
     }
}
```

## Delete Student

Request :
- Method : DELETE
- Endpoint : `/api/diseases/{id}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string"
}
```


