# API DOCS Class

## Create Class

Request :
- Method : POST
- Endpoint : `/api/classes`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "string",
    "grade": "number"
}
```

Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id" : "number",
        "name": "string",
        "grade": "number",
        "createdAt" : "date",
        "updatedAt" : "date"
     }
}
```

## List Student

Request :
- Method : GET
- Endpoint : `/api/students`
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
        "grade": "number",
        "createdAt" : "date",
        "updatedAt" : "date"
     },
     {
        "id" : "number",
        "name": "string",
        "grade": "number",
        "createdAt" : "date",
        "updatedAt" : "date"
     },
     {
        "id" : "number",
        "name": "string",
        "grade": "number",
        "createdAt" : "date",
        "updatedAt" : "date"
     }
   ]
}
```
