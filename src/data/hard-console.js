// Nivel Difícil: ¿Qué imprime la consola? (Desafío de Lógica & Quirk Hunter)
export const hardConsoleChallenges = [
  {
    id: 'hard-js-coercion-1',
    language: 'JavaScript',
    title: 'Suma de tipos mixtos',
    code: `console.log(1 + "2" + 3);`,
    question: '¿Qué imprimirá la consola al ejecutar esta línea?',
    options: ['"123"', '6', '"33"', 'NaN'],
    correct: '"123"',
    explanation: 'En JS, `1 + "2"` evalúa a la cadena `"12"` debido a la coerción de tipos. Luego `"12" + 3` vuelve a concatenar como string dando `"123"`.'
  },
  {
    id: 'hard-py-slice',
    language: 'Python',
    title: 'Slicing con salto invertido',
    code: `x = [10, 20, 30, 40, 50]
print(x[::-2][1])`,
    question: '¿Cuál es el valor que imprime Python?',
    options: ['30', '40', '20', '10'],
    correct: '30',
    explanation: 'El slicing `x[::-2]` invierte la lista dando saltos de 2: produce `[50, 30, 10]`. El índice `[1]` de esa nueva lista es `30`.'
  },
  {
    id: 'hard-js-nan',
    language: 'JavaScript',
    title: 'El misterio de NaN',
    code: `console.log(typeof NaN);`,
    question: '¿Qué tipo de dato reporta `typeof NaN`?',
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    correct: '"number"',
    explanation: '¡Irónico pero cierto! En el estándar IEEE 754 de coma flotante, NaN significa "Not a Number", pero su tipo computacional sigue siendo numérico (`"number"`).'
  },
  {
    id: 'hard-py-bool-math',
    language: 'Python',
    title: 'Aritmética con Booleanos',
    code: `print(True + True - False * 8 + True)`,
    question: '¿Cuál es el resultado impreso por Python?',
    options: ['3', '2', 'True', 'Error de tipo'],
    correct: '3',
    explanation: 'En Python, `bool` es una subclase directa de `int`. `True` equivale a 1 y `False` a 0. Entonces: 1 + 1 - (0 * 8) + 1 = 3.'
  },
  {
    id: 'hard-js-array-compare',
    language: 'JavaScript',
    title: 'Coerción absurda de arrays',
    code: `console.log([] == ![]);`,
    question: '¿Qué evalúa esta infame comparación?',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correct: 'true',
    explanation: '`![]` se convierte primero a boolean `false`. La expresión queda `[] == false`. Ambos lados se convierten a número: `+[]` es 0 y `+false` es 0. 0 == 0 es `true`.'
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
    explanation: 'En Python los argumentos por defecto se evalúan una sola vez al definir la función. La lista muta y retiene `[1]`, por lo que al agregar `2` tiene tamaño 2.'
  },
  {
    id: 'hard-cpp-pre-post',
    language: 'C++',
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
    id: 'hard-js-float-trap',
    language: 'JavaScript',
    title: 'Precisión de coma flotante',
    code: `console.log(0.1 + 0.2 === 0.3);`,
    question: '¿Qué imprime esta igualdad matemática?',
    options: ['false', 'true', 'null', '0.3'],
    correct: 'false',
    explanation: 'Debido a la representación binaria IEEE 754, `0.1 + 0.2` resulta en `0.30000000000000004`, por lo que la comparación estricta `=== 0.3` es `false`.'
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
    explanation: 'En Python `hash(1) == hash(True) == hash(1.0)` y todos son iguales en valor (`1 == True == 1.0`). Por tanto, sobrescriben la misma clave quedando solo `d[1] = "UPEC"` con longitud 1.'
  },
  {
    id: 'hard-js-array-add',
    language: 'JavaScript',
    title: 'Suma de arrays en JS',
    code: `console.log([1, 2] + [3, 4]);`,
    question: '¿Qué salida produce al sumar dos arrays con `+`?',
    options: ['"1,23,4"', '[1, 2, 3, 4]', '10', 'NaN'],
    correct: '"1,23,4"',
    explanation: 'El operador `+` convierte ambos arrays a strings: `"1,2"` y `"3,4"`, y luego los concatena dando como resultado `"1,23,4"`.'
  },
  {
    id: 'hard-py-string-step',
    language: 'Python',
    title: 'Palíndromo invertido',
    code: `palabra = "LibroFestUPEC"
print(palabra[-4:])`,
    question: '¿Qué subcadena se imprime?',
    options: ['"UPEC"', '"Fest"', '"CEPU"', '"estUPEC"'],
    correct: '"UPEC"',
    explanation: 'Un índice negativo cuenta desde el final. `-4:` selecciona desde el 4to carácter contando hacia atrás hasta el final, extrayendo `"UPEC"`.'
  },
  {
    id: 'hard-js-sort-numbers',
    language: 'JavaScript',
    title: 'El peligro de Array.sort()',
    code: `const numeros = [25, 8, 100, 4];
numeros.sort();
console.log(numeros[0]);`,
    question: '¿Cuál es el primer elemento tras ordenar sin callback?',
    options: ['100', '4', '8', '25'],
    correct: '100',
    explanation: 'Por defecto, `sort()` en JS convierte los elementos a cadenas de texto antes de ordenar alfabéticamente. En orden lexicográfico `"100"` viene antes que `"25"`, `"4"` y `"8"`.'
  },
  {
    id: 'hard-py-is-vs-eq',
    language: 'Python',
    title: '`==` versus `is` (Integer Caching)',
    code: `x = 256
y = 256
a = 257
b = 257
print(x is y, a is b)`,
    question: '¿Qué imprime Python en la consola estándar?',
    options: ['True False', 'True True', 'False False', 'False True'],
    correct: 'True False',
    explanation: 'CPython pre-asigna en memoria los enteros pequeños en el rango [-5, 256]. Por eso `256 is 256` apunta al mismo objeto (`True`), pero `257` crea instancias distintas (`False`).'
  },
  {
    id: 'hard-js-math-max',
    language: 'JavaScript',
    title: 'Math.min() y Math.max() sin argumentos',
    code: `console.log(Math.min() > Math.max());`,
    question: '¿Qué valor booleano arroja esta comparación?',
    options: ['true', 'false', 'NaN', 'TypeError'],
    correct: 'true',
    explanation: '¡Una de las mayores joyas de JS! `Math.min()` sin argumentos devuelve `Infinity`, y `Math.max()` devuelve `-Infinity`. Como `Infinity > -Infinity`, el resultado es `true`.'
  },
  {
    id: 'hard-cpp-ternary',
    language: 'C++',
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
    id: 'hard-py-lambda-closure',
    language: 'Python',
    title: 'Clausuras de Lambdas en Bucles',
    code: `funcs = [lambda: i for i in range(3)]
print([f() for f in funcs])`,
    question: '¿Qué lista final se imprime?',
    options: ['[2, 2, 2]', '[0, 1, 2]', '[3, 3, 3]', '[0, 0, 0]'],
    correct: '[2, 2, 2]',
    explanation: 'Las lambdas capturan la variable `i` por referencia, no por valor. Cuando se ejecutan las funciones, el bucle ya terminó y `i` tiene el valor final `2`.'
  },
  {
    id: 'hard-js-boolean-string',
    language: 'JavaScript',
    title: 'Truthy de cadenas',
    code: `console.log(Boolean("false") === Boolean(false));`,
    question: '¿Qué evalúa la igualdad estricta?',
    options: ['false', 'true', 'undefined', 'TypeError'],
    correct: 'false',
    explanation: 'Cualquier cadena de texto no vacía es "truthy" en JS, por lo que `Boolean("false")` es `true`. Mientras que `Boolean(false)` es `false`. `true === false` es `false`.'
  },
  {
    id: 'hard-py-tuple-paren',
    language: 'Python',
    title: '¿Tupla o Entero?',
    code: `a = (42)
b = (42,)
print(type(a) == type(b))`,
    question: '¿Son del mismo tipo `a` y `b`?',
    options: ['False', 'True', 'SyntaxError', 'None'],
    correct: 'False',
    explanation: 'Los paréntesis simples `(42)` son solo agrupación matemática, dando un `int`. Para que Python reconozca una tupla de un solo elemento es obligatoria la coma `(42,)`.'
  }
];
