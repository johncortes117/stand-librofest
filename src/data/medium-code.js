// Nivel Medio: Detective de Código (Adivina el lenguaje viendo el código fuente)
export const mediumSnippets = [
  {
    id: 'med-rust',
    language: 'Rust',
    distractors: ['C++', 'Go', 'Swift'],
    code: `fn main() {
    let mut contador = 0;
    let mensaje = match contador {
        0 => "Stand IEEE UPEC",
        _ => "DevClub",
    };
    println!("{}: {}", mensaje, contador);
}`,
    hint: 'Palabras clave como `fn`, `let mut`, `match` y macros terminadas en `!` como `println!`.',
    explanation: 'Rust utiliza `fn` para funciones, macros terminadas en signo de exclamación `println!` y pattern matching exhaustivo con `match`.'
  },
  {
    id: 'med-python',
    language: 'Python',
    distractors: ['Ruby', 'JavaScript', 'Julia'],
    code: `def calcular_promedio(notas: list[float]) -> float:
    # UPEC Libro Fest 2026
    aprobados = [n for n in notas if n >= 7.0]
    return sum(aprobados) / len(aprobados) if aprobados else 0.0

print(f"Resultado: {calcular_promedio([8.5, 9.0, 6.0]):.2f}")`,
    hint: 'Indentación significativa, `def`, comprensiones de lista y f-strings (`f"..."`).',
    explanation: 'Python no usa llaves `{}` para bloques sino indentación, define funciones con `def` y usa comprensiones de lista como `[n for n in notas]`.'
  },
  {
    id: 'med-go',
    language: 'Go',
    distractors: ['Rust', 'C', 'Kotlin'],
    code: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    go func() {
        ch <- "¡Bienvenidos al stand IEEE & DevClub!"
    }()
    msg := <-ch
    fmt.Println(msg)
}`,
    hint: 'Usa `package main`, canales con `chan`, gorutinas con `go func()` y operador `<-`.',
    explanation: 'Go se caracteriza por su concurrencia nativa mediante gorutinas `go func()` y canales tipados `chan` con el operador flecha `<-`.'
  },
  {
    id: 'med-cpp',
    language: 'C++',
    distractors: ['C#', 'Java', 'C'],
    code: `#include <iostream>
#include <vector>
#include <memory>

template <typename T>
void imprimirElemento(const std::vector<T>& vec) {
    for (const auto& item : vec) {
        std::cout << "[UPEC] " << item << std::endl;
    }
}`,
    hint: 'Directivas `#include <iostream>`, templates `template <typename T>` y operador de resolución de ámbito `std::`.',
    explanation: 'C++ utiliza la biblioteca estándar con el namespace `std::`, streams `std::cout <<`, templates y punteros inteligentes.'
  },
  {
    id: 'med-swift',
    language: 'Swift',
    distractors: ['Kotlin', 'TypeScript', 'Rust'],
    code: `import SwiftUI

struct LibroFestStand: View {
    @State private var visitantes: Int = 0
    
    var body: some View {
        VStack {
            Text("IEEE & DevClub: \\(visitantes)")
            Button("Nuevo Visitante") {
                visitantes += 1
            }
        }
    }
}`,
    hint: 'Usa `import SwiftUI`, decoradores como `@State`, `struct ... : View` e interpolación con `\\(...)`.',
    explanation: 'Swift es el lenguaje insignia de Apple; utiliza `@State`, vistas declarativas `View`, y su interpolación única de strings `\\(variable)`.'
  },
  {
    id: 'med-php',
    language: 'PHP',
    distractors: ['Perl', 'JavaScript', 'Ruby'],
    code: `<?php
namespace Upec\\DevClub;

$participantes = ["Ana", "Carlos", "David"];

foreach ($participantes as $index => $nombre) {
    echo "Participante #$index: " . htmlspecialchars($nombre) . "\\n";
}
?>`,
    hint: 'Empieza con `<?php`, todas las variables llevan el signo de dólar `$`, y usa el punto `.` para concatenar strings.',
    explanation: 'PHP es inconfundible por su tag de apertura `<?php`, el prefijo obligatorio `$` en variables y la concatenación con punto `.`.'
  },
  {
    id: 'med-kotlin',
    language: 'Kotlin',
    distractors: ['Java', 'Swift', 'Scala'],
    code: `data class Estudiante(val nombre: String, val semestre: Int = 1)

fun main() {
    val club = "DevClub UPEC"
    val miembro = Estudiante("Mateo", 4)
    
    val mensaje = when (miembro.semestre) {
        in 1..3 -> "Novato entusiasta"
        in 4..8 -> "Desarrollador senior"
        else -> "Egresado honorario"
    }
    println("\$club -> \${miembro.nombre}: \$mensaje")
}`,
    hint: 'Usa `data class`, rangos con `1..3`, expresiones `when (...)` y `val` inmutable.',
    explanation: 'Kotlin destaca por sus concisas `data class`, la estructura condicional `when` en lugar de switch, y compatibilidad total con la JVM.'
  },
  {
    id: 'med-typescript',
    language: 'TypeScript',
    distractors: ['JavaScript', 'C#', 'Dart'],
    code: `interface SocioIEEE<T> {
  id: string;
  nombre: string;
  habilidades: readonly T[];
  activo: boolean;
}

type NivelAcceso = 'ADMIN' | 'ESTUDIANTE' | 'VISITANTE';

const registrar = (socio: SocioIEEE<string>, rol: NivelAcceso): void => {
  console.log(\`Socio \${socio.nombre} registrado con rol \${rol}\`);
};`,
    hint: 'Declara `interface`, tipos unión como `type NivelAcceso = ...`, genéricos `<T>` y anotaciones `: void`.',
    explanation: 'TypeScript agrega un sistema de tipos estático completo sobre JavaScript: interfaces, tipos literales de unión y chequeo estricto.'
  },
  {
    id: 'med-java',
    language: 'Java',
    distractors: ['C#', 'C++', 'Kotlin'],
    code: `package ec.edu.upec.librofest;

public class IEEEStandManager {
    private static final String EVENTO = "Libro Fest 2026";

    public static void main(String[] args) {
        System.out.println("Iniciando stand oficial: " + EVENTO);
        Thread hilo = new Thread(() -> {
            System.out.println("¡DevClub en ejecución!");
        });
        hilo.start();
    }
}`,
    hint: '`public static void main(String[] args)`, `System.out.println` y estructura formal de clases.',
    explanation: 'Java se reconoce instantáneamente por su estructura canónica de clases, el método `main(String[] args)` y `System.out.println`.'
  },
  {
    id: 'med-ruby',
    language: 'Ruby',
    distractors: ['Python', 'Elixir', 'Crystal'],
    code: `class DevClubMember
  attr_accessor :nombre, :puntos

  def initialize(nombre)
    @nombre = nombre
    @puntos = 100
  end

  def premiar!
    5.times { |i| puts "Festejo #{i + 1} para #{@nombre}!" }
  end
end`,
    hint: 'Usa `def ... end`, `attr_accessor`, variables de instancia con `@nombre` y bloques con `times { |i| ... }`.',
    explanation: 'Ruby no requiere llaves ni indentación obligatoria; finaliza bloques con `end`, usa `@` para atributos y métodos con `!` o `?`.'
  },
  {
    id: 'med-dart',
    language: 'Dart',
    distractors: ['TypeScript', 'Java', 'C#'],
    code: `import 'package:flutter/material.dart';

class StandWidget extends StatelessWidget {
  const StandWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => print('IEEE DevClub UPEC'),
        child: const Text('¡Participar en la Trivia!'),
      ),
    );
  }
}`,
    hint: 'Usa constructores `StatelessWidget`, `@override Widget build(BuildContext context)` y widgets como `Center` y `ElevatedButton`.',
    explanation: 'Dart es el motor detrás de Flutter, reconocible por la composición de árboles de Widgets y constructores `const`.'
  },
  {
    id: 'med-csharp',
    language: 'C#',
    distractors: ['Java', 'C++', 'TypeScript'],
    code: `using System;
using System.Threading.Tasks;

namespace UpecStand
{
    public record Participante(string Nombre, int Puntaje);

    class Program
    {
        static async Task Main(string[] args)
        {
            var p = new Participante("Carlos", 95);
            Console.WriteLine($"[IEEE] {p.Nombre} tiene {p.Puntaje} pts");
            await Task.Delay(1000);
        }
    }
}`,
    hint: 'Usa `using System;`, `Console.WriteLine`, `async Task Main` y tipos `record`.',
    explanation: 'C# se distingue por `using System;`, `Console.WriteLine`, interpolación `$"..."`, y palabras clave de la plataforma .NET.'
  },
  {
    id: 'med-sql',
    language: 'SQL',
    distractors: ['Python', 'Bash', 'R'],
    code: `SELECT 
    c.carrera,
    COUNT(p.id) AS total_participantes,
    AVG(p.puntaje) AS promedio_score
FROM participantes p
INNER JOIN carreras c ON p.carrera_id = c.id
WHERE p.evento = 'UPEC Libro Fest 2026'
GROUP BY c.carrera
HAVING COUNT(p.id) >= 5
ORDER BY promedio_score DESC;`,
    hint: 'Sentencias declarativas en mayúsculas: `SELECT`, `FROM`, `INNER JOIN`, `GROUP BY`, `HAVING`.',
    explanation: 'SQL (Structured Query Language) es el estándar universal para consultar bases de datos relacionales con sintaxis declarativa.'
  },
  {
    id: 'med-c',
    language: 'C',
    distractors: ['C++', 'Rust', 'Go'],
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *buffer = (int*)malloc(5 * sizeof(int));
    if (buffer == NULL) return 1;

    for (int i = 0; i < 5; i++) {
        *(buffer + i) = (i + 1) * 10;
        printf("Dir: %p | Valor: %d\\n", (void*)(buffer + i), *(buffer + i));
    }

    free(buffer);
    return 0;
}`,
    hint: 'Usa `#include <stdio.h>`, gestión manual de memoria con `malloc` y `free`, y aritmética de punteros.',
    explanation: 'El legendario lenguaje C maneja punteros directamente, imprime con `printf` y reserva memoria en el heap con `malloc()` y `free()`.'
  },
  {
    id: 'med-bash',
    language: 'Bash / Shell',
    distractors: ['Python', 'Batch', 'Perl'],
    code: `#!/usr/bin/env bash
set -euo pipefail

STAND_NAME="IEEE-DEVCLUB"
echo "=== Desplegando Stand en \${STAND_NAME} ==="

for (( i=1; i<=3; i++ )); do
    if [ ! -d "./logs/\$i" ]; then
        mkdir -p "./logs/\$i"
        chmod +x "./logs/\$i"
    fi
done`,
    hint: 'Comienza con `#!/usr/bin/env bash`, usa condiciones con corchetes `[ ! -d ... ]` y variables `set -euo pipefail`.',
    explanation: 'Bash es el lenguaje de script de terminal por excelencia en entornos Unix/Linux, con su shebang `#!/...` y sintaxis de comandos.'
  },
  {
    id: 'med-html-css',
    language: 'HTML & CSS',
    distractors: ['XML', 'JSX', 'Markdown'],
    code: `<!DOCTYPE html>
<html lang="es">
<head>
  <style>
    .stand-badge {
      display: flex;
      justify-content: center;
      animation: pulseGlow 2s infinite alternate;
    }
  </style>
</head>
<body>
  <main class="stand-badge">
    <h1>¡Bienvenidos al Libro Fest UPEC!</h1>
  </main>
</body>
</html>`,
    hint: 'Etiquetas `<style>`, `<!DOCTYPE html>`, selectores de clase `.stand-badge` y propiedades como `display: flex`.',
    explanation: 'El dúo inseparable de la web: etiquetas de marcado HTML junto con reglas visuales y selectores CSS integrados.'
  },
  {
    id: 'med-lua',
    language: 'Lua',
    distractors: ['Python', 'Ruby', 'JavaScript'],
    code: `local stand = {
    nombre = "DevClub UPEC",
    juegos = {"Logo Quiz", "Code Detective", "Bug Hunter"}
}

function stand.saludar()
    for indice, juego in ipairs(stand.juegos) do
        print("Nivel " .. indice .. ": " .. juego)
    end
end

stand.saludar()`,
    hint: 'Usa `local`, tablas indexadas en 1, iteración con `ipairs`, concatenación con doble punto `..` y cierre con `end`.',
    explanation: 'Lua es ultra liviano, usa la palabra `local`, tablas multipropósito y la función iteradora `ipairs()` con concatenación `..`.'
  },
  {
    id: 'med-javascript',
    language: 'JavaScript',
    distractors: ['TypeScript', 'Python', 'PHP'],
    code: `const standUpec = {
  nombre: 'Rama IEEE & DevClub',
  premios: ['Stickers', 'Camisetas', 'Llaveros'],
  async sortear() {
    const ganador = await fetch('/api/participantes/ganador')
      .then(res => res.json());
    console.log(\`¡Felicidades \${ganador.nombre}!\`);
  }
};`,
    hint: 'Objetos literales, métodos `async`, promesas con `.then()`, `fetch` de navegador y template literals.',
    explanation: 'JavaScript estándar moderno ejecutado en navegadores y Node.js, con `fetch`, funciones flecha y objetos literales dinámicos.'
  }
];
