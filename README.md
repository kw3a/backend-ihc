## Instalacion
//tener mysql instalado y corriendo
//crear una base de datos vacía
//copiar el .env.example y renombrar como .env 
//modificar .env para coincidir con la base de datos vacía
npm i
npm ace migration:fresh --seed


## Ejecución
npm ace serve --watch

## Endpoints

GET ALL
<domain>/api/

POST create
<domain>/api/create
ejemplo de lo que va dentro del body:
{
    "name": "curso asdkjbasd",
    "duration": "5",
    "level": "Diplomado",
    "mode": "Virtual",
    "doc": "clbnwp08r0002ygu8gnixddnj.pdf",
    "image": "clbnwp08v0003ygu87ddta08h.jpg",
    "area": "Electronica"
}


GET one
<domain>/api/:id

GET one image
<domain>/api/file/:id