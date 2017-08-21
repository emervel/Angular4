Todo codigo javascript es valido en typescript. Typescript esta para anadir funcionalidades de lenguajes mas complejos al
codigo javascript como por ejemplo errores en tiempo de escritura.
Ejemplo sencillo que "compila" el ts y genera el js correspondiente. Basta con ejecutar para que lo genere:
>>tsc app -w
O mejor ejecutar lo siguiente para que cualquier cambio en la carpeta de ts se vea reflejado automaticamente en el js:
>>tsc -init
>>tsc
El -init me genera un tsconfig.json con la configuracion de reglas del compilador
