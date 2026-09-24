// Nivel Difícil: ¿Qué imprime la consola? (Desafíos clasificados por lenguaje)
export const hardConsoleChallenges = [
  // ===================== JAVASCRIPT =====================
  {
    id: 'hard-js-coercion-1',
    language: 'JavaScript',
    title: 'Suma de tipos mixtos',
    code: `console.log(1 + "2" + 3);`,
    question: '¿Qué imprimirá la consola al ejecutar esta línea?',
    options: ['"123"', '6', '"33"', 'NaN'],
    correct: '"123"',
    explanation: 'En JS, `1 + "2"` evalúa a `"12"` debido a la coerción a string. Luego `"12" + 3` vuelve a concatenar dando `"123"`.'
  },
  {
    id: 'hard-js-nan',
    language: 'JavaScript',
    title: 'El misterio de NaN',
    code: `console.log(typeof NaN);`,
    question: '¿Qué tipo de dato reporta `typeof NaN`?',
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    correct: '"number"',
    explanation: 'En el estándar IEEE 754 de coma flotante, NaN significa "Not a Number", pero su tipo computacional sigue siendo numérico (`"number"`).'
  },
  {
    id: 'hard-js-array-compare',
    language: 'JavaScript',
    title: 'Coerción de arrays y booleanos',
    code: `console.log([] == ![]);`,
    question: '¿Qué evalúa esta infame comparación?',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correct: 'true',
    explanation: '`![]` es `false`. La expresión queda `[] == false`. Ambos lados se convierten a número: `+[]` es 0 y `+false` es 0. 0 == 0 es `true`.'
  },
  {
    id: 'hard-js-float-trap',
    language: 'JavaScript',
    title: 'Precisión de coma flotante',
    code: `console.log(0.1 + 0.2 === 0.3);`,
    question: '¿Qué imprime esta igualdad matemática?',
    options: ['false', 'true', 'null', '0.3'],
    correct: 'false',
    explanation: 'Debido a la representación binaria IEEE 754, `0.1 + 0.2` resulta en `0.30000000000000004`, por lo que la comparación estricta es `false`.'
  },
  {
    id: 'hard-js-array-add',
    language: 'JavaScript',
    title: 'Suma de arrays con +',
    code: `console.log([1, 2] + [3, 4]);`,
    question: '¿Qué salida produce al sumar dos arrays con `+`?',
    options: ['"1,23,4"', '[1, 2, 3, 4]', '10', 'NaN'],
    correct: '"1,23,4"',
    explanation: 'El operador `+` convierte ambos arrays a cadenas: `"1,2"` y `"3,4"`, concatenándolas como `"1,23,4"`.'
  },
  {
    id: 'hard-js-sort-numbers',
    language: 'JavaScript',
    title: 'Array.sort() sin comparador',
    code: `const numeros = [25, 8, 100, 4];
numeros.sort();
console.log(numeros[0]);`,
    question: '¿Cuál es el primer elemento tras ordenar sin callback?',
    options: ['100', '4', '8', '25'],
    correct: '100',
    explanation: '`sort()` convierte los elementos a texto y los ordena alfabéticamente. En orden lexicográfico `"100"` va antes que `"25"`.'
  },
  {
    id: 'hard-js-math-max',
    language: 'JavaScript',
    title: 'Math.min() vs Math.max() sin argumentos',
    code: `console.log(Math.min() > Math.max());`,
    question: '¿Qué valor booleano arroja esta comparación?',
    options: ['true', 'false', 'NaN', 'TypeError'],
    correct: 'true',
    explanation: '`Math.min()` sin argumentos devuelve `Infinity`, y `Math.max()` devuelve `-Infinity`. Como `Infinity > -Infinity`, el resultado es `true`.'
  },
  {
    id: 'hard-js-chain-compare',
    language: 'JavaScript',
    title: 'Comparaciones encadenadas',
    code: `console.log(1 < 2 < 3, 3 > 2 > 1);`,
    question: '¿Cuál es el resultado de ambas comparaciones?',
    options: ['true false', 'true true', 'false false', 'false true'],
    correct: 'true false',
    explanation: '`1 < 2` evalúa a `true`, luego `true < 3` se convierte en `1 < 3` (`true`). Pero `3 > 2` es `true`, y `true > 1` se convierte en `1 > 1` (`false`).'
  },
  {
    id: 'hard-js-boolean-string',
    language: 'JavaScript',
    title: 'Truthy de cadenas',
    code: `console.log(Boolean("false") === Boolean(false));`,
    question: '¿Qué evalúa la igualdad estricta?',
    options: ['false', 'true', 'undefined', 'TypeError'],
    correct: 'false',
    explanation: 'Cualquier cadena de texto no vacía es truthy en JS, por lo que `Boolean("false")` es `true`. Mientras que `Boolean(false)` es `false`.'
  },
  {
    id: 'hard-js-empty-arrays',
    language: 'JavaScript',
    title: 'Suma de arrays vacíos',
    code: `console.log([] + {});`,
    question: '¿Qué imprime sumar un array vacío y un objeto vacío?',
    options: ['"[object Object]"', '0', 'NaN', 'TypeError'],
    correct: '"[object Object]"',
    explanation: '`[]` se convierte en `""` (string vacío) y `{}` se convierte en `"[object Object]"`, concatenando a `"[object Object]"`.'
  },

  // ===================== PYTHON =====================
  {
    id: 'hard-py-slice',
    language: 'Python',
    title: 'Slicing con salto invertido',
    code: `x = [10, 20, 30, 40, 50]
print(x[::-2][1])`,
    question: '¿Cuál es el valor que imprime Python?',
    options: ['30', '40', '20', '10'],
    correct: '30',
    explanation: '`x[::-2]` invierte la lista con saltos de 2 produciendo `[50, 30, 10]`. El índice `[1]` de esa nueva lista es `30`.'
  },
  {
    id: 'hard-py-bool-math',
    language: 'Python',
    title: 'Aritmética con Booleanos',
    code: `print(True + True - False * 8 + True)`,
    question: '¿Cuál es el resultado impreso por Python?',
    options: ['3', '2', 'True', 'Error de tipo'],
    correct: '3',
    explanation: 'En Python `bool` es subclase de `int`. `True` vale 1 y `False` vale 0. Por ende: 1 + 1 - (0 * 8) + 1 = 3.'
  },
  {
    id: 'hard-py-mutable-default',
    language: 'Python',
    title: 'Argumentos mutables por defecto',
    code: `def agregar(item, lista=[]):
    lista.append(item)
    return len(lista)

agregar(1)
print(agregar(2))`,
    question: '¿Qué imprime la segunda llamada a la función?',
    options: ['2', '1', '[1, 2]', '3'],
    correct: '2',
    explanation: 'Los argumentos mutables por defecto se crean una sola vez al definir la función. Retiene `[1]` y al añadir `2` su tamaño es 2.'
  },
  {
    id: 'hard-py-dict-keys',
    language: 'Python',
    title: 'Colisión de claves en Diccionarios',
    code: `d = {1: 'IEEE', True: 'DevClub', 1.0: 'UPEC'}
print(len(d), d[1])`,
    question: '¿Cuántos elementos tiene el diccionario y qué imprime?',
    options: ['1 UPEC', '3 IEEE', '2 DevClub', '1 IEEE'],
    correct: '1 UPEC',
    explanation: 'En Python `hash(1) == hash(True) == hash(1.0)` y `1 == True == 1.0`. Por tanto sobrescriben la misma clave quedando solo `d[1] = "UPEC"`.'
  },
  {
    id: 'hard-py-string-step',
    language: 'Python',
    title: 'Slicing de strings negativos',
    code: `palabra = "LibroFestUPEC"
print(palabra[-4:])`,
    question: '¿Qué subcadena se imprime?',
    options: ['"UPEC"', '"Fest"', '"CEPU"', '"estUPEC"'],
    correct: '"UPEC"',
    explanation: 'El índice `-4:` selecciona desde el 4to carácter contando desde el final hasta el final, extrayendo `"UPEC"`.'
  },
  {
    id: 'hard-py-is-vs-eq',
    language: 'Python',
    title: 'Integer Caching (-5 a 256)',
    code: `x = 256
y = 256
a = 257
b = 257
print(x is y, a is b)`,
    question: '¿Qué imprime Python en la consola estándar?',
    options: ['True False', 'True True', 'False False', 'False True'],
    correct: 'True False',
    explanation: 'CPython pre-asigna en memoria los enteros en [-5, 256]. Por eso `256 is 256` es el mismo objeto (`True`), pero `257` crea instancias distintas (`False`).'
  },
  {
    id: 'hard-py-lambda-closure',
    language: 'Python',
    title: 'Clausuras de Lambdas en Bucles',
    code: `funcs = [lambda: i for i in range(3)]
print([f() for f in funcs])`,
    question: '¿Qué lista final se imprime?',
    options: ['[2, 2, 2]', '[0, 1, 2]', '[3, 3, 3]', '[0, 0, 0]'],
    correct: '[2, 2, 2]',
    explanation: 'Las funciones lambda capturan `i` por referencia, no por valor. Cuando se ejecutan, el bucle terminó y `i` vale `2`.'
  },
  {
    id: 'hard-py-tuple-paren',
    language: 'Python',
    title: 'Tupla vs Entero entre paréntesis',
    code: `a = (42)
b = (42,)
print(type(a) == type(b))`,
    question: '¿Son del mismo tipo `a` y `b`?',
    options: ['False', 'True', 'SyntaxError', 'None'],
    correct: 'False',
    explanation: '`(42)` es solo un entero agrupado (`int`). Para que sea tupla de 1 elemento se requiere la coma explícita `(42,)`.'
  },
  {
    id: 'hard-py-all-any',
    language: 'Python',
    title: 'all() y any() sobre listas vacías',
    code: `print(all([]), any([]))`,
    question: '¿Qué devuelven all() y any() de una lista vacía?',
    options: ['True False', 'False False', 'True True', 'False True'],
    correct: 'True False',
    explanation: 'Por vacuidad matemática, `all([])` es `True` (no hay elementos falsos), mientras que `any([])` es `False` (no hay ningún elemento verdadero).'
  },
  {
    id: 'hard-py-list-ref',
    language: 'Python',
    title: 'Modificación in-place con +=',
    code: `a = [1, 2]
b = a
b += [3]
print(len(a))`,
    question: '¿Cuál es la longitud de `a`?',
    options: ['3', '2', '1', 'Error'],
    correct: '3',
    explanation: 'El operador `+=` en listas invoca `.extend()`, modificando la lista en memoria in-place. Como `b` y `a` apuntan al mismo objeto, `a` ahora tiene longitud 3.'
  },

  // ===================== C / C++ =====================
  {
    id: 'hard-cpp-pre-post',
    language: 'C / C++',
    title: 'Pre-incremento vs Post-incremento',
    code: `int a = 5;
int b = ++a + a++;
std::cout << b;`,
    question: '¿Qué valor se envía a std::cout?',
    options: ['12', '11', '13', '10'],
    correct: '12',
    explanation: '`++a` incrementa `a` a 6 antes de sumar. Luego `6 + 6` da 12, y finalmente el post-incremento `a++` deja `a` en 7.'
  },
  {
    id: 'hard-cpp-ternary',
    language: 'C / C++',
    title: 'Prioridad de operadores y ternario',
    code: `int x = 2;
int y = (x > 1) ? x * 10 : x * 100;
std::cout << y;`,
    question: '¿Cuál es la salida en consola?',
    options: ['20', '200', '2', '0'],
    correct: '20',
    explanation: 'La condición `2 > 1` es verdadera (`true`), por lo que evalúa la primera rama: `2 * 10 = 20`.'
  },
  {
    id: 'hard-c-array-index',
    language: 'C / C++',
    title: 'Indexación conmutativa en C',
    code: `int arr[] = {10, 20, 30};
printf("%d", 1[arr]);`,
    question: '¿Qué imprime `1[arr]` en el lenguaje C?',
    options: ['20', '10', 'Error de sintaxis', '30'],
    correct: '20',
    explanation: 'En C, `arr[i]` se define como `*(arr + i)`. Por conmutatividad matemática de la suma, `*(1 + arr)` es idéntico a `1[arr]`, dando el elemento en posición 1: `20`.'
  },
  {
    id: 'hard-c-assignment-if',
    language: 'C / C++',
    title: 'Asignación dentro de un if',
    code: `int x = 5;
if (x = 0) {
    printf("A");
} else {
    printf("B");
}`,
    question: '¿Qué carácter se imprime en consola?',
    options: ['B', 'A', 'Error de compilación', '5'],
    correct: 'B',
    explanation: 'Es una asignación `x = 0`, no una igualdad `==`. La expresión evalúa a 0 (falso en C), por lo que ejecuta la rama `else` imprimiendo "B".'
  },
  {
    id: 'hard-c-sizeof-string',
    language: 'C / C++',
    title: 'sizeof de cadena literal',
    code: `char str[] = "UPEC";
printf("%d", (int)sizeof(str));`,
    question: '¿Cuántos bytes reporta sizeof para "UPEC"?',
    options: ['5', '4', '8', '3'],
    correct: '5',
    explanation: 'Las cadenas en C terminan con el byte nulo terminador `\\0`. Por lo tanto "UPEC" tiene 4 letras + 1 byte nulo = 5 bytes.'
  },
  {
    id: 'hard-c-pointer-deref',
    language: 'C / C++',
    title: 'Aritmética básica de punteros',
    code: `int val = 15;
int *ptr = &val;
*ptr += 10;
printf("%d", val);`,
    question: '¿Qué valor se imprime en pantalla?',
    options: ['25', '15', '10', 'Dirección de memoria'],
    correct: '25',
    explanation: '`*ptr` desreferencia el puntero modificando directamente el valor de la variable `val`. 15 + 10 = 25.'
  },

  // ===================== JAVA =====================
  {
    id: 'hard-java-string-pool',
    language: 'Java',
    title: 'String Constant Pool',
    code: `String s1 = "librofest";
String s2 = "libro" + "fest";
System.out.print(s1 == s2);`,
    question: '¿Qué imprime la comparación de referencias?',
    options: ['true', 'false', '1', 'NullPointerException'],
    correct: 'true',
    explanation: 'El compilador de Java optimiza las concatenaciones de literales constantes en tiempo de compilación, reutilizando la misma instancia en el String Pool.'
  },
  {
    id: 'hard-java-integer-cache',
    language: 'Java',
    title: 'Integer Cache en Java',
    code: `Integer a = 127;
Integer b = 127;
Integer c = 128;
Integer d = 128;
System.out.print((a == b) + " " + (c == d));`,
    question: '¿Cuál es la salida de ambas comparaciones con ==?',
    options: ['true false', 'true true', 'false false', 'false true'],
    correct: 'true false',
    explanation: 'Java cachea objetos `Integer` en el rango [-128, 127]. Por eso `127 == 127` apunta al mismo objeto (`true`), pero `128` crea nuevos objetos en memoria (`false`).'
  },
  {
    id: 'hard-java-concat-order',
    language: 'Java',
    title: 'Orden de concatenación con cadenas',
    code: `System.out.print("UPEC" + 10 + 20);`,
    question: '¿Qué texto se imprime exactamente?',
    options: ['"UPEC1020"', '"UPEC30"', '"30UPEC"', 'Error de tipo'],
    correct: '"UPEC1020"',
    explanation: 'La evaluación va de izquierda a derecha: `"UPEC" + 10` produce la cadena `"UPEC10"`, y `"UPEC10" + 20` produce `"UPEC1020"`.'
  },
  {
    id: 'hard-java-math-abs',
    language: 'Java',
    title: 'Límite de Integer.MIN_VALUE',
    code: `int min = Integer.MIN_VALUE;
System.out.print(Math.abs(min) < 0);`,
    question: '¿Qué valor booleano arroja Math.abs() en el mínimo entero?',
    options: ['true', 'false', 'ArithmeticException', '0'],
    correct: 'true',
    explanation: '`Integer.MIN_VALUE` es -2147483648. Como el positivo máximo es 2147483647, el valor absoluto desborda (overflow) y vuelve a ser negativo (-2147483648 < 0 es `true`).'
  }
];
