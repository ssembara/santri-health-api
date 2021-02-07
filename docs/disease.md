# API DOCS Disease

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
