// Nivel Fácil: Adivina el Lenguaje / Tecnología por su Logo Oficial (Devicon Official Assets)
// Organizado con progresión de dificultad:
// Tier 1: Ultra conocidos / Básicos (Python, JS, HTML, Java, C++, C#, CSS, PHP)
// Tier 2: Populares y Modernos (TS, Git, Linux, React, Docker, Node, MySQL, Go, Swift, Kotlin, Ruby)
// Tier 3: Intermedios y Sistemas (C, Rust, Dart, Flutter, Vue, PostgreSQL, Bash, MongoDB)
// Tier 4: Viejos, Especializados y Funcionales (Perl, R, Lua, Scala, Haskell, Elixir)

export const easyLogos = [
  // --- TIER 1: Ultra Conocidos / Los más famosos del mundo ---
  {
    id: 'python',
    name: 'Python',
    difficulty: 1,
    logoUrl: '/logos/python.svg',
    category: 'Lenguaje de Programación',
    funFact: 'Nombrado en honor al grupo de comedia Monty Python, no por la serpiente pitón.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    difficulty: 1,
    logoUrl: '/logos/javascript.svg',
    category: 'Lenguaje Web',
    funFact: 'Fue creado en solo 10 días por Brendan Eich en mayo de 1995 para Netscape.'
  },
  {
    id: 'html5',
    name: 'HTML5',
    difficulty: 1,
    logoUrl: '/logos/html5.svg',
    category: 'Estructura Web',
    funFact: 'El estándar de la W3C que estructura cada página y aplicación web del mundo.'
  },
  {
    id: 'java',
    name: 'Java',
    difficulty: 1,
    logoUrl: '/logos/java.svg',
    category: 'Lenguaje Multiplataforma',
    funFact: 'El logo de la taza humeante representa el café de la isla indonesia de Java, bebida favorita de sus creadores.'
  },
  {
    id: 'cpp',
    name: 'C++',
    difficulty: 1,
    logoUrl: '/logos/cpp.svg',
    category: 'Lenguaje de Alto Rendimiento',
    funFact: 'Diseñado por Bjarne Stroustrup en los Laboratorios Bell como una extensión con clases del lenguaje C.'
  },
  {
    id: 'css3',
    name: 'CSS3',
    difficulty: 1,
    logoUrl: '/logos/css3.svg',
    category: 'Estilos Web',
    funFact: 'Hojas de estilo en cascada que dan vida, animaciones, colores y layouts a la web.'
  },
  {
    id: 'csharp',
    name: 'C#',
    difficulty: 1,
    logoUrl: '/logos/csharp.svg',
    category: 'Ecosistema .NET',
    funFact: 'Durante su desarrollo interno en Microsoft su nombre clave era "COOL" (C-like Object Oriented Language).'
  },
  {
    id: 'php',
    name: 'PHP',
    difficulty: 1,
    logoUrl: '/logos/php.svg',
    category: 'Backend Web',
    funFact: 'Originalmente significaba "Personal Home Page Tools", hoy "PHP: Hypertext Preprocessor". Alimenta más del 75% de la web.'
  },

  // --- TIER 2: Populares y Modernos ---
  {
    id: 'typescript',
    name: 'TypeScript',
    difficulty: 2,
    logoUrl: '/logos/typescript.svg',
    category: 'Lenguaje Tipado',
    funFact: 'Superset de JavaScript creado por Microsoft, liderado por el legendario Anders Hejlsberg.'
  },
  {
    id: 'git',
    name: 'Git',
    difficulty: 2,
    logoUrl: '/logos/git.svg',
    category: 'Control de Versiones',
    funFact: 'Linus Torvalds lo programó en solo unas semanas de 2005 para gestionar el código del kernel de Linux.'
  },
  {
    id: 'linux',
    name: 'Linux',
    difficulty: 2,
    logoUrl: '/logos/linux.svg',
    category: 'Sistema Operativo',
    funFact: 'El pingüino Tux es su mascota oficial. Impulsa los 500 supercomputadores más rápidos del mundo.'
  },
  {
    id: 'react',
    name: 'React',
    difficulty: 2,
    logoUrl: '/logos/react.svg',
    category: 'Librería Frontend',
    funFact: 'Creado por Jordan Walke en Meta (Facebook), popularizó el Virtual DOM y componentes declarativos.'
  },
  {
    id: 'docker',
    name: 'Docker',
    difficulty: 2,
    logoUrl: '/logos/docker.svg',
    category: 'Contenedores & DevOps',
    funFact: 'Su mascota "Moby Dock" transporta contenedores estandarizados para que "en mi máquina sí funcione".'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    difficulty: 2,
    logoUrl: '/logos/nodejs.svg',
    category: 'Entorno de Ejecución Backend',
    funFact: 'Llevó JavaScript al servidor aprovechando el motor V8 de Google Chrome con I/O no bloqueante.'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    difficulty: 2,
    logoUrl: '/logos/mysql.svg',
    category: 'Base de Datos Relacional',
    funFact: 'Su logo representa a Sakila el delfín, elegido a través de un concurso entre desarrolladores.'
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    difficulty: 2,
    logoUrl: '/logos/go.svg',
    category: 'Concurrencia en la Nube',
    funFact: 'Diseñado en Google por Rob Pike, Ken Thompson y Robert Griesemer para servidores masivos.'
  },
  {
    id: 'swift',
    name: 'Swift',
    difficulty: 2,
    logoUrl: '/logos/swift.svg',
    category: 'Ecosistema Apple',
    funFact: 'Su logo muestra el ave vencejo (Swift bird), simbolizando velocidad y agilidad extrema.'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    difficulty: 2,
    logoUrl: '/logos/kotlin.svg',
    category: 'Android y Multiplataforma',
    funFact: 'Creado por JetBrains y adoptado por Google como el lenguaje principal oficial para Android.'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    difficulty: 2,
    logoUrl: '/logos/ruby.svg',
    category: 'Lenguaje Dinámico Elegante',
    funFact: 'Creado en Japón por Yukihiro Matsumoto ("Matz"), su logo representa una gema de rubí pulida.'
  },

  // --- TIER 3: Sistemas, Frameworks e Intermedios ---
  {
    id: 'c',
    name: 'C',
    difficulty: 3,
    logoUrl: '/logos/c.svg',
    category: 'Lenguaje de Sistemas',
    funFact: 'Creado por Dennis Ritchie en 1972 en los Laboratorios Bell. Es la base de Unix, Linux y Windows.'
  },
  {
    id: 'rust',
    name: 'Rust',
    difficulty: 3,
    logoUrl: '/logos/rust.svg',
    category: 'Seguridad en Memoria',
    funFact: 'Votado el lenguaje más admirado y amado en la encuesta anual de Stack Overflow durante 8 años consecutivos.'
  },
  {
    id: 'dart',
    name: 'Dart',
    difficulty: 3,
    logoUrl: '/logos/dart.svg',
    category: 'Ecosistema Flutter',
    funFact: 'Lenguaje client-optimized desarrollado por Google para interfaces fluidas a 120 FPS.'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    difficulty: 3,
    logoUrl: '/logos/flutter.svg',
    category: 'Framework UI Multiplataforma',
    funFact: 'Desarrollado por Google para compilar aplicaciones nativas en iOS, Android, Web y Desktop desde un solo código.'
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    difficulty: 3,
    logoUrl: '/logos/vuejs.svg',
    category: 'Framework Frontend',
    funFact: 'Creado por Evan You tras inspirarse en AngularJS pero buscando una solución más ágil y progresiva.'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    difficulty: 3,
    logoUrl: '/logos/postgresql.svg',
    category: 'Base de Datos Relacional',
    funFact: 'Su mascota oficial es Slonik el elefante, simbolizando una memoria prodigiosa para almacenar datos.'
  },
  {
    id: 'bash',
    name: 'Bash',
    difficulty: 3,
    logoUrl: '/logos/bash.svg',
    category: 'Terminal y Shell Scripting',
    funFact: 'Acrónimo de "Bourne Again Shell", juego de palabras con el clásico Unix Bourne Shell de Stephen Bourne.'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    difficulty: 3,
    logoUrl: '/logos/mongodb.svg',
    category: 'Base de Datos NoSQL',
    funFact: 'El nombre proviene de "humongous" (gigantesco), para manejar volúmenes masivos de documentos JSON.'
  },

  // --- TIER 4: Viejos, Especializados y Funcionales ---
  {
    id: 'perl',
    name: 'Perl',
    difficulty: 4,
    logoUrl: '/logos/perl.svg',
    category: 'Lenguaje Histórico de Scripting',
    funFact: 'Creado por Larry Wall en 1987. Famoso por su versatilidad en procesamiento de texto y la web de los 90s.'
  },
  {
    id: 'r',
    name: 'R Language',
    difficulty: 4,
    logoUrl: '/logos/r.svg',
    category: 'Ciencia de Datos y Estadística',
    funFact: 'El estándar de la comunidad científica para computación estadística, bioinformática y análisis de datos.'
  },
  {
    id: 'lua',
    name: 'Lua',
    difficulty: 4,
    logoUrl: '/logos/lua.svg',
    category: 'Lenguaje Ligero y Embebido',
    funFact: 'Creado en la PUC-Rio (Brasil). Significa "Luna" en portugués. Impulsa Roblox y mods de videojuegos.'
  },
  {
    id: 'scala',
    name: 'Scala',
    difficulty: 4,
    logoUrl: '/logos/scala.svg',
    category: 'Lenguaje Funcional y OOP',
    funFact: 'Su nombre fusiona "Scalable Language". Corre sobre la JVM y fue creado por Martin Odersky en la EPFL.'
  },
  {
    id: 'haskell',
    name: 'Haskell',
    difficulty: 4,
    logoUrl: '/logos/haskell.svg',
    category: 'Programación Funcional Pura',
    funFact: 'Nombrado en honor al lógico matemático Haskell Curry. Su logo forma los símbolos lambda λ y >>= (bind).'
  },
  {
    id: 'elixir',
    name: 'Elixir',
    difficulty: 4,
    logoUrl: '/logos/elixir.svg',
    category: 'Concurrencia Distribuida',
    funFact: 'Creado por José Valim sobre la máquina virtual BEAM de Erlang para telecomunicaciones de alta disponibilidad.'
  }
];

// Pool of distractors for multiple choice options
export const allLanguageNames = [
  'Python', 'JavaScript', 'TypeScript', 'C++', 'C#', 'C', 'Java', 'Rust', 'Go (Golang)',
  'Swift', 'Kotlin', 'PHP', 'Ruby', 'Dart', 'HTML5', 'CSS3', 'Docker', 'Git',
  'Linux', 'React', 'PostgreSQL', 'Bash', 'Lua', 'R Language', 'Vue.js', 'Node.js',
  'MySQL', 'MongoDB', 'Scala', 'Haskell', 'Elixir', 'Flutter', 'Perl', 'Assembly',
  'Zig', 'Julia', 'MATLAB', 'Solidity'
];
