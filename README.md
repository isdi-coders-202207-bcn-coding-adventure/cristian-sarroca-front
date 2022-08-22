CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

R:En react usamos el hook useCallback cuando queremos memoizar una función, por detrás las funciones son objetos y de esta forma hacemos que esta funcion siempre sea la misma instancia y por lo tanto apunte al mismo sitio. Solo cambiará cuando cambie la variable en el array de dependecias del hook.
Un ejemplo seria: un componente padre y sus hijos, el padre llama una API y los hijos son los item de la lista y cada hijo tiene una funcion (para aniadirlos a favorito por ejemplo), aparte hay un input para buscar en la list. Ahora cada vez que se escriba en el input el componente se re-renderiza y la funcion de agregar a favoritos tambien lo hace. Para evitar eso se coloca un useCallback que permitira la inicializacion de la funcion si los referentes cambian.
