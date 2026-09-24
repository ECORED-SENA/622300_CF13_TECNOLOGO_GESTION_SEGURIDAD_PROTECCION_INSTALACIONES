<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Administración de recursos y servicios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 La #[b administración de recursos y servicios de seguridad] integra los procesos de planificación, asignación de recursos, evaluación y mejora continua necesarios para mantener una operación organizada y eficiente. Este ámbito comprende la programación de actividades, la estructuración de recursos tecnológicos y humanos, el diseño de indicadores y la implementación del ciclo #[b PDCA] como herramienta para el mejoramiento del servicio.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Asimismo, la administración incorpora lineamientos relacionados con la #[b conservación y seguridad de la información], la evaluación del desempeño y la presentación de resultados a partir de registros e incidentes. Estos elementos permiten articular los recursos disponibles con las necesidades operativas y facilitan el seguimiento de las condiciones que pueden afectar la continuidad del servicio.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Normas de archivo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El #[b archivo] en los servicios de vigilancia y seguridad privada constituye un eje fundamental para asegurar la trazabilidad de los hechos, la continuidad operativa y la confiabilidad de los registros. Su propósito es permitir que cualquier evento relevante pueda reconstruirse de manera precisa y comprobable, lo que convierte la gestión documental en un componente estratégico del sistema de seguridad.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img2.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 El archivo garantiza la #[b conservación, integridad y custodia de la información operativa]. Por esta razón, su función trasciende el ámbito administrativo y se convierte en una herramienta para el control institucional, el análisis del riesgo, la investigación de incidentes y la toma de decisiones.
          p.mb-0 Como apoyo para ampliar la comprensión de las prácticas relacionadas con el archivo y la gestión documental, se incluye el siguiente recurso audiovisual:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img3.png', alt='' style="width: 300px").m-auto
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gestión documental y archivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia operativa de la documentación
      p La documentación cronológica y completa del servicio constituye un soporte indispensable para gestionar y coordinar la respuesta ante incidentes. Su adecuada organización permite analizar la operación, identificar fallas y generar aprendizaje institucional a partir de los acontecimientos registrados.
      p.mb-5 La documentación no solo certifica la ejecución de un procedimiento, sino que también genera evidencia para respaldar decisiones administrativas, disciplinarias o judiciales. Por esta razón, los registros deben conservar parámetros estrictos de #[b integridad, precisión, disponibilidad y autenticidad]. Entre los principales documentos y soportes del archivo operativo se encuentran los siguientes:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Libro de minuta o libro de servicio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Constituye el registro central del puesto de vigilancia. En él se consignan cronológicamente las novedades del turno, la recepción de consignas, los controles realizados y los sucesos que puedan alterar la prestación del servicio.
            .row(titulo="Correspondencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende los documentos recibidos o entregados durante la operación. Cada movimiento debe quedar registrado con fecha, remitente, destinatario y firma, de manera que se mantenga la trazabilidad y la cadena de custodia.
            .row(titulo="Registros tecnológicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen alarmas, comunicaciones, videos, reportes digitales y demás evidencias producidas por los sistemas electrónicos. Estos soportes deben conservarse con controles equivalentes a los aplicados a la documentación física.
            .row(titulo="Expedientes operativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Integran la documentación asociada con un evento determinado, permitiendo reunir minutas, reportes, comunicaciones y evidencias dentro de una estructura organizada para su consulta posterior.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img4.png", alt="" style="width: 350px").m-auto
      p.mb-5 La adecuada relación entre estos documentos facilita la reconstrucción de los acontecimientos y permite conservar continuidad informativa entre turnos, responsables y áreas de la organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración y manejo de la minuta
      p El #[b libro de minuta o libro de servicio] constituye uno de los documentos más relevantes del archivo operativo por su utilidad probatoria y funcional. En este registro deben consignarse, en orden cronológico, todas las novedades del turno, desde la recepción de consignas hasta los acontecimientos que puedan alterar las condiciones normales del servicio.
      p.mb-5 La elaboración de la minuta exige #[b objetividad, claridad y rigurosidad]. Las anotaciones deben realizarse inmediatamente después del hecho, sin tachones ni apreciaciones subjetivas, e incorporar únicamente información comprobable, como fecha, hora, lugar, personas involucradas, circunstancias y descripción del evento.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img5.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Un registro correctamente diligenciado facilita:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La continuidad entre turnos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La reconstrucción cronológica de los hechos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El seguimiento de novedades. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Las auditorías internas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La evaluación de riesgos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Las investigaciones administrativas o judiciales. 
      p.mb-5 Una vez completado el libro, debe entregarse formalmente al responsable establecido para su archivo durante el periodo definido institucionalmente. Su disposición final solo puede realizarse cuando se cumpla el tiempo de conservación y mediante un procedimiento documentado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Custodia y reserva de la información
      p.mb-5 La información contenida en el archivo puede incluir datos sensibles sobre usuarios, instalaciones, procedimientos, inventarios, controles de acceso y condiciones operativas. Por esta razón, debe mantenerse bajo #[b custodia estricta y acceso restringido]. La confidencialidad comprende, entre otros, los siguientes tipos de información:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img6.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Listas de residentes o usuarios. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img7.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Mapas operativos. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img8.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Inventarios de equipos. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img9.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Consignas del servicio. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img10.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Procedimientos internos. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img11.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Registros de alarmas. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img12.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Información sobre incidentes. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img13.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Evidencias físicas o digitales. 
          p.mb-5 La divulgación no autorizada de esta información puede generar vulnerabilidades y afectar la seguridad de las personas, los bienes y las instalaciones. La reserva debe mantenerse durante todas las fases del archivo, excepto cuando exista un requerimiento formal de autoridad competente.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de correspondencia
      p.mb-5 La #[b correspondencia] forma parte del sistema documental y debe gestionarse con criterios de trazabilidad, custodia y control. Toda pieza recibida o entregada debe quedar registrada con los datos necesarios para establecer su recorrido y responsable. El registro debe incluir, cuando corresponda:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Fecha y hora de recepción o entrega. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img15.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Identificación del remitente. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img16.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Identificación del destinatario. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Responsable de la recepción. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img18.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Firma o constancia de entrega. 
          p.mb-5 La correspondencia no debe entregarse a personas no autorizadas ni permanecer expuesta a manipulación de terceros, pues estas situaciones pueden comprometer la integridad de la información y la cadena de custodia.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación documental
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La información debe organizarse mediante criterios que faciliten su recuperación y análisis. La clasificación puede realizarse según el #[b tipo de evento, fecha, turno, área o naturaleza del incidente], de acuerdo con las características del servicio y los procedimientos institucionales.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img19.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Una clasificación adecuada facilita la consulta de antecedentes, el análisis de tendencias, la evaluación de riesgos y la identificación de patrones operativos que requieran medidas preventivas o correctivas.
          p.mb-0 La protección del archivo constituye, en consecuencia, una forma específica de #[b gestión del riesgo]. La pérdida, alteración, manipulación o divulgación indebida de la información puede afectar la continuidad de la operación y generar responsabilidades disciplinarias, contractuales o legales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img20.png', alt='' style="width: 300px").m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Técnicas de archivo, seguridad y conservación de la información
      p La #[b administración documental] constituye una función crítica dentro de los sistemas de seguridad privada, ya que garantiza la continuidad operativa, la recuperación de la información y la conservación de registros que pueden adquirir valor administrativo, disciplinario o probatorio.
      p.mb-5 Su aplicación requiere procedimientos de clasificación, almacenamiento, protección, consulta, conservación y disposición documental que garanticen el manejo adecuado de los soportes físicos y digitales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios de administración documental
      p.mb-5 Toda documentación operativa debe organizarse y conservarse mediante criterios de orden, clasificación y acceso controlado. Esto implica adoptar prácticas que permitan mantener la información disponible y protegida durante todo su ciclo de vida. Los principales mecanismos se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización física
                  p.mb-0 La documentación impresa debe conservarse en carpetas o unidades documentales organizadas según el tipo de registro, fecha, área o criterio definido institucionalmente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización digital
                  p.mb-0 Los sistemas electrónicos deben mantener estructuras de almacenamiento ordenadas, respaldos periódicos y mecanismos que faciliten la recuperación de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control de versiones
                  p.mb-0 Permite evitar duplicidades, inconsistencias o modificaciones no controladas entre diferentes versiones de un mismo documento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro consecutivo
                  p.mb-0 Los documentos deben incorporar referencias, fechas y horas que permitan establecer su secuencia y relacionarlos con los acontecimientos correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Custodia responsable
                  p.mb-0 La conservación de los documentos debe quedar bajo responsabilidad del supervisor, jefe de seguridad o personal autorizado, según los procedimientos del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La aplicación conjunta de estos principios facilita la consulta y recuperación de la información y disminuye el riesgo de pérdida, duplicidad o alteración documental.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad de la información
      p.mb-5 La #[b información operacional] constituye un activo crítico. Su divulgación, pérdida o manipulación indebida puede comprometer la protección de personas, bienes e instalaciones, por lo que deben establecerse controles físicos y digitales acordes con su nivel de sensibilidad. Las principales medidas de seguridad comprenden:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 300px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Acceso restringido
              p.mb-0.text-center Las minutas, listas, reportes y evidencias deben permanecer disponibles únicamente para el personal autorizado, según sus funciones y responsabilidades.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Protección física
              p.mb-0.text-center Los documentos deben conservarse en archivadores, gabinetes o espacios seguros que impidan el acceso de personas no autorizadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Protección digital
              p.mb-0.text-center Los sistemas deben incorporar contraseñas individuales, niveles diferenciados de acceso y controles que permitan identificar quién consulta, modifica o exporta información.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Entrega y recibo
              p.mb-0.text-center Durante los relevos deben aplicarse procedimientos formales para transferir documentación, evidencias, consignas y demás información relevante del servicio.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Confidencialidad
              p.mb-0.text-center El personal debe abstenerse de divulgar información operativa, personal o empresarial a terceros que no cuenten con autorización para acceder a ella.
      p.mb-5 Estos controles permiten reducir la exposición de información sensible y mantener la responsabilidad sobre su consulta, transferencia y conservación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conservación documental del servicio
      p.mb-5 Los documentos operativos deben conservarse durante el periodo establecido por los procedimientos internos, la naturaleza del servicio y la normatividad aplicable. La permanencia de registros históricos resulta relevante para auditorías, análisis posteriores, investigaciones y procesos legales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Una vez completado un libro de servicio, debe entregarse al responsable de su custodia para que permanezca archivado durante el tiempo correspondiente. Mientras se encuentre bajo conservación, su contenido debe mantenerse reservado y protegido frente a consultas no autorizadas.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img32.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Una práctica inadecuada, como dejar minutas en un archivador sin seguro o sobre una mesa accesible a visitantes, puede exponer información relacionada con:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img33.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Rutinas del personal. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img34.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Fallas de sistemas. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img35.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Incidentes previos. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img36.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Novedades internas. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img37.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Procedimientos y controles del servicio. 
          p.mb-5 Por esta razón, la conservación documental comprende tanto el tiempo durante el cual se mantiene un registro como las condiciones físicas y tecnológicas empleadas para protegerlo.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo práctico de registro documental
      p.mb-5 Cuando durante un recorrido se identifica un #[b objeto sospechoso], el vigilante debe consignar los elementos necesarios para establecer las condiciones del hallazgo y las actuaciones desarrolladas.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img38.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p El registro debe incluir:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Hora. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Lugar. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Características del objeto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Autoridades notificadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acciones adoptadas.
      p.mb-5 La información registrada puede convertirse posteriormente en evidencia dentro de una investigación, razón por la cual debe conservarse con objetividad, precisión y trazabilidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Custodia, confidencialidad y reserva
      p.mb-5 El personal de seguridad tiene la obligación de mantener la #[b reserva de la información] a la que accede durante la prestación del servicio. Esta obligación comprende información operativa, personal y empresarial. 
      .caja-3.color-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Para garantizar su cumplimiento, deben aplicarse las siguientes prácticas: 
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No divulgar datos de usuarios o clientes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No comunicar procedimientos internos fuera del ámbito autorizado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No captar fotografías de las instalaciones sin autorización. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Proteger físicamente los documentos sensibles. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Limitar la consulta de registros a las personas autorizadas. 
            p.mb-0 La minuta, por ejemplo, debe permanecer en un lugar seguro dentro del puesto de vigilancia y fuera del alcance de visitantes, usuarios o terceros no autorizados.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img39.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios de conservación
      p.mb-5  La conservación documental debe responder a cuatro criterios fundamentales que protegen el valor y la utilidad de los registros durante todo su ciclo de vida:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t2/img40.png', alt='' style="max-width: 300px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img41.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Integridad
              p.mb-0.text-center La información debe permanecer completa y protegida frente a modificaciones, eliminaciones o alteraciones no autorizadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img42.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Autenticidad
              p.mb-0.text-center Debe ser posible establecer el origen del documento, su autor o responsable y las condiciones en las que fue generado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img43.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Disponibilidad
              p.mb-0.text-center El registro debe poder recuperarse y consultarse cuando sea requerido para una auditoría, investigación o necesidad operativa.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img44.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Confidencialidad
              p.mb-0.text-center La consulta de la información debe limitarse al personal autorizado, de acuerdo con los niveles de acceso establecidos.
      p.mb-5 Estos criterios son aplicables tanto a los documentos físicos como a los registros digitales y permiten conservar su utilidad administrativa y probatoria.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conservación de evidencia asociada con incidentes
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img45.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Cuando se presenta un incidente relevante, los diferentes soportes relacionados deben reunirse dentro de un expediente físico o digital que mantenga controles de acceso. En un caso de intrusión, por ejemplo, pueden conservarse los siguientes elementos:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Grabación de CCTV. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reporte de alarma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Minuta del operador. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comunicaciones radiales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fotografías. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Informe del supervisor. 
            p.mb-0 La integración de estos registros permite reconstruir la secuencia del incidente y relacionar la información generada por el personal con los datos producidos por los sistemas tecnológicos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medidas de seguridad para la información digital
      p La información gestionada en centros de control requiere medidas específicas que permitan proteger los registros digitales, controlar el acceso y mantener la trazabilidad de las acciones realizadas sobre los archivos.
      p.mb-5 Las principales medidas se organizan a continuación:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Contraseñas individuales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada usuario debe emplear credenciales propias, evitando cuentas compartidas que dificulten establecer responsabilidades sobre las acciones realizadas.
            .row(titulo="Niveles de acceso diferenciados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los permisos deben asignarse de acuerdo con las funciones del cargo, limitando la consulta, modificación o exportación de información sensible.
            .row(titulo="Bloqueo automático de sesión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los sistemas deben reducir el riesgo de accesos no autorizados cuando una estación de trabajo permanece temporalmente desatendida.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img46.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img47.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Almacenamiento seguro y redundante").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información debe contar con medios de respaldo que permitan recuperarla en caso de fallas, pérdida de datos o indisponibilidad del sistema principal.
            .row(titulo="Áreas restringidas para evidencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los espacios físicos destinados al almacenamiento de soportes críticos deben contar con controles que limiten el ingreso a personal autorizado.
            .row(titulo="Registro de accesos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los sistemas físicos y digitales deben conservar información que permita establecer quién accedió a los documentos o evidencias y en qué momento.
      p.mb-5 Estas medidas complementan los controles documentales y fortalecen la protección integral de la información operativa.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Trazabilidad en sistemas de monitoreo
      p.mb-5 Los sistemas de monitoreo deben conservar información sobre las acciones realizadas por los usuarios cuando estas involucren documentos, grabaciones o evidencias. Por ejemplo, cuando se exporta un archivo de video, el sistema debe registrar:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img48.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Quién realizó la exportación. 
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img49.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La fecha y hora de la acción. 
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img50.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La dependencia o finalidad asociada con la solicitud. 
      p.mb-5 La evidencia debe almacenarse en carpetas o repositorios con permisos definidos para el personal responsable de coordinación, supervisión u otras áreas autorizadas. Este control facilita establecer responsabilidades y mantener la cadena documental.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control documental y retención
      p.mb-5 El #[b control documental y la retención] permiten establecer durante cuánto tiempo deben conservarse los registros según su relevancia operativa, administrativa o legal. Los periodos deben responder a criterios de continuidad del servicio, auditoría interna y necesidades derivadas de investigaciones. Los tiempos sugeridos según el tipo de registro son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alarmas sin incidencia
                  p.mb-0 Pueden conservarse entre #[b 30 y 90 días], de acuerdo con los procedimientos internos y las necesidades de seguimiento del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img51.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incidentes relevantes
                  p.mb-0 Pueden requerir periodos de conservación de #[b 1 a 2 años], dependiendo de su importancia y de las actuaciones administrativas asociadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img52.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evidencia con implicaciones legales
                  p.mb-0 Debe conservarse hasta el cierre definitivo de la investigación o del procedimiento correspondiente, manteniendo los controles de custodia y acceso durante todo el periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img53.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estos periodos deben articularse con las disposiciones internas y normativas aplicables. La retención documental no consiste únicamente en conservar información durante un plazo determinado, sino en mantenerla #[b íntegra, accesible, protegida y organizada] mientras conserve valor para el servicio.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Recursos manuales, tecnológicos y humanos
      p Los #[b recursos del servicio de seguridad] conforman la base que permite desarrollar la operación de manera organizada, estandarizada y continua. Estos recursos comprenden los documentos que orientan la actuación del personal, los medios tecnológicos utilizados para detectar y gestionar eventos, el talento humano encargado de ejecutar los procedimientos y la infraestructura física que soporta las actividades del servicio.
      p.mb-5 La integración adecuada de estos elementos permite fortalecer la #[b trazabilidad, eficiencia operativa, capacidad de respuesta y continuidad del servicio]. Cada recurso cumple una función específica, pero su efectividad depende de la articulación con los demás componentes del sistema de seguridad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manuales operativos
      p.mb-5 Toda organización debe disponer de #[b procedimientos escritos, instructivos actualizados, protocolos y manuales] que orienten las funciones del personal y estandaricen los procesos. Estos documentos constituyen una referencia permanente para ejecutar las actividades del servicio con criterios uniformes y reducir la improvisación.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img54.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Entre los principales documentos operativos se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manual de operadores. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manual de la central de monitoreo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manual de procedimientos para vigilantes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Protocolos internos del servicio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Instructivos de equipos y sistemas tecnológicos.
      p.mb-5 Estos documentos deben permanecer #[b accesibles, actualizados, vigentes y disponibles para el personal responsable de su aplicación.] Su contenido establece las condiciones bajo las cuales deben desarrollarse las diferentes actividades operativas. Los aspectos fundamentales que integran los manuales se organizan de la siguiente manera:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Objetivos del servicio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definen los propósitos que orientan la operación y permiten relacionar las actividades asignadas con las necesidades de protección de personas, bienes e instalaciones.
            .row(titulo="Procedimientos operativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establecen las acciones que deben ejecutarse de manera ordenada ante situaciones rutinarias, novedades, alarmas, incidentes o emergencias.
            .row(titulo="Funciones y responsabilidades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinan las actividades correspondientes a cada cargo y delimitan las responsabilidades del personal durante la prestación del servicio.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img55.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img56.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Normas de conducta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Precisan los comportamientos esperados del personal y los criterios éticos y profesionales que deben mantenerse durante la operación.
            .row(titulo="Canales de comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definen los medios autorizados para transmitir novedades, instrucciones, alertas y demás información relacionada con el funcionamiento del servicio.
            .row(titulo="Recursos disponibles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifican los elementos tecnológicos, documentales, físicos y operativos asignados al puesto para cumplir las actividades establecidas.
      p.mb-5 La estandarización mediante manuales facilita que las actuaciones se desarrollen bajo criterios comunes y permite mantener continuidad entre turnos, cargos y niveles de responsabilidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de procedimiento estandarizado
      .caja-3(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Un procedimiento para atender una alarma residencial debe establecer una secuencia clara que permita pasar desde la recepción de la señal hasta el registro final del evento. La actuación puede desarrollarse mediante los siguientes pasos:
            ol.lista-ol--cuadro.mb-3
              li
                .lista-ol--cuadro__vineta
                  span a
                | 
                p.mb-0 Identificar el tipo de señal recibida. 
              li 
                .lista-ol--cuadro__vineta
                  span b
                | 
                p.mb-0 Revisar la cámara asignada al evento. 
              li 
                .lista-ol--cuadro__vineta
                  span c
                | 
                p.mb-0 Confirmar la novedad con la unidad de campo. 
              li 
                .lista-ol--cuadro__vineta
                  span d
                | 
                p.mb-0 Contactar a las autoridades cuando corresponda. 
              li 
                .lista-ol--cuadro__vineta
                  span e
                | 
                p.mb-0 Registrar el evento en la minuta y en el Sistema de Gestión Central (SGC). 
            p.mb-0 Esta secuencia disminuye la improvisación y permite que la respuesta mantenga #[b coherencia, trazabilidad y uniformidad operativa].
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img57.jpg', alt='' style="width: 600px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Recursos tecnológicos
      p.mb-5 Los #[b recursos tecnológicos] permiten detectar, interpretar, registrar y comunicar acontecimientos asociados con la operación de seguridad. Estos medios complementan la capacidad del personal y facilitan la gestión de señales, la supervisión de áreas, el control de accesos y el almacenamiento de información. Los principales equipos y sistemas utilizados en seguridad privada incluyen:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sensores magnéticos, PIR y sísmicos
                  p.mb-0 Permiten identificar cambios o condiciones específicas relacionadas con aperturas, movimientos o vibraciones que puedan representar una novedad para el sistema de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img58.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Paneles de alarma
                  p.mb-0 Reciben y procesan señales provenientes de los dispositivos instalados, permitiendo establecer el origen y la naturaleza inicial de una alerta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img59.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámaras CCTV análogas o IP
                  p.mb-0 Facilitan el seguimiento de áreas y puntos críticos, y permiten relacionar eventos registrados por otros sistemas con información captada mediante video.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img60.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Software] de monitoreo
                  p.mb-0 Centraliza señales, alarmas y registros operativos, permitiendo al operador gestionar eventos y mantener información asociada con las acciones ejecutadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img61.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de control de acceso
                  p.mb-0 Permiten gestionar el ingreso y la salida de personas, vehículos o elementos mediante mecanismos de identificación y autorización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img62.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Equipos de comunicación VHF/UHF
                  p.mb-0 Facilitan el intercambio de información entre vigilantes, operadores, supervisores y demás responsables durante la prestación del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img63.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Botones de pánico
                  p.mb-0 Permiten generar una señal prioritaria ante una situación que requiera una respuesta inmediata o la activación de protocolos específicos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img64.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Servidores, #[i routers] y equipos de cómputo
                  p.mb-0 Soportan la operación de los sistemas digitales, el procesamiento de información y la comunicación entre los diferentes dispositivos de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img65.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de respaldo y almacenamiento seguro
                  p.mb-0 Permiten conservar la información generada por la operación y mantenerla disponible frente a fallas o pérdida de los sistemas principales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img66.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La tecnología fortalece la capacidad del sistema de seguridad, pero su efectividad depende del conocimiento y la preparación del personal encargado de operarla.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Competencias para el manejo de recursos tecnológicos
      p.mb-5 El vigilante y el operador deben contar con conocimientos que les permitan utilizar los equipos de manera adecuada y reconocer condiciones que puedan afectar su funcionamiento. Entre las principales competencias se encuentran:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img67.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Programación básica y reconocimiento de fallas. 
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img68.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Interpretación de señales. 
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img69.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Verificación mediante CCTV. 
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img70.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Registro adecuado de novedades en la minuta y el SGC. 
          p.mb-5 Estas competencias permiten integrar la información generada por los dispositivos con los procedimientos operativos establecidos.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de aplicación tecnológica
      p Un #[b panel de alarma Honeywell conectado a cámaras IP] puede generar una señal de intrusión y asociarla automáticamente con la cámara correspondiente. El software de monitoreo presenta al operador la información vinculada con el evento, permitiéndole determinar si corresponde a un ingreso real, una falsa alarma o una condición derivada de la configuración del sistema.
      p.mb-0  Este tipo de integración permite relacionar #[b detección, análisis, respuesta y registro], disminuyendo los tiempos necesarios para gestionar una señal.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Recursos humanos
      p.mb-5 Los #[b recursos humanos] constituyen un componente determinante del sistema de seguridad, debido a que las decisiones, procedimientos y tecnologías dependen de la actuación del personal encargado de operarlos. La selección, confiabilidad, formación y experiencia influyen directamente en la calidad del servicio y en la capacidad para responder ante novedades o incidentes. La gestión del talento humano debe considerar tres pilares fundamentales:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Selección adecuada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende los mecanismos utilizados para determinar la idoneidad del personal antes de su vinculación. Puede incluir revisión de antecedentes, entrevistas, pruebas psicotécnicas, exámenes médicos y otros controles permitidos por la normativa y las condiciones contractuales.
            .row(titulo="Perfil del cargo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define las funciones, límites de autoridad, competencias, responsabilidades documentales y protocolos de comunicación correspondientes a cada puesto dentro del sistema de seguridad.
            .row(titulo="Experiencia y entrenamiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende la preparación necesaria para operar sistemas tecnológicos, aplicar protocolos de emergencia, identificar comportamientos anómalos, cumplir consignas internas y desarrollar comunicaciones operativas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img71.png", alt="" style="width: 300px").m-auto
      p.mb-5 La adecuada relación entre estos tres pilares permite asignar responsabilidades de acuerdo con las capacidades requeridas y facilita el cumplimiento de los procedimientos institucionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Selección adecuada
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La selección del personal debe orientarse a establecer condiciones de #[b idoneidad, confiabilidad y aptitud] para desarrollar las actividades asignadas. Según las características del cargo y las disposiciones aplicables, el proceso puede incorporar:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificación de antecedentes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Entrevistas y pruebas psicotécnicas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Exámenes médicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Polígrafo, cuando la normativa y las condiciones contractuales lo permitan. 
            p.mb-0 Estos mecanismos deben articularse con los requisitos definidos para cada puesto y con las responsabilidades que tendrá la persona durante la prestación del servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img72.jpg', alt='' style="width: 600px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Perfil del cargo
      p.mb-5 Cada cargo debe contar con un perfil claramente definido para establecer el alcance de su actuación y evitar vacíos o duplicidades de responsabilidad.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img73.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p El perfil debe incluir:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Funciones y límites de autoridad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Competencias requeridas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Responsabilidades documentales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Protocolos de comunicación y reporte.
            p.mb-0 La definición del perfil permite relacionar las capacidades del personal con las actividades que debe desarrollar dentro del sistema de seguridad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Experiencia y entrenamiento
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La experiencia debe complementarse mediante procesos de entrenamiento orientados a las condiciones reales de la operación. El personal debe desarrollar capacidades para:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejar sistemas tecnológicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicar protocolos de emergencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Identificar comportamientos anómalos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cumplir consignas internas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicar técnicas de comunicación operativa. 
            p.mb-0 La formación continua permite mantener actualizados los conocimientos y fortalecer la respuesta ante situaciones que exijan criterios técnicos y actuación inmediata.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img74.jpg', alt='' style="width: 600px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      p Un operador capacitado en #[b análisis de video] puede identificar comportamientos sospechosos, relacionarlos con otros registros del sistema y activar los protocolos correspondientes. Su formación le permite interpretar la información y tomar decisiones de acuerdo con los procedimientos establecidos.
      p.mb-0 En contraste, un operador que no cuenta con el entrenamiento necesario puede omitir señales relevantes o interpretar de manera incorrecta un evento, lo cual puede afectar la integridad y efectividad del sistema de seguridad.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Infraestructura
      p.mb-5 La #[b infraestructura física] proporciona las condiciones necesarias para desarrollar las actividades de seguridad y soportar los recursos humanos, tecnológicos y documentales. Su diseño y mantenimiento deben contribuir a la continuidad operativa, la protección de la información y el adecuado desempeño del personal.
      .caja-4(data-aos="zoom-in").mb-5
        .row.justify-content-center.align-items-center
          .col-xl-6.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Ejemplo infraestructura
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/t2/img75.png', alt='Ilustración de una infraestructura tecnológica con sala de monitoreo, puestos de control, cuartos de servidores, archivos seguros, escritorios ergonómicos, iluminación, señalización de seguridad, equipos de emergencia y accesos restringidos. ').m-auto
          .col-xl-6
            p Los principales componentes de infraestructura incluyen:
            ol.lista-ol--cuadro.mb-3
              li
                .lista-ol--cuadro__vineta
                  span A
                | 
                p.mb-0 Sala de monitoreo. 
              li 
                .lista-ol--cuadro__vineta
                  span B
                | 
                p.mb-0 Puestos de control. 
              li 
                .lista-ol--cuadro__vineta
                  span C
                | 
                p.mb-0 Cuartos de servidores. 
              li 
                .lista-ol--cuadro__vineta
                  span D
                | 
                p.mb-0 Archivos seguros con llave. 
              li 
                .lista-ol--cuadro__vineta
                  span E
                | 
                p.mb-0 Escritorios ergonómicos. 
              li 
                .lista-ol--cuadro__vineta
                  span F
                | 
                p.mb-0 Iluminación adecuada. 
              li 
                .lista-ol--cuadro__vineta
                  span G
                | 
                p.mb-0 Señalización de seguridad. 
              li 
                .lista-ol--cuadro__vineta
                  span H
                | 
                p.mb-0 Equipos de emergencia, como extintores y botiquines. 
            p.mb-0 Accesos con restricciones.
      p.mb-5 Estos elementos deben mantenerse en condiciones que permitan ejecutar las actividades asignadas sin generar riesgos adicionales para el personal o para la información gestionada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones que debe garantizar la infraestructura
      p.mb-5 La infraestructura debe responder a diferentes necesidades de la operación. Sus principales condiciones se presentan a continuación:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img76.png', alt="" ).m-auto
                  h4.text-center Comodidad
                  .caja-6_p
                    p.mb-0.text-center Los espacios y elementos de trabajo deben permitir que el personal desarrolle sus actividades en condiciones adecuadas durante la jornada asignada.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img77.png', alt="" ).m-auto
                  h4.text-center Continuidad operativa
                  .caja-6_p
                    p.mb-0.text-center Las instalaciones deben disponer de condiciones que permitan mantener el servicio y soportar los recursos necesarios para atender las actividades programadas.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img78.png', alt="" ).m-auto
                  h4.text-center Seguridad documental
                  .caja-6_p
                    p.mb-0.text-center Los archivos, documentos y demás registros deben almacenarse en espacios que reduzcan el riesgo de pérdida, manipulación o acceso no autorizado.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img79.png', alt="" ).m-auto
                  h4.text-center Control del entorno
                  .caja-6_p
                    p.mb-0.text-center Los puestos y áreas críticas deben mantener condiciones de iluminación, acceso, organización y protección acordes con las necesidades del servicio.
          p.mb-5 La infraestructura no constituye únicamente un soporte físico. Su estado influye directamente en la capacidad del personal para cumplir sus funciones y en la protección de los recursos asignados.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      p.mb-5 Un puesto de vigilancia con #[b iluminación insuficiente, mobiliario deteriorado y un archivador sin mecanismos de seguridad] puede generar diferentes afectaciones para la operación:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img80.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Afecta el rendimiento del vigilante. 
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img81.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Compromete la custodia documental. 
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img82.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Expone información operativa sensible. 
      p.mb-0 Este ejemplo evidencia que las condiciones físicas del puesto forman parte integral del sistema de seguridad y deben gestionarse con los mismos criterios de prevención y control aplicados a los demás recursos.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Programación de actividades para los servicios de seguridad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 La #[b programación de actividades en los servicios de seguridad] es un proceso sistemático que traduce el análisis del riesgo y las condiciones operativas en una distribución precisa de tareas, horarios y responsabilidades. Esta programación permite establecer #[b qué actividades deben realizarse, cuándo deben ejecutarse, quién es responsable de desarrollarlas y cómo deben documentarse], reduciendo la improvisación y las posibles brechas de seguridad.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img83.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Dentro de la programación se incluyen actividades como rondas, verificaciones de equipos, controles de acceso, relevos, supervisiones y registros operativos. Su planificación debe relacionarse con las condiciones particulares de cada servicio y con los recursos humanos, tecnológicos y documentales disponibles. 
      p.mb-5 Los elementos fundamentales de la programación se organizan de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Actividades")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img84.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Actividades
              p.mb-0 Comprenden las rondas, verificaciones de equipos, controles de acceso, supervisiones y demás tareas necesarias para mantener las condiciones de seguridad establecidas.
        .py-3.py-md-4(titulo="Horarios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img85.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Horarios
              p.mb-0 Determinan cuándo deben ejecutarse las actividades, considerando franjas críticas, periodos de mayor afluencia y momentos en los que pueden incrementarse las condiciones de vulnerabilidad.
        .py-3.py-md-4(titulo="Responsables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img86.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsables
              p.mb-0 Establecen qué integrante del servicio debe desarrollar cada actividad, de acuerdo con las funciones asignadas al operador, vigilante, supervisor u otro responsable.
        .py-3.py-md-4(titulo="Documentación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img87.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Documentación
              p.mb-0 Define los medios mediante los cuales deben registrarse las actividades ejecutadas, como minutas, formatos físicos o el Sistema de Gestión Central (SGC).
      p.mb-5 Esta estructura permite relacionar la planificación con la ejecución y facilita posteriormente el seguimiento del cumplimiento de las actividades programadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Programación orientada por el riesgo
      p.mb-5 A continuación, se presenta la importancia de la programación orientada por el riesgo, una estrategia que permite organizar los recursos, las rondas y las actividades de seguridad de acuerdo con las necesidades y vulnerabilidades identificadas en cada sitio.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-7(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img88.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Programación de la seguridad basada en el riesgo"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img89.jpg" style="max-width: 510px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relevos y entregas de turno
      p.mb-5 La correcta implementación de los #[b relevos y entregas de turno] constituye un elemento esencial para mantener la continuidad operativa. El personal entrante debe recibir información suficiente sobre el estado del servicio antes de asumir sus responsabilidades.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img90.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p El relevo debe incluir:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Novedades registradas durante el turno. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado técnico de los sistemas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Consignas vigentes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incidentes o situaciones en desarrollo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fallas pendientes de atención. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Información relevante para la continuidad del servicio.
      p.mb-5 La ausencia de un proceso formal de entrega y recepción puede generar vacíos de información, falsas alarmas, duplicidad de actuaciones o respuestas inadecuadas. Por esta razón, la programación debe reservar tiempos específicos para el relevo y contemplar la actualización inmediata de la #[b minuta y del SGC].
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura de la jornada operativa
      .caja-3.color-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La jornada debe estructurarse mediante procedimientos que establezcan las actividades correspondientes a cada turno. Esta organización facilita la distribución de responsabilidades y permite efectuar seguimiento sobre su cumplimiento. Entre las actividades habituales se encuentran:
            ol.lista-ol--cuadro.mb-3
              li
                .lista-ol--cuadro__vineta
                  span A
                | 
                p.mb-0 Realizar la presentación previa al inicio del turno. 
              li 
                .lista-ol--cuadro__vineta
                  span B
                | 
                p.mb-0 Verificar los equipos y elementos asignados. 
              li 
                .lista-ol--cuadro__vineta
                  span C
                | 
                p.mb-0 Ejecutar las rondas conforme con la periodicidad establecida. 
              li 
                .lista-ol--cuadro__vineta
                  span D
                | 
                p.mb-0 Desarrollar los controles de acceso definidos. 
              li 
                .lista-ol--cuadro__vineta
                  span E
                | 
                p.mb-0 Registrar los eventos y novedades del servicio. 
              li 
                .lista-ol--cuadro__vineta
                  span F
                | 
                p.mb-0 Preparar la entrega del turno y actualizar la información correspondiente. 
            p.mb-0 La secuencia organizada de estas actividades reduce la improvisación y facilita las auditorías operativas, debido a que permite comparar lo programado con lo efectivamente ejecutado.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img91.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actualización de la programación
      p.mb-5 La programación operativa debe mantenerse dinámica y ajustarse cuando cambien las condiciones del entorno. Variaciones en los riesgos, modificaciones de infraestructura, incorporación de tecnologías o cambios en la disponibilidad del personal pueden requerir una redistribución de actividades y recursos. 
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img92.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Entre las situaciones que pueden justificar una actualización se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cambios en las condiciones de seguridad del entorno. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Obras dentro o alrededor de las instalaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Modificaciones en la cantidad de personal disponible. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incorporación de nuevos sistemas tecnológicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incidentes relevantes ocurridos durante la operación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Nuevas vulnerabilidades identificadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cambios en los horarios o actividades del cliente. 
            p.mb-0 Las revisiones periódicas permiten modificar frecuencias, rutas de ronda y puntos de supervisión, manteniendo correspondencia entre los recursos disponibles y las necesidades reales del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Indicadores para el seguimiento de la programación
      p.mb-5 La planificación operativa se complementa mediante #[b indicadores y mecanismos de control] que permiten establecer el nivel de cumplimiento de las actividades programadas y detectar necesidades de ajuste. Los principales indicadores pueden organizarse de la siguiente manera:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Cumplimiento de rondas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite determinar el porcentaje de recorridos ejecutados frente a los programados durante un periodo determinado.
            .row(titulo="Tiempos de respuesta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten establecer cuánto tiempo transcurre entre la generación o recepción de un evento y la actuación correspondiente del servicio.
            .row(titulo="Cobertura horaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si los puestos, zonas o actividades cuentan con la presencia o atención prevista durante las franjas definidas.
            .row(titulo="Registro de incidencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita identificar la cantidad, frecuencia y características de las novedades registradas durante la ejecución de la programación.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img93.png", alt="" style="width: 350px").m-auto
      p.mb-0 El análisis de estos indicadores facilita la toma de decisiones relacionadas con reasignación de recursos, cambios de turnos, ajustes de recorridos y fortalecimiento de controles, cerrando el ciclo de 3[b planificación, ejecución, seguimiento y mejora continua].
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Procedimientos y funciones en el servicio
      p Los #[b procedimientos y funciones] constituyen la base que regula la actuación del personal durante la prestación del servicio de seguridad. Su adecuada definición permite mantener uniformidad, coherencia operativa y capacidad de respuesta ante situaciones rutinarias, incidentes o emergencias.
      p.mb-5 Estos lineamientos deben articularse con la normativa colombiana aplicable al sector, incluido el #[b Decreto 356 de 1994], así como con los manuales, protocolos y procedimientos definidos por cada organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimientos operativos
      p.mb-5 Los #[b procedimientos operativos] son secuencias estandarizadas de actuación diseñadas para que las tareas críticas se ejecuten de manera uniforme, reproducible y susceptible de seguimiento. Su finalidad es reducir la improvisación y garantizar que el personal conozca qué debe hacer frente a cada situación.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img94.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Entre los principales procedimientos operativos se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Atención, verificación y cierre de alarmas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Actuación ante intrusiones, anomalías o comportamientos sospechosos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Supervisión y control de accesos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro y consignación de novedades en minutas y sistemas digitales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comunicación con autoridades externas y ejecución de la cadena de llamadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisión y operación de paneles, CCTV, sensores y equipos de radio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Apertura y cierre de instalaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo, documentación y reporte de incidentes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Coordinación de actuaciones durante emergencias. 
            p.mb-0 Estos procedimientos deben permanecer documentados, actualizados y disponibles para el personal responsable de aplicarlos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Componentes de un procedimiento
      p.mb-5Cada procedimiento debe contener información suficiente para orientar al personal desde el inicio de la actuación hasta su cierre y registro. Los componentes principales se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t2/img95.png', alt='' style="max-width: 300px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img96.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Objetivo
              p.mb-0.text-center Precisa la finalidad del procedimiento, como detectar, controlar, verificar o mitigar una situación determinada.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img97.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Responsable
              p.mb-0.text-center Establece qué cargo debe ejecutar o coordinar el procedimiento, como operador, supervisor o jefe de seguridad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img98.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Secuencia de actuación
              p.mb-0.text-center Define los pasos cronológicos que deben seguirse para desarrollar la actividad de forma ordenada y susceptible de comprobación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img99.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Condiciones especiales
              p.mb-0.text-center Incluye excepciones, puntos críticos o circunstancias que pueden exigir una actuación diferenciada.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img100.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Documentos asociados
              p.mb-0.text-center Identifica los soportes que deben diligenciarse, como minutas, formatos, registros de sistema o informes operativos.
      p.mb-0 El personal debe actuar conforme con los procedimientos definidos. La improvisación puede generar incoherencias, pérdida de trazabilidad y riesgos para las personas, las instalaciones y la operación.
      Separador
      #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.9 Funciones del personal
      p.mb-5 Los manuales operativos deben definir con claridad las #[b funciones correspondientes a cada cargo], evitando vacíos de responsabilidad o duplicidad de actuaciones. La asignación precisa de funciones permite establecer qué actividades corresponde ejecutar, supervisar, registrar o coordinar durante la operación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones del operador
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img101.jpg', alt='' style="width: 600px").m-auto
          .col-xl.caja-1_p
            p El #[b operador] cumple funciones relacionadas con el seguimiento de sistemas, la gestión de señales, el registro de novedades y la activación de protocolos. Entre sus principales responsabilidades se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ejecutar rondas y verificaciones programadas cuando correspondan a su cargo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Monitorear sistemas electrónicos, como alarmas, CCTV y sensores. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Controlar accesos y verificar identidades cuando corresponda. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar todas las novedades en la minuta y en los sistemas tecnológicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Activar protocolos de respuesta cuando la situación lo requiera. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener una comunicación clara y oportuna. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resguardar la evidencia y garantizar la integridad de la información. 
            p.mb-0 Además de las competencias técnicas, el operador debe mantener #[b puntualidad, comunicación efectiva, redacción objetiva y presentación personal adecuada], de acuerdo con las exigencias del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones del supervisor
      p.mb-5 El #[b supervisor] realiza actividades de seguimiento, coordinación y control sobre la ejecución del servicio. Su intervención permite identificar desviaciones y garantizar que los procedimientos se apliquen de acuerdo con los lineamientos establecidos.
      .caja-3.color-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Entre sus principales funciones se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificar la correcta ejecución de los procedimientos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Retroalimentar técnicamente al personal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Coordinar incidentes y controlar la respuesta operativa. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar minutas, reportes, inventarios y registros del turno. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evaluar fallas y asignar acciones correctivas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reportar desviaciones identificadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garantizar la continuidad durante los relevos.
            p.mb-0 Estas funciones permiten al supervisor actuar como enlace entre el personal operativo y los niveles de coordinación o dirección del servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img102.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones del jefe de seguridad
      p.mb-5 El #[b jefe de seguridad] desarrolla funciones de dirección, planificación y coordinación general. Su responsabilidad se concentra en mantener articulados los procedimientos operativos con las necesidades de protección y los requerimientos del cliente.
      .caja-1.color-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img103.jpg', alt='' style="width: 600px").m-auto
          .col-xl.caja-1_p
            p Entre sus funciones se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Administrar el plan de seguridad del cliente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Analizar incidentes e identificar tendencias. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener relación directa con el cliente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Supervisar la operación general del servicio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Actualizar consignas, protocolos y procedimientos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Coordinar actuaciones con autoridades y entes reguladores.
            p.mb-0 La actuación del jefe de seguridad permite relacionar los resultados operativos con las decisiones de administración, prevención y mejora del servicio.
      Separador
      #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.10 Funciones según manuales institucionales
      p.mb-5 Las funciones del personal también deben ajustarse a los #[b manuales institucionales y a la normativa colombiana aplicable], incluido el Decreto 356 de 1994. Estos lineamientos complementan las responsabilidades definidas en los procedimientos internos y orientan el comportamiento esperado durante la prestación del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones principales del vigilante
      p.mb-5 El #[b vigilante] desarrolla actividades directamente relacionadas con la protección de personas, bienes e instalaciones, así como con el control y reporte de novedades.
      .caja-3.color-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Entre sus funciones principales se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener el orden en el puesto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Identificar, detectar y reportar situaciones sospechosas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Custodiar bienes, instalaciones y personas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Controlar accesos y salidas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar todas las novedades en la minuta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Apoyar a las autoridades cuando corresponda. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cumplir las consignas específicas del puesto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener una conducta ética y profesional.
            p.mb-0 El cumplimiento de estas funciones debe desarrollarse dentro de los límites establecidos para el cargo y de acuerdo con los procedimientos definidos para cada servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img104.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Deberes éticos
      p.mb-5 El personal debe desarrollar sus funciones bajo criterios de #[b confidencialidad, respeto, imparcialidad y prudencia]. La conducta ética constituye un componente esencial para preservar la confianza y proteger la información asociada con la operación.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img105.jpg', alt='' style="width: 600px").m-auto
          .col-xl.caja-1_p
            p Los principales deberes éticos comprenden:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Guardar secreto profesional. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No divulgar información operativa. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener respeto, imparcialidad y prudencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Proteger documentos, evidencias y elementos de seguridad. 
      p.mb-0 Estos deberes complementan las responsabilidades técnicas del cargo y deben mantenerse durante toda la prestación del servicio.
      Separador
      #t_2_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.11 Riesgos de incumplir funciones y procedimientos
      p.mb-5 El incumplimiento de las funciones asignadas o de los procedimientos establecidos puede afectar directamente la capacidad de respuesta y la continuidad del servicio. Una actuación que se aparta de los lineamientos puede generar consecuencias operativas, administrativas, disciplinarias o legales. Los principales riesgos asociados se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pérdida de trazabilidad
                  p.mb-0 La ausencia de registros o el incumplimiento de los procedimientos dificulta reconstruir los hechos y establecer las actuaciones realizadas durante un incidente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img106.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta ineficiente
                  p.mb-0 Una actuación tardía, incompleta o diferente de la establecida puede disminuir la capacidad del servicio para controlar un evento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img107.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgos disciplinarios y legales
                  p.mb-0 El incumplimiento de las responsabilidades asignadas puede generar procesos internos o consecuencias derivadas de la normativa aplicable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img108.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Exposición de la instalación
                  p.mb-0 La omisión de controles o procedimientos puede incrementar las vulnerabilidades de las personas, bienes e instalaciones protegidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img109.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pérdida de control operacional
                  p.mb-0 La ausencia de uniformidad en las actuaciones dificulta la coordinación entre operadores, vigilantes, supervisores y demás responsables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img110.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La aplicación permanente de procedimientos y el cumplimiento de las funciones asignadas reducen estos riesgos y permiten mantener una actuación coherente y documentada. Para comprender las consecuencias que puede generar el incumplimiento de funciones y procedimientos en la operación de seguridad, se presentan los siguientes ejemplos aplicados:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ejemplo 1. Falta de reporte operativo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img111.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ejemplo 1. Falta de reporte operativo
              p Un operador identifica el ingreso de un vehículo no autorizado y decide no reportarlo porque considera que dicha actuación no corresponde a sus responsabilidades. Sin embargo, #[b identificar, reportar y registrar las novedades] constituye una función esencial dentro de la operación de seguridad.
              p.mb-0 La omisión del reporte impide que el supervisor y los demás responsables conozcan oportunamente la situación, limita la trazabilidad del hecho y puede afectar la capacidad de respuesta del servicio.
        .py-3.py-md-4(titulo="Ejemplo 2. Ausencia de procedimiento para una alarma")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img112.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ejemplo 2. Ausencia de procedimiento para una alarma
              p Ante una señal de alarma, un operador reinicia el panel sin realizar previamente la verificación del área. Esta actuación puede eliminar información relevante o impedir que se determine correctamente el origen de la señal.
              p.mb-0 La atención de alarmas debe seguir una #[b secuencia previamente establecida], que contemple recepción, verificación, clasificación, actuación y registro. Aplicar este procedimiento disminuye la posibilidad de errores y permite conservar la trazabilidad del evento.
        .py-3.py-md-4(titulo="Ejemplo 3. Supervisión deficiente")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img113.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ejemplo 3. Supervisión deficiente
              p Si un supervisor no revisa la minuta durante el relevo, el operador entrante puede desconocer la existencia de fallas técnicas, incidentes pendientes o consignas temporales que continúen vigentes.
              p.mb-0 Esta falta de seguimiento puede afectar la respuesta operativa y generar vacíos de información entre turnos. Por esta razón, la #[b revisión de registros durante los relevos]constituye una actividad fundamental para mantener la continuidad del servicio.
      Separador
      #t_2_12.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.12 Metodología empleada para la presentación de los resultados
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La #[b presentación de resultados] constituye un componente metodológico formal dentro de la gestión operativa de la seguridad privada. Todo informe debe elaborarse con objetividad, precisión y respaldo documental, manteniendo una estructura cronológica que permita reconstruir los hechos sin ambigüedades.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img114.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Esta metodología busca transformar la información recopilada durante un evento operacional en un documento organizado, comprobable y útil para la toma de decisiones. Por esta razón, el informe no debe limitarse a una narración del incidente, sino que debe funcionar como instrumento de #[b análisis, control, trazabilidad y soporte de las actuaciones realizadas].
          p.mb-0 El personal responsable debe registrar únicamente hechos comprobables y conservar la secuencia en que ocurrieron, evitando apreciaciones personales, conclusiones anticipadas o información especulativa. Esta precisión facilita las auditorías y mantiene coherencia entre los procedimientos institucionales y la actuación desarrollada durante el servicio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img115.png', alt='' style="width: 300px").m-auto
      p.mb-5 Como apoyo para ampliar la comprensión de los criterios aplicados en la presentación de resultados, se incluye el siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Presentación de resultados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura del informe
      p.mb-5 Todo #[b informe operativo] debe mantener una estructura que facilite la comprensión de los acontecimientos y permita relacionar los hechos con las actuaciones y evidencias correspondientes. Aunque cada organización puede adaptar sus formatos, existen elementos fundamentales que deben conservarse. La estructura básica del informe se organiza de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Datos iniciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen la fecha, hora, lugar y tipo de evento. Estos datos permiten identificar el incidente y establecer el contexto temporal y espacial en el cual ocurrió.
            .row(titulo="Descripción objetiva de los hechos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Expone lo sucedido mediante información comprobable, evitando opiniones, suposiciones o interpretaciones personales que puedan alterar el contenido del reporte.
            .row(titulo="Cronología detallada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza las actuaciones y acontecimientos de acuerdo con su secuencia temporal, utilizando marcas de tiempo que permitan reconstruir la evolución del evento.
            .row(titulo="Actuación del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra las comprobaciones efectuadas, los procedimientos aplicados, las instrucciones recibidas y las decisiones adoptadas durante la atención del incidente.
            .row(titulo="Evidencias adjuntas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Integra los soportes relacionados con el evento, como registros de CCTV, fotografías, reportes electrónicos, comunicaciones y datos generados por los sistemas.
            .row(titulo="Conclusiones operativas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consolidan el resultado del incidente, la condición final identificada y las medidas implementadas durante la actuación.
            .row(titulo="Recomendaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Plantean acciones de mejora, mantenimiento, prevención o ajuste procedimental derivadas del análisis del evento.
      p.mb-5 La estructura cronológica y el respaldo documental son indispensables para mantener el valor técnico del informe. La ausencia de datos precisos, marcas temporales o una secuencia lógica puede dificultar la reconstrucción del evento y afectar la calidad del análisis posterior.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso de evidencias operativas
      p.mb-5 La #[b evidencia operativa] constituye un componente fundamental de la presentación de resultados, especialmente cuando los incidentes involucran sistemas electrónicos, comunicaciones o actuaciones susceptibles de comprobación posterior. Entre las principales evidencias que pueden incorporarse a un informe se encuentran:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img116.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Grabaciones de CCTV. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img117.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Capturas de pantalla del software de monitoreo. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img118.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Reportes del panel de alarmas. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img119.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Comunicaciones radiales. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img120.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Registros del Sistema de Gestión Central (SGC). 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img121.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Fotografías del sitio. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img122.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Minutas y reportes operativos. 
          p La evidencia debe relacionarse directamente con los hechos descritos en el informe. Su finalidad es respaldar la información registrada, mantener la trazabilidad y facilitar la comprobación de las actuaciones ejecutadas.
          p.mb-5 Además de sustentar el evento, los registros disponibles permiten identificar patrones, evaluar la calidad de la respuesta, detectar fallas de infraestructura y establecer oportunidades para fortalecer la supervisión operativa.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de presentación de resultados ante un intento de intrusión
      p.mb-5 Ante un intento de intrusión detectado mediante un sensor perimetral, la presentación de los resultados debe mantener una secuencia que integre el registro inicial, la comprobación, las acciones ejecutadas y la evidencia asociada. El caso puede estructurarse de la siguiente manera:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img123.png').m-auto
          h4.mb-3.estilo-text Registro de activación
          p.mb-0.text-center Zona: perímetro norte. Hora: 22:14, según el panel. Estos datos permiten identificar el punto y el momento en que se genera la señal.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img124.png').m-auto
          h4.mb-3.estilo-text Comprobación del operador
          p.mb-0.text-center Se consulta la cámara asociada, se determina la presencia de movimiento en la zona crítica y se establece comunicación con la unidad desplegada en campo.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img125.png').m-auto
          h4.mb-3.estilo-text Acciones adoptadas
          p.mb-0.text-center Se despacha la unidad Alfa 3, se realiza la revisión perimetral y se confirma el intento de ingreso.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img126.png').m-auto
          h4.mb-3.estilo-text Evidencias adjuntas
          p.mb-0.text-center Se incorporan capturas del CCTV, registro del panel, grabación de la comunicación radial y fotografías tomadas por la unidad.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t2/img127.png').m-auto
          h4.mb-3.estilo-text Conclusiones y recomendaciones
          p.mb-0.text-center Se establece la necesidad de comprobar la integridad del cerco, fortalecer la iluminación y ajustar la ronda correspondiente al periodo comprendido entre las 22:00 y las 22:30.
      p.mb-5 Este ejemplo permite relacionar los datos del evento con las actuaciones y los soportes disponibles. Un informe que carezca de evidencias, horas exactas o secuencia cronológica puede resultar insuficiente para reconstruir adecuadamente lo ocurrido.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Metodología como herramienta de gestión
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img128.jpg', alt='' style="width: 600px").m-auto
          .col-xl.caja-1_p
            p La presentación de resultados constituye una herramienta estratégica de gestión y no únicamente un requisito documental. La información correctamente estructurada permite transformar los acontecimientos operativos en insumos para el seguimiento, análisis y mejoramiento del servicio. Los informes correctamente elaborados permiten:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitar la supervisión. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Desarrollar auditorías internas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejorar los procesos operativos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sustentar decisiones correctivas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fortalecer la trazabilidad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Prevenir fallas recurrentes. 
      p La elaboración adecuada de informes contribuye a mantener la continuidad operativa, fortalecer la transparencia y generar retroalimentación para los responsables de la prestación del servicio.
      p.mb-0 Por ejemplo, si un operador identifica que una puerta presenta fallas de cierre durante varios turnos, pero no registra la situación, la vulnerabilidad puede permanecer activa. Si la novedad se documenta con precisión y se incorpora la evidencia correspondiente, la organización dispone de información suficiente para gestionar el mantenimiento y reducir el riesgo asociado.
      Separador
      #t_2_13.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.13 Recursos del plan de seguridad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 Los #[b recursos del plan de seguridad] constituyen el conjunto articulado de medios necesarios para ejecutar las funciones de prevención, detección, comprobación, respuesta y recuperación. Su eficacia no depende de la existencia aislada de personal, tecnología o infraestructura, sino de la capacidad de integrar estos elementos dentro de un sistema coherente de protección.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img129.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Los #[b recursos tecnológicos, humanos y de infraestructura física] ya desarrollados en los numerales anteriores forman parte integral del plan de seguridad. En este apartado, su análisis se orienta específicamente hacia la forma en que deben articularse para responder a los riesgos identificados y cumplir los objetivos de protección.
      p.mb-5 Toda organización debe identificar, documentar y gestionar los recursos disponibles, así como aquellos que requiera incorporar para fortalecer su esquema de seguridad. Estos medios deben ser suficientes, funcionales, sostenibles y susceptibles de adaptación frente a cambios en el entorno. Los componentes esenciales del plan se relacionan de la siguiente manera:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Recursos tecnológicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Amplían la capacidad para detectar señales, comprobar eventos, registrar actuaciones y mantener comunicaciones. Su selección debe responder a las amenazas identificadas y a las necesidades reales de la operación.
            .row(titulo="Talento humano").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Interpreta la información, aplica los procedimientos, toma decisiones y coordina la respuesta. La formación y confiabilidad del personal determinan la correcta utilización de los demás recursos.
            .row(titulo="Infraestructura física").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona las condiciones materiales para prevenir, controlar y retardar amenazas. Incluye barreras, puestos de control, áreas de monitoreo, iluminación y demás elementos físicos de apoyo.
            .row(titulo="Procedimientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Articulan los recursos humanos, tecnológicos y físicos mediante instrucciones estandarizadas que establecen cómo debe actuar el sistema ante condiciones rutinarias o eventos críticos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img130.png", alt="" style="width: 350px").m-auto
      p.mb-5 La eficacia del plan depende de la correspondencia entre estos componentes y las condiciones de riesgo presentes en la organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recursos tecnológicos dentro del plan de seguridad
      p.mb-5 Los recursos tecnológicos actúan como una extensión de la capacidad operativa del personal. Sensores, cámaras, paneles de alarma, servidores, plataformas de monitoreo, sistemas de control de acceso y medios de comunicación permiten ampliar la cobertura y mantener registros continuos sobre las condiciones del entorno.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img131.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Estos recursos abarcan componentes físicos y digitales. Entre ellos se encuentran:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sensores infrarrojos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sensores de microondas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Paneles programables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cámaras fijas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cámaras PTZ. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Grabadores de video. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Plataformas de monitoreo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sistemas de control de acceso. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sistemas de comunicación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Servidores y medios de almacenamiento. 
            p.mb-0 La selección de estos elementos debe responder a la naturaleza de los riesgos y a las condiciones específicas del lugar protegido. La incorporación de tecnología sin procedimientos definidos o sin personal capacitado limita su efectividad.
      p.mb-5 En un entorno industrial, por ejemplo, la combinación de sensores PIR en pasillos y sensores de microondas en el perímetro puede generar señales automáticas que posteriormente son comprobadas mediante cámaras y plataformas de monitoreo. Esta integración permite reducir falsas alarmas, mejorar los tiempos de respuesta y conservar evidencia sobre las actuaciones desarrolladas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Talento humano dentro del plan de seguridad
      p.mb-5 El #[b talento humano] constituye el elemento encargado de interpretar la información generada por los sistemas y ejecutar las decisiones operativas. La tecnología puede producir datos o alertas, pero requiere personal capacitado para analizarlos, determinar su importancia y aplicar los procedimientos correspondientes. Las competencias esenciales del personal incluyen:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img132.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Identificación detallada de condiciones de riesgo. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img133.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Comunicación objetiva. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img134.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Aplicación disciplinada de procedimientos. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img135.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Manejo de tecnologías de seguridad. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img136.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Toma de decisiones. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img137.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Protección de información sensible. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img138.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Actuación ética y responsable. 
          p.mb-5 La selección del personal debe considerar condiciones de confiabilidad, competencia técnica y comportamiento profesional. La honestidad, reserva e integridad adquieren especial relevancia debido al acceso que puede tener el personal a áreas críticas, información sensible y recursos de protección. 
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La capacitación debe mantenerse de manera continua e incorporar contenidos relacionados con:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sistemas de monitoreo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Alarmas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comunicaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de accesos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Protocolos de emergencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Gestión de evidencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Procedimientos de respuesta. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img139.jpg', alt='' style="width: 500px").m-auto
      p.mb-5 Un sistema tecnológicamente avanzado puede perder efectividad si el operador no cuenta con los conocimientos necesarios para interpretar señales, identificar condiciones sospechosas o preservar correctamente la evidencia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Infraestructura física dentro del plan de seguridad
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img140.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p La #[b infraestructura física] constituye la base material del plan de seguridad y permite implementar medidas destinadas a prevenir, disuadir y retardar amenazas. Su configuración debe responder a criterios funcionales y a los riesgos particulares de cada instalación. Entre los elementos que forman parte de esta infraestructura se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Barreras perimetrales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cerramientos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Puertas reforzadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garitas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Salas de monitoreo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Iluminación de seguridad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Señalización. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mobiliario de apoyo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Accesos vehiculares y peatonales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Puntos de energía y comunicaciones. 
      p.mb-5 Las barreras físicas permiten canalizar flujos y dificultar ingresos no autorizados, mientras que las porterías y puntos de acceso concentran actividades de identificación, autorización y registro. Su diseño debe complementarse con recursos tecnológicos y procedimientos de control.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 La iluminación también cumple una función relevante dentro del esquema de protección. Una iluminación adecuada mejora las condiciones para la detección del entorno y favorece el desempeño de los sistemas de CCTV. Por el contrario, un perímetro con iluminación insuficiente puede disminuir la efectividad de los controles establecidos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img141.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 El mobiliario y los elementos de apoyo también inciden en el desempeño del personal. Escritorios, casilleros, estanterías, sillas ergonómicas, conexiones eléctricas y acceso a los sistemas deben mantenerse en condiciones adecuadas para facilitar la continuidad de las actividades.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración de recursos
      p.mb-5 Los recursos del plan de seguridad alcanzan su mayor efectividad cuando se encuentran #[b integrados dentro de una misma estrategia operativa]. La tecnología necesita personal competente; el personal requiere infraestructura funcional; y la infraestructura adquiere mayor valor cuando incorpora medios tecnológicos y procedimientos claramente definidos. Esta relación puede comprenderse de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tecnología y talento humano
                  p.mb-0 Los sistemas generan señales, registros y alertas, mientras que el personal interpreta la información y determina las acciones correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img142.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Talento humano e infraestructura
                  p.mb-0 El personal necesita espacios adecuados, puntos de control funcionales y condiciones físicas que permitan ejecutar las tareas asignadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img143.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Infraestructura y tecnología
                  p.mb-0 Las barreras, accesos y zonas críticas se fortalecen mediante sensores, cámaras, controles electrónicos y sistemas de comunicación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img144.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos e integración operativa
                  p.mb-0 Los procedimientos establecen cómo deben emplearse conjuntamente los recursos disponibles y permiten mantener una actuación uniforme ante cada tipo de situación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img145.png', alt='' style="max-width: 500px").m-auto
      p Un sistema puede debilitarse cuando alguno de estos componentes funciona de forma aislada o presenta condiciones deficientes. Una sala de monitoreo con infraestructura inadecuada puede afectar el desempeño del operador, incluso si dispone de sistemas avanzados. De manera similar, una barrera física robusta pierde eficacia si el personal desconoce el procedimiento que debe aplicar ante una novedad.
      p.mb-5 La integración de #[b recursos tecnológicos, talento humano, infraestructura y procedimientos] permite configurar un sistema capaz de detectar acontecimientos, transmitir información, responder oportunamente y documentar las actuaciones con rigor técnico. Esta articulación constituye la base para mantener un plan de seguridad sostenible, eficiente y coherente con los objetivos de protección de la organización.
      .caja-8.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img146.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Manejo de Emergencias, Consignas y Servicios de Seguridad
            p.mb-0 Se invita a leer el documento “#[b Manejo de Emergencias, Consignas y Servicios de Seguridad]”, donde se aborda la gestión de emergencias en los servicios de seguridad privada, los sistemas de comunicación, la atención de eventos críticos, las funciones del personal, los lineamientos de seguridad y la aplicación de consignas y procedimientos operativos.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Consignas_Servicios_Seguridad.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
