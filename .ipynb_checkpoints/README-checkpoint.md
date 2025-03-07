# Proyecto: ForkySearch

## Paso 1: Obtener Datos de prueba
para entrenar nuestro modelo vamos a necesitar datos. Poniendonos en un caso real, un restaurante suele tener sus menús y cartas en PDFs e imagenes, por lo que vamos a entrenar un modelo que sea adecuado para este trabajo.
En este caso necesitamos evaluar una serie de variables para elegir el mejor servicio (y obviamente gastar la menor cantidad posible):
+ Necesitamos leer PDFs e imágenes que no van a contener el texto en forma pura, por lo que necesitamos orientar el modelo a un servicio que utilice `OCR`.
+ Los recursos van a ser `estructurados`: generalmente los menús suelen agrupar los platos según su tipo como puede ser `primer plato`, `segundo plato`, `entrantes`, etc.
+ a pesar de tener una estructura determinada, la forma en la que esta representada no es fija, por lo que hay que no siempre un orden determinado.

Evaluando estas variables, el mejor servicio a usar sería `Document Intelligence` para poder etiquetar manualmente algunos menús de prueba y posteriormente etiquetar y extraer la información de forma automática teniendo el modelo entrenado.
Las etiquetas utilizadas van a ser:
+ Restaurante
+ Primer plato
+ Segundo plato
+ Postre
+ Precio
+ Bebida

## Paso 2: Extraer información de los PDFs
Una vez tenemos la información, necesitamos almacenarla en una cuenta de almacenamiento. En mi caso voy a utilizar `CosmosDB` como base de datos y un `blob storage` para el almacenamiento vinculado a la base de datos

## Paso 3: Búsqueda inteligente
Para poder consultar la base de datos sin complicarse demasiado con querys de SQL, vamos a utilizar el servicio de `Azure AI Search` para poder ahorrar todo ese trabajo. Vamos a vincular el servicio con 
la base de datos y de esa forma tener la comunicación bien establecida

## Paso 4: Implementación con la aplicación Web
Para la aplicación Web voy a plantear los siguientes objetivos:
+ El usuario tiene que meterse en la aplicación y buscar las cosas que le gustaría comer (sopa, lentejas, hamburguesa, tacos, etc.) o el nombre de algún restaurante (Taco bell, Hamburguesa nostra, la Tagliatella, etc.)
+ El sistema debe devolverle una respuesta basada en lo que ha pedido y ordenarla según la ubicación (como no hemos contemplado restaurantes reales en el entrenamiento, vamos a dejar de lado la ubicación)
+ Debe haber un formulario que tenga la capacidad de subir PDFs al sistema para que los contemple como nuevos menús, haciendo toda la lógica necesaria si es de un restaurante nuevo o de uno existente.

Para esto necesitamos vincular el primer punto a `Azure AI Search` y que la solicitud de búsqueda se comunique directamente con el servicio, devolviendo una serie de información que se procesará para poder tener el formato adecuado en la aplicación web.

