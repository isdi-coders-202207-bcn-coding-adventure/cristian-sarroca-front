CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

R: Cuando necesitamos la misma instancia de una funcion entre un renderizado y otro.
Que se rerenderize cuando haya un cambio de estado. Solo habra un cambio cuando se modifique la variable dentro del array de dependecias.
