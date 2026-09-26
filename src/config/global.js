export default {
  global: {
    Name: 'Operación, control y respuesta en servicios de seguridad',
    Description:
      'El componente aborda la operación integral de servicios de seguridad privada, articulando comunicación, semiótica, reportes, gestión documental, recursos humanos, tecnológicos y físicos, programación operativa, procedimientos, funciones, manejo de emergencias, consignas y lineamientos de seguridad. Asimismo, desarrolla control de accesos, evacuación, atención de incidentes, conservación de evidencias, trazabilidad, continuidad operativa y mejora continua, con énfasis en actuación profesional, coordinada y documentada.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Área técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Semiótica o estudio de los signos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de comunicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas y técnicas de comunicación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Sistemas y medios para reporte de información',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Diligenciamiento de formatos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Administración de recursos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normas de archivo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Técnicas de archivo, seguridad y conservación de la información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recursos manuales, tecnológicos y humanos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Recursos tecnológicos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Recursos humanos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Infraestructura',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Programación de actividades para los servicios de seguridad',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Procedimientos y funciones en el servicio',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Funciones del personal',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Funciones según manuales institucionales',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: 'Riesgos de incumplir funciones y procedimientos',
            hash: 't_2_11',
          },
          {
            numero: '2.12',
            titulo:
              'Metodología empleada para la presentación de los resultados',
            hash: 't_2_12',
          },
          {
            numero: '2.13',
            titulo: 'Recursos del plan de seguridad',
            hash: 't_2_13',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alarma',
      significado:
        'señal generada por un sistema, dispositivo o mecanismo de seguridad que advierte sobre una condición anómala, un posible riesgo o un evento que requiere comprobación y respuesta.',
    },
    {
      termino: 'Consigna',
      significado:
        'instrucción operativa que orienta la actuación del personal de seguridad y establece responsabilidades, procedimientos, límites de actuación y condiciones específicas para cada puesto o servicio.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'conjunto de procedimientos y medios destinados a regular, comprobar y autorizar el ingreso y la salida de personas, vehículos, materiales o equipos en una instalación.',
    },
    {
      termino: 'Emergencia',
      significado:
        'situación que altera significativamente el funcionamiento normal de una instalación y puede comprometer la seguridad de las personas, los bienes, la infraestructura o la continuidad operativa.',
    },
    {
      termino: 'Evidencia operativa',
      significado:
        'registro físico o digital asociado con un evento, como fotografías, videos, audios, reportes, minutas o datos generados por sistemas tecnológicos, utilizado para respaldar las actuaciones realizadas.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'conjunto de actividades destinadas a organizar, proteger, conservar, consultar y controlar la información generada durante la prestación del servicio de seguridad.',
    },
    {
      termino: 'Minuta',
      significado:
        'registro cronológico en el que se consignan las novedades, actividades, controles, incidentes y demás hechos relevantes ocurridos durante un turno de servicio.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'seguimiento continuo de señales, alarmas, cámaras, sensores y demás sistemas tecnológicos con el propósito de identificar novedades y apoyar la gestión operativa.',
    },
    {
      termino: 'Protocolo',
      significado:
        'conjunto de instrucciones previamente definidas que establece la forma correcta de actuar ante una situación específica, garantizando uniformidad y trazabilidad en la respuesta.',
    },
    {
      termino: 'Reporte',
      significado:
        'registro verbal, escrito o digital mediante el cual se documentan hechos, decisiones, acciones y resultados relacionados con la operación de seguridad.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que una amenaza afecte personas, bienes, información, instalaciones o procesos, considerando las condiciones de vulnerabilidad existentes.',
    },
    {
      termino: 'Semiótica',
      significado:
        'disciplina que estudia los signos, códigos y mensajes utilizados para transmitir e interpretar información dentro de los procesos de comunicación.',
    },
    {
      termino: 'Sistema de Gestión Central (SGC)',
      significado:
        'plataforma que integra reportes, alarmas, minutas, comunicaciones, evidencias y registros operativos para facilitar su trazabilidad, almacenamiento y consulta.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de reconstruir la secuencia de un evento mediante registros que permiten establecer qué ocurrió, cuándo sucedió, quién intervino y qué acciones se ejecutaron.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'condición o debilidad que puede facilitar la materialización de una amenaza o reducir la capacidad de protección y respuesta del sistema de seguridad.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASIS International. (2005). Estándares y lineamientos para la gestión del riesgo en seguridad.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011a). Manual de gestión de crisis: Lineamientos para la preparación, respuesta y continuidad operativa ante emergencias y crisis.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011b). Manual de operadores de seguridad: Directrices operativas para centrales de monitoreo, verificación y respuesta.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011c). Manual POA investigación: Protección de activos, lineamientos para informes e investigación operativa.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011d). Manual seguridad de la información: Procedimientos para manejo, clasificación y protección de datos en operaciones de seguridad.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2012a). Manual de gestión en seguridad.',
      link: '',
    },
    {
      referencia: 'ASIS International. (2012b). Manual de seguridad física.',
      link: '',
    },
    {
      referencia:
        'Bermúdez. (2012). Manual de procedimiento para el personal de vigilantes de seguridad privada.',
      link: '',
    },
    {
      referencia:
        'Delgado J. & Asociados (DEAS). (s. f.). Manual de la central de monitoreo.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994). Decreto 356 de 1994, por el cual se expide el Estatuto de Vigilancia y Seguridad Privada.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
