CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

R:En react usamos el hook useCallback cuando queremos memoizar una función y que esta solo vuelva a ser invocada cada vez que cambie lo que hayamos puesto en la array dependecias del useCallback. De está manera solo se invocará a la funcion calllback una primera vez en el rendering inicial y posteriormente cada vez que la variable en el array de dependecias se modifique.
