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

## Get Student

Request :
- Method : GET
- Endpoint : `/api/students/{id}`
- Header :
    - Accept: application/json

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
        "age" : "number",
        "class" : {
              "id": "number",
              "name": "string",
              "grade": "number",
              "createdAt": "datetime",
              "updatedAt": "datetime",
           },
        "createdAt" : "date",
        "updatedAt" : "date"
     }
}
```

## Update Student

Request :
- Method : PUT
- Endpoint : `/api/students/{id}`
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
        "nis" : "string",
        "name" : "string",
        "gender" : "string",
        "birthday" : "date",
        "address" : "string",
        "age" : "number",
        "class" : {
              "id": "number",
              "name": "string",
              "grade": "number",
              "createdAt": "datetime",
              "updatedAt": "datetime",
           },
        "createdAt" : "date",
        "updatedAt" : "date"
     },
     {
        "id" : "number",
        "nis" : "string",
        "name" : "string",
        "gender" : "string",
        "birthday" : "date",
        "address" : "string",
        "age" : "number",
        "class" : {
              "id": "number",
              "name": "string",
              "grade": "number",
              "createdAt": "datetime",
              "updatedAt": "datetime",
           },
        "createdAt" : "date",
        "updatedAt" : "date"
     }
   ]
}
```

## Delete Student

Request :
- Method : DELETE
- Endpoint : `/api/students/{id}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string"
}
```
