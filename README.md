CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

R:En react usamos el hook useCallback cuando queremos memoizar una función, por detrás las funciones son objetos y de esta forma hacemos que esta funcion siempre sea la misma instancia y por lo tanto apunte al mismo sitio. Solo cambiará cuando cambie la variable en el array de dependecias del hook.
