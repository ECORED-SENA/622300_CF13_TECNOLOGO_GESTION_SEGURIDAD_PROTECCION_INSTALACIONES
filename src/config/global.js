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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
