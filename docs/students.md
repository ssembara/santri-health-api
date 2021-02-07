# API DOCS Students

## Create Student

Request :
- Method : POST
- Endpoint : `/api/students`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "nis" : "string",
    "name" : "string",
    "gender" : "string",
    "birthday" : "date",
    "address" : "string",
    "classId" : "number"
}
```

Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id" : "number",
        "nis" : "string",
        "name" : "string",
        "gender" : "string",
        "birthday" : "date",
        "address" : "string",
        "classId" : "number",
        "createdAt" : "date",
        "updatedAt" : "date"
     }
}
```
