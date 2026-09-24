<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Área técnica
      p.mb-5 El eje #[b Área técnica] presenta los fundamentos operativos y procedimentales que sustentan la captura, transmisión, registro y presentación de la información en los servicios de seguridad privada. Su propósito es proporcionar al aprendiz criterios técnicos para interpretar señales, operar medios tecnológicos, elaborar reportes confiables y utilizar sistemas de transmisión con garantías de #[b trazabilidad y continuidad operativa].
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Semiótica o estudio de los signos
      p La #[b semiótica], como disciplina que estudia los signos, sus significados y su función comunicativa, resulta esencial para comprender cómo la seguridad privada estructura sus procesos de percepción, análisis y respuesta. En este ámbito, los signos constituyen unidades mínimas de información que orientan decisiones críticas y permiten interpretar el entorno para anticipar riesgos. Su valor operativo radica en que, al ser correctamente decodificados, transforman señales dispersas en acciones coordinadas que fortalecen la protección del entorno.
      p.mb-5 Como apoyo para ampliar la comprensión de la #[b semiótica aplicada a los procesos de comunicación], se presenta el siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/UEBAprTXvFI" title="Semiótica y semiología" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Semiótica y semiología
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 En los servicios de vigilancia, el #[b signo] no se limita a elementos gráficos o sonoros, como luces, sirenas o pictogramas, sino que incluye señales emitidas por sistemas electrónicos; por ejemplo, un registro como #[b «Apertura zona 4 — 03:12»], así como claves verbales, gestos discretos y códigos empleados para transmitir información sin alertar a terceros. Estos signos funcionan como elementos que activan procesos de interpretación y exigen precisión, ya que un error en su lectura puede alterar la respuesta operativa y comprometer la seguridad del usuario.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Cuando un operador recibe una señal técnica, esta se convierte en un mensaje que debe interpretarse mediante criterios uniformes. El mensaje sintetiza cuatro elementos esenciales: qué ocurre, en qué lugar, en qué momento y con qué prioridad. Esta estructura permite que todos los actores involucrados compartan un lenguaje común y evita ambigüedades. La coherencia interpretativa es indispensable para mantener la continuidad operativa y asegurar que la respuesta sea proporcional al nivel de riesgo percibido.
      p.mb-5 A continuación, se presenta un video que permite profundizar en la aplicación de la semiótica en los procesos de seguridad, destacando la importancia de interpretar correctamente códigos, señales, gestos y sistemas de alerta para favorecer una comunicación efectiva y una respuesta oportuna ante diferentes situaciones operativas.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. La semiótica aplicada a la comunicación y los sistemas de seguridad
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación práctica para el aprendiz
      p.mb-5 Para aplicar los principios de la semiótica en el contexto operativo de la seguridad privada, es necesario diferenciar tres conceptos fundamentales:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img4.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Signo
            p.mb-0.text-center Corresponde a cualquier señal técnica o comunicativa que transmite información relevante para la operación. Puede proceder de un sistema electrónico o de otro medio de comunicación, como «Alarma zona 3» o «Sensor de movimiento 12».
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img5.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Mensaje
            p.mb-0.text-center Es la información mínima estructurada que permite orientar una acción operativa. Debe precisar qué ocurrió, dónde sucedió, cuándo se presentó y cuál es el nivel de prioridad asignado al evento.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img6.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Código
            p.mb-0.text-center Es una forma estandarizada de representar una situación con el propósito de disminuir la ambigüedad y acelerar la respuesta. Un ejemplo es «Cód. 22 — Intrusión», cuya interpretación debe ser uniforme para el personal involucrado.
      p.mb-5 La correcta articulación entre #[b signo, mensaje y código] permite transformar una señal recibida en una decisión operativa coherente, rápida y trazable.
      .caja-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 400px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 Si se reporta «Apertura zona 4 — 03:12», el operador debe interpretar el signo como una posible intrusión, analizar su prioridad y activar el protocolo correspondiente. Este puede incluir la verificación electrónica, el contacto telefónico o el envío de una unidad de apoyo, según los criterios definidos institucionalmente.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Tipos de comunicación
      p La #[b comunicación] constituye uno de los pilares esenciales de la operación en seguridad privada, pues garantiza que la información circule con precisión, continuidad y confiabilidad. Su correcta ejecución permite integrar los componentes humanos y tecnológicos del servicio, de manera que los mensajes sean transmitidos y comprendidos sin ambigüedades. En este contexto, comunicar corresponde a un proceso técnico que exige #[b estandarización, disciplina profesional y claridad operativa].
      p.mb-5 En el desarrollo del servicio, la comunicación se presenta principalmente de forma #[b oral, escrita y por señales]. Cada modalidad responde a funciones y exigencias específicas, por lo que su adecuada aplicación contribuye a prevenir fallos procedimentales o interpretativos que puedan afectar la continuidad de la operación. La precisión adquiere especial importancia cuando las decisiones deben tomarse con rapidez y la claridad del mensaje incide directamente en la protección de personas, bienes e instalaciones. Las características principales de estas modalidades se organizan de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación oral
                  p.mb-0 Constituye el medio inmediato de interacción entre vigilantes, usuarios, supervisores y autoridades. Requiere vocabulario técnico, respeto y claridad operacional. El mensaje debe precisar el hecho, el lugar, la hora, las personas involucradas y la acción adoptada, evitando expresiones coloquiales que puedan generar ambigüedad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación escrita
                  p.mb-0 Permite documentar hechos operativos con fines de control, investigación, auditoría y reconstrucción de eventos. Los registros deben elaborarse con exactitud, en orden cronológico, sin tachaduras y mediante un lenguaje objetivo basado en hechos comprobables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación por señales
                  p.mb-0 Integra alarmas, indicadores lumínicos, sensores, mensajes en paneles de control, pictogramas, señalización espacial y otros signos asociados con la operación. Cada señal posee un significado específico y puede activar un protocolo determinado según la naturaleza y prioridad del evento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La articulación de estas tres modalidades configura un #[b ecosistema comunicativo] en el que la información oral, escrita y codificada se complementa. Cuando los mensajes se transmiten de manera uniforme, estructurada y oportuna, se facilita la coordinación entre los responsables del servicio, se agiliza la toma de decisiones y se fortalece la continuidad operativa.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img11.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplos aplicados
            p Los siguientes ejemplos permiten relacionar cada modalidad de comunicación con situaciones habituales del servicio:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comunicación oral:] «El ingreso fue restringido por no cumplir los protocolos de autorización». 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comunicación escrita:] «21:40 horas. Ingreso autorizado por el director de operaciones para revisión de instalación eléctrica». 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comunicación por señales:] la activación de un botón de pánico corresponde a una alarma prioritaria que requiere respuesta inmediata.
      p.mb-5 Estos casos evidencian que la calidad de la comunicación depende tanto del medio empleado como de la #[b precisión, objetividad y oportunidad del mensaje].
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protocolos y buenas prácticas
      p.mb-5 La comunicación operativa debe desarrollarse mediante pautas uniformes que permitan reducir ambigüedades y mantener la trazabilidad de las instrucciones impartidas. Para ello, es necesario que el personal aplique criterios de identificación, claridad, confirmación y registro durante los intercambios asociados con la prestación del servicio. Los principales parámetros se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Identificación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Identificación
              p.mb-0 La comunicación debe iniciar con la identificación del emisor y del receptor, de manera que se establezca con claridad quién transmite el mensaje y a quién está dirigido. Un ejemplo es: «Centro a Alfa 1».
        .py-3.py-md-4(titulo="Mensaje claro")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Mensaje claro
              p.mb-0 La información debe transmitirse mediante frases breves, directas y estandarizadas. Una instrucción como «Compruebe zona 3, cámara 7» permite identificar de manera precisa la acción requerida y el punto específico de atención.
        .py-3.py-md-4(titulo="Confirmación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Confirmación
              p.mb-0 El receptor debe responder mediante una frase breve que confirme la recepción y comprensión de la instrucción. Por ejemplo: «Recibido, compruebo zona 3». Esta respuesta disminuye el riesgo de interpretaciones incorrectas.
        .py-3.py-md-4(titulo="Registro")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
            .col-xl-7.order-2.order-lg-1.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registro
              p.mb-0 Las comunicaciones relevantes deben quedar consignadas en la minuta o en el sistema institucional correspondiente. Este registro permite conservar la secuencia de las actuaciones y relacionar la información transmitida con las acciones ejecutadas.
      p La aplicación conjunta de estos parámetros fortalece la coordinación entre vigilantes, operadores y supervisores. No basta con transmitir una instrucción; es necesario garantizar que llegue al destinatario adecuado, que sea comprendida y que quede documentada cuando tenga incidencia en la operación.
      p.mb-5 La minuta constituye un recurso fundamental para mantener la continuidad informativa entre turnos y conservar antecedentes sobre los acontecimientos del servicio. Sus anotaciones deben redactarse de manera cronológica, objetiva y suficientemente precisa para permitir la reconstrucción del evento.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img16.jpg', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Entre las formas adecuadas de registro se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | «21:46 — Alarma de movimiento en zona 3. Comprobación mediante cámara 04: sin anomalías». 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | «22/05/2025 — Turno noche — Puesto principal — Operador: J. Pérez. 21:46 — Alarma de movimiento en zona 3. Comprobación mediante CCTV, cámara 04: sin anomalías. Reportado a supervisión; sin novedad».
      p.mb-5 Un registro completo permite establecer #[b qué ocurrió, cuándo ocurrió, qué acción se ejecutó y cuál fue el resultado obtenido], elementos esenciales para conservar la trazabilidad del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento resumido para la gestión de señales
      p.mb-5 La gestión de señales requiere una secuencia ordenada que permita transformar una alerta técnica en una actuación operativa documentada. El procedimiento inicia con la generación de la señal y finaliza con el registro de las acciones realizadas, de manera que cada etapa pueda relacionarse con la siguiente. La secuencia recomendada comprende los siguientes pasos:
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Detección automática:] el sistema genera una señal asociada con una condición o evento determinado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Recepción por el operador:] el responsable recibe la señal e identifica la información inicial suministrada por el sistema. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comprobación mediante CCTV o dispositivo:] se utilizan los medios tecnológicos disponibles para establecer las condiciones relacionadas con la alerta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación:] se determina si corresponde a una falsa activación o a un evento real. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Acción:] según la clasificación, se procede con el archivo, la notificación, el despacho de recursos u otra medida establecida institucionalmente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Registro en el sistema:] se documentan la señal recibida, las acciones ejecutadas y el resultado del procedimiento.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img17.jpg', alt='' style="width: 600px").m-auto
      p.mb-5 Aunque el proceso se desarrolla de manera secuencial, cada etapa depende de la precisión de la anterior. Una clasificación incorrecta puede provocar una respuesta inadecuada, mientras que un registro incompleto puede dificultar posteriormente la reconstrucción del evento. Algunas situaciones permiten comprender la aplicación práctica de esta secuencia:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img18.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Fallo de batería
            p.mb-0.text-center Ante la señal «Fallo de batería — Panel 2 — 04:12», el operador debe registrar el evento, notificar al área de mantenimiento y conservar la información en el reporte técnico correspondiente.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img19.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Puerta abierta
            p.mb-0.text-center Cuando un vigilante identifica una puerta abierta, debe registrar la hora, la ubicación exacta, el nombre del testigo, cuando exista, la acción realizada y la notificación efectuada al supervisor.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img20.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Alarma de movimiento
            p.mb-0.text-center Un registro adecuado puede expresarse así: «20:15 horas. Se activa alarma de movimiento en zona 3. El operador procede a la comprobación mediante CCTV. No se identifica ninguna anomalía».
      p.mb-0 La gestión adecuada de las señales integra #[b recepción, análisis, clasificación, respuesta y registro]. Esta relación permite mantener uniformidad en la actuación del personal, disminuir la improvisación y conservar evidencia suficiente sobre las decisiones adoptadas durante la operación.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Sistemas y técnicas de comunicación
      p En los servicios de vigilancia y seguridad privada, la #[b comunicación] constituye el eje articulador que permite transformar la planificación en una acción operativa efectiva. Más allá de los medios tecnológicos disponibles, se entiende como un proceso organizado, permanente y jerarquizado mediante el cual se transmite información crítica entre vigilantes, supervisores y niveles directivos, garantizando coordinación, coherencia en la actuación y control del servicio.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img21.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 La eficacia del sistema de seguridad no depende únicamente de la detección de eventos, sino también de la capacidad del personal para comunicar con precisión aquello que identifica, recibe o ejecuta. Una comunicación estructurada disminuye la incertidumbre y evita decisiones aisladas o contradictorias que puedan afectar la continuidad de la operación.
          p.mb-0 La relación comunicativa entre el #[b supervisor y el personal operativo] resulta especialmente estratégica. El supervisor actúa como punto central para interpretar, validar y direccionar la información, mientras que el vigilante reporta hechos objetivos relacionados con las condiciones del servicio. Esta interacción debe desarrollarse mediante flujos claros, verificables y bidireccionales, de acuerdo con los protocolos y prioridades institucionales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Cuando la comunicación es deficiente, fragmentada o informal, aumenta el riesgo de errores operativos, omisiones críticas y respuestas descoordinadas. Estas condiciones pueden ocasionar que un incidente inicialmente menor evolucione hacia una situación de mayor impacto. Por esta razón, las técnicas de comunicación aplicadas en seguridad privada deben caracterizarse por ser #[b claras, concretas, oportunas y libres de ambigüedades], especialmente en situaciones de presión o emergencia.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.jpg', alt='' style="width: 300px").m-auto
        .col-xl-4
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 La estandarización del lenguaje, el empleo de códigos operativos y la estructuración de mensajes breves y susceptibles de comprobación favorecen una interpretación uniforme por parte de todos los actores involucrados. A partir de estos criterios, la comunicación operativa cumple tres funciones esenciales:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Informar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Informar
              p.mb-0 Consiste en transmitir hechos objetivos y comprobables relacionados con el estado del servicio, los accesos, las novedades, las anomalías o cualquier condición que pueda incidir en la seguridad. La información debe ser precisa y comunicarse oportunamente para facilitar la toma de decisiones.
        .py-3.py-md-4(titulo="Coordinar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Coordinar
              p.mb-0 Permite articular las acciones de vigilantes, supervisores, personal encargado de rondas y recursos de apoyo interno o externo. Su finalidad es asegurar que las actuaciones se desarrollen de manera coherente y conforme con las responsabilidades asignadas.
        .py-3.py-md-4(titulo="Controlar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Controlar
              p.mb-0 Consiste en confirmar que las instrucciones transmitidas hayan sido comprendidas y ejecutadas de acuerdo con los procedimientos establecidos. Esta función facilita el seguimiento de las actuaciones y permite identificar desviaciones que requieran intervención.
      p.mb-5 Estas funciones se integran como un ciclo continuo durante toda la jornada operativa. #[b Informar, coordinar y controlar] permite mantener una relación constante entre la detección de situaciones, la toma de decisiones y la ejecución de las acciones correspondientes.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img28.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La comunicación también cumple una función #[b preventiva]. Los reportes periódicos del personal al supervisor sobre fallas incipientes, comportamientos atípicos, debilidades en los accesos o incumplimientos procedimentales permiten intervenir antes de que estas condiciones se materialicen en incidentes. Una señal temprana que no se comunica oportunamente o que se subestima dentro de la cadena de mando puede convertirse en una vulnerabilidad para el servicio.
          p.mb-0 En situaciones de #[b emergencia], la comunicación adquiere un carácter crítico. El personal operativo debe informar de manera inmediata y objetiva, mientras que el supervisor centraliza los datos disponibles, establece prioridades y coordina las acciones con brigadas internas o autoridades externas. Esta organización evita mensajes paralelos o contradictorios que puedan generar confusión.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 Por ejemplo, durante una evacuación, las instrucciones deben ser claras, coherentes y transmitidas mediante un canal reconocido de autoridad. La circulación de mensajes contradictorios puede generar desorganización, afectar la ejecución del procedimiento y aumentar el riesgo para las personas involucradas.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img29.jpg', alt='' style="width: 300px").m-auto
        .col-xl-5
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 El #[b registro de las comunicaciones] también forma parte integral del proceso. La comunicación no se limita al intercambio verbal, radial o telefónico; debe incorporar la documentación sistemática de lo informado, lo ordenado y lo ejecutado. Cada instrucción relevante del supervisor y cada novedad reportada por el personal operativo deben quedar consignadas en minutas, formatos digitales o informes técnicos cuando corresponda.
      p.mb-5 Desde una perspectiva ética y profesional, la comunicación debe regirse por los principios de #[b veracidad, confidencialidad y responsabilidad]:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img30.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Veracidad
            p.mb-0.text-center La información transmitida debe corresponder a hechos confirmados y expresarse de manera objetiva. El personal debe evitar especulaciones, interpretaciones personales o afirmaciones que no puedan sustentarse mediante los datos disponibles.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img31.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Confidencialidad
            p.mb-0.text-center La información sensible relacionada con personas, instalaciones, procedimientos y condiciones de seguridad debe limitarse a los destinatarios autorizados. Su divulgación indebida puede generar vulnerabilidades y comprometer la operación.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img32.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Responsabilidad
            p.mb-0.text-center Cada integrante del servicio debe asumir las consecuencias derivadas de la información que transmite, registra o recibe. Esto implica comunicar oportunamente, utilizar los canales definidos y conservar la trazabilidad de las actuaciones relevantes.
      p.mb-5 La aplicación conjunta de estos principios fortalece la confianza institucional y la credibilidad del servicio. Una comunicación profesional integra las funciones de detección, control, coordinación y reporte, y contribuye a mantener la #[b continuidad operativa] mediante actuaciones técnicas, disciplinadas y susceptibles de comprobación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto de reportes en sistemas de comunicación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En los sistemas de seguridad privada, el #[b reporte] constituye un elemento técnico esencial para documentar hechos, decisiones y resultados de manera objetiva, cronológica y susceptible de comprobación. Su función consiste en conservar un registro que permita reconstruir con precisión la secuencia operativa de un evento, garantizar la trazabilidad de las actuaciones y aportar soporte documental para procesos de control, auditoría o investigación.
          p El reporte documenta no solo lo ocurrido, sino también la forma en que respondió el personal, las decisiones adoptadas y las evidencias relacionadas con el incidente. Por esta razón, constituye una herramienta indispensable para la continuidad del servicio y para el análisis posterior de las actuaciones operativas.
          p.mb-0 Los reportes pueden adoptar diferentes modalidades según el medio utilizado y el momento en que se producen. Sus principales características se presentan a continuación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img33.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img34.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Reporte verbal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se realiza principalmente mediante comunicaciones radiales o telefónicas y constituye el primer nivel informativo frente a un evento. Su propósito es facilitar una respuesta inmediata; posteriormente, la información relevante debe formalizarse mediante la minuta o el sistema digital correspondiente.
            .row(titulo="Reporte digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se genera mediante plataformas de monitoreo y puede integrar señales automáticas, tiempos de respuesta, activación de protocolos y evidencias digitales. Esta modalidad permite organizar la información en estructuras destinadas al seguimiento y análisis de la operación.
            .row(titulo="Minuta física o electrónica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Funciona como una bitácora continua del servicio. En ella se registran novedades, controles, estados de infraestructura, actividades realizadas y demás situaciones que puedan afectar la operación, manteniendo un orden cronológico.
      p Aunque cada modalidad responde a una finalidad específica, los reportes deben conservar criterios comunes de #[b objetividad, precisión temporal, identificación de los responsables, coherencia en la información y respaldo documental]. Estos elementos permiten relacionar el evento con las acciones ejecutadas y establecer responsabilidades dentro de la cadena operativa.
      p.mb-5 La #[b marca temporal] constituye un elemento particularmente importante, pues permite relacionar las señales recibidas con las actuaciones realizadas. Asimismo, la identificación del emisor y del receptor facilita determinar quién transmitió la información, quién la recibió y qué acciones se desarrollaron posteriormente. De acuerdo con el momento y la función que cumplen dentro del ciclo operativo, los reportes pueden clasificarse de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Informe inicial
                  p.mb-0 Corresponde al primer registro formal del evento. Debe indicar la naturaleza del incidente, la forma en que fue detectado y las primeras acciones realizadas para atenderlo o controlarlo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reporte de progreso
                  p.mb-0 Se elabora mientras el evento continúa activo. Permite actualizar la información, registrar nuevas condiciones, decisiones adoptadas y participación de personal interno, unidades de apoyo o autoridades externas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Informe final
                  p.mb-0 Integra la información consolidada una vez finalizada la situación. Puede incluir las condiciones identificadas, los efectos ocasionados, la respuesta desarrollada y las recomendaciones derivadas del análisis del evento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reporte técnico
                  p.mb-0 Se utiliza cuando el evento involucra fallas de equipos, anomalías tecnológicas, análisis especializados o mantenimiento correctivo. Debe incorporar información del dispositivo afectado, historial de señales, resultados de pruebas, registros complementarios y recomendaciones técnicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img38.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La relación entre estos reportes permite construir una secuencia documental completa. El #[b informe inicial] registra la apertura del evento, los #[b reportes de progreso] documentan su evolución y el informe final consolida los resultados. Cuando existen componentes tecnológicos específicos, el #[b reporte técnico] complementa la información con datos especializados sobre los equipos o sistemas involucrados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de informe inicial
      p.mb-5 El siguiente caso presenta la forma en que puede estructurarse un registro inicial de un evento:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-4(data-aos="zoom-in")
            p.mb-0 #[b 14/06/2025 — 03:12. Informe inicial de evento.] Recepción de alarma de incendio en sector B2. Comprobación mediante CCTV evidencia presencia constante de humo en el pasillo principal. A las 03:14 se notifica a Bomberos. A las 03:15 se inicia evacuación parcial del personal de aseo. Se registran imágenes y se adjunta el archivo correspondiente. Operador responsable: C. Ramírez.
      p Este ejemplo integra los elementos esenciales de un reporte operativo: #[b identificación temporal, descripción objetiva del evento, acciones ejecutadas, secuencia cronológica, evidencia asociada y responsable del registro].
      p.mb-0 La calidad del reporte determina la capacidad de la organización para reconstruir los acontecimientos, evaluar la actuación del personal, sustentar decisiones y conservar evidencia relacionada con el servicio. En consecuencia, el reporte no constituye únicamente un documento administrativo, sino una herramienta estratégica para garantizar #[b trazabilidad, continuidad operativa y responsabilidad institucional].
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Sistemas y medios para reporte de información
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Los #[b sistemas y medios para el reporte de información] constituyen un componente esencial de la infraestructura operativa de la seguridad privada, ya que permiten registrar, consolidar y preservar los hechos que inciden en la continuidad del servicio. La utilidad de un reporte no depende únicamente de su contenido, sino también de las herramientas tecnológicas empleadas para su generación, almacenamiento, consulta y trazabilidad dentro de un entorno seguro y estructurado.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img39.jpg', alt='' style="width: 300px").m-auto
        .col-xl-4
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 En consecuencia, los sistemas utilizados para gestionar información operativa deben garantizar condiciones de #[b integridad, disponibilidad, autenticidad y trazabilidad]. Estos principios permiten reconstruir con precisión los incidentes, respaldar las actuaciones del personal y fortalecer los procesos de auditoría, investigación y mejora continua.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recurso audiovisual
      p.mb-5 Como apoyo para ampliar la comprensión de los sistemas empleados en el reporte y la gestión de información, se incluye el siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Sistemas para el reporte de información
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistema de Gestión Central (SGC)
      p Uno de los componentes centrales de este ecosistema es el #[b Sistema de Gestión Central (SGC)], concebido como una plataforma que integra reportes operativos, historiales de alarmas, minutas, evidencias técnicas y registros de video o audio. El sistema organiza la información mediante marcas temporales automáticas, administra permisos diferenciados según los roles asignados y conserva los registros necesarios para mantener la trazabilidad de cada evento.
      p.mb-5 Su propósito es garantizar que los acontecimientos queden documentados dentro de un expediente digital estructurado, de manera que la reconstrucción de los hechos se sustente en datos registrados técnicamente y no únicamente en la memoria o interpretación posterior del personal. Los principales medios y recursos que intervienen en este proceso se relacionan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img40.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Sistema de Gestión Central (SGC)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Integra los registros relacionados con cada evento y permite centralizar alarmas, minutas, evidencias técnicas, comunicaciones y archivos de audio o video. También facilita la asignación de permisos, la conservación de marcas temporales y la construcción de expedientes digitales con trazabilidad.
            .row(titulo="Minutas físicas o digitales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Constituyen la base documental continua del servicio y permiten registrar hechos de manera inmediata, precisa y cronológica. Su integración con el SGC facilita relacionar cada anotación con alarmas, comunicaciones, imágenes y acciones desarrolladas durante la operación.
            .row(titulo="Grabaciones de audio y video").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Constituyen evidencia asociada con los incidentes y deben almacenarse en servidores seguros con niveles de acceso definidos. Su conservación requiere mecanismos que protejan la integridad del archivo original y permitan establecer si ha ocurrido alguna modificación.
            .row(titulo="Repositorios y sistemas de respaldo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten conservar copias de la información en servidores alternos o sistemas seguros en la nube. Su finalidad es garantizar disponibilidad ante fallas críticas, pérdida de información, desastres o afectaciones deliberadas de la infraestructura principal.
            .row(titulo="Formatos de conservación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los archivos deben emplear formatos estables y compatibles con procesos de consulta, auditoría o investigación. Entre ellos pueden utilizarse PDF/A para reportes textuales y MP4 con metadatos incorporados para archivos de video.
      p.mb-5 La adecuada articulación de estos medios evita la fragmentación de la información. Una minuta aislada, una grabación sin referencia temporal o una alarma sin registro complementario dificultan la reconstrucción de un incidente. Por esta razón, los diferentes recursos deben integrarse dentro de una estructura documental que permita relacionar el evento con las decisiones adoptadas y las acciones ejecutadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión de grabaciones y evidencia digital
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La gestión de #[i grabaciones de audio y video] requiere controles específicos debido a su posible valor probatorio. Estos archivos deben conservarse en servidores seguros, con accesos segmentados según las responsabilidades del personal. Asimismo, pueden utilizarse metadatos o códigos hash para mantener controles sobre la integridad de la información y detectar modificaciones no autorizadas.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img41.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Las grabaciones no deben almacenarse en dispositivos improvisados ni en sistemas carentes de controles de acceso. Su conservación debe responder a políticas institucionales que definan tiempos de retención, responsables de custodia, procedimientos para la consulta y mecanismos de respaldo.
          p.mb-0 La gestión de #[b copias de seguridad o #[i backups]] complementa estas medidas. Los respaldos deben ubicarse en servidores alternos o sistemas seguros que permitan recuperar la información cuando la infraestructura principal presente fallas o indisponibilidad. De esta manera, la continuidad documental forma parte de la continuidad operativa del servicio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img42.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración de la información en el SGC
      p.mb-5 La utilidad del ecosistema tecnológico adquiere mayor relevancia cuando los diferentes registros se integran automáticamente. Ante la recepción de una alarma, por ejemplo, el SGC puede generar un expediente digital que reúna distintos elementos relacionados con el mismo acontecimiento. Los componentes principales de este expediente se presentan a continuación:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img43.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Marca temporal
                  p.mb-0.text-center Registra la fecha y la hora asociadas con la generación o recepción de la señal, permitiendo establecer la secuencia cronológica del evento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registro del CCTV
                  p.mb-0.text-center Incorpora las imágenes relacionadas con la señal y facilita su asociación con el punto, la zona o el dispositivo que originó el evento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comunicación operativa
                  p.mb-0.text-center Integra los registros de las comunicaciones verbales, radiales o telefónicas relacionadas con la actuación del personal y la coordinación de la respuesta.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Minuta del servicio
                  p.mb-0.text-center Conserva el registro elaborado por el personal responsable y permite relacionar las acciones realizadas en campo con los datos generados por los sistemas tecnológicos.
          p La integración de estos componentes permite reconstruir la cadena de acontecimientos de forma precisa y estructurada, disminuyendo la dependencia de narraciones aisladas. Además, fortalece la información disponible para auditorías internas, análisis de riesgos, investigaciones y demás procesos que requieran establecer las actuaciones desarrolladas durante un incidente.
          p.mb-0 En conjunto, los sistemas y medios para el reporte de información no se limitan al almacenamiento de datos. Su función consiste en garantizar que la información permanezca #[b organizada, íntegra, disponible y relacionada con las actuaciones operativas]. El manejo adecuado de estas herramientas constituye, por tanto, una competencia necesaria para mantener la rigurosidad documental y la continuidad del servicio.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Diligenciamiento de formatos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 El #[b diligenciamiento de formatos operativos, informes y minutas] constituye un proceso crítico dentro de la seguridad privada, pues permite mantener la trazabilidad de los eventos, preservar la información y reconstruir los hechos con precisión. La calidad del registro incide directamente en la capacidad institucional para coordinar respuestas, desarrollar auditorías y disponer de evidencia en procesos administrativos, disciplinarios o judiciales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img48.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 El procedimiento comienza desde el momento en que el vigilante u operador recibe una alarma, un reporte ciudadano o un evento generado mediante los sistemas tecnológicos. A partir de ese instante, la información debe registrarse de manera progresiva, objetiva y cronológica.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro inicial y clasificación del evento
      p La primera actuación consiste en consignar la #[b hora exacta en formato de 24 horas]. Esta marca temporal permite establecer la secuencia de los acontecimientos y relacionar posteriormente cada decisión con la información recibida. El registro debe efectuarse oportunamente, evitando vacíos temporales que puedan dificultar la reconstrucción del incidente.
      p.mb-5 Posteriormente, se clasifica la naturaleza del evento. La identificación inicial permite establecer qué procedimiento debe aplicarse y cuáles recursos son necesarios para su atención. Entre las situaciones que pueden requerir clasificación se encuentran:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img49.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Alarmas técnicas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img50.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Posibles intrusiones. 
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img51.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Comportamientos anómalos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img52.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Emergencias.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img53.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fallas de dispositivos o sistemas. 
          p Una vez establecida la categoría, se realiza la #[b comprobación de la señal] mediante los recursos disponibles, como CCTV, sensores, históricos del sistema o comunicación con las unidades desplegadas en el lugar.
          p.mb-5 Esta clasificación inicial permite orientar la respuesta y disminuir el riesgo de actuaciones tardías o desproporcionadas.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Determinación de la condición y respuesta
          p.mb-5 Después de la comprobación, el operador determina si la señal corresponde a un evento real o a una falsa activación. Esta decisión orienta las acciones posteriores.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Evento real")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img54.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Evento real
              p.mb-0 Requiere la activación de los protocolos definidos institucionalmente. Según la naturaleza de la situación, pueden contemplarse el despacho de unidades, la notificación a autoridades, el cierre de accesos, la evacuación u otras medidas de respuesta.
        .py-3.py-md-4(titulo="Falsa activación o fallo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img55.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Falsa activación o fallo
              p.mb-0 Debe registrarse objetivamente, incluyendo la causa probable cuando pueda determinarse. Esta información contribuye a identificar patrones recurrentes, necesidades de mantenimiento o condiciones que requieran ajustes técnicos.
      p.mb-5 La clasificación y la respuesta deben quedar documentadas, ya que forman parte de la trazabilidad del evento y permiten establecer posteriormente si las actuaciones correspondieron con la situación identificada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro formal de la información
      p.mb-5 La fase de documentación formal comprende la #[b minuta, el informe inicial, la actualización del Sistema de Gestión Central (SGC) y el informe final]. Cada recurso cumple una función específica dentro del expediente operativo.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Minuta
                  p.mb-0 Funciona como la bitácora oficial del turno. Debe consignar novedades, horarios, comprobaciones, visitas, personas autorizadas y demás condiciones que incidan en la operación. Su redacción debe ser objetiva, cronológica y libre de tachaduras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img56.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Informe inicial
                  p.mb-0 Documenta de manera inmediata la naturaleza del evento y las primeras acciones ejecutadas. Permite formalizar la información que inicialmente pudo transmitirse mediante radio, teléfono u otro canal operativo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img57.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Actualización del SGC
                  p.mb-0 Integra los datos del evento dentro de la plataforma institucional y permite relacionarlos con alarmas, imágenes, comunicaciones y demás registros digitales asociados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img58.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Informe final
                  p.mb-0 Consolida la información obtenida durante la atención del incidente e incorpora las actuaciones realizadas, la evidencia reunida y las recomendaciones que correspondan para disminuir la recurrencia de situaciones similares.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img59.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Estos registros no deben concebirse como documentos independientes. En conjunto, construyen la secuencia documental que permite establecer cómo se recibió el evento, qué decisiones se adoptaron, qué recursos intervinieron y cuál fue su resultado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión de la evidencia
      p.mb-5 La #[b evidencia] forma parte integral del diligenciamiento. Fotografías, videos, capturas de pantalla, audios de radio, registros de paneles y reportes electrónicos deben vincularse con el evento correspondiente y almacenarse en repositorios seguros.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 Su gestión debe garantizar #[b integridad, trazabilidad y acceso controlado]. Los metadatos y códigos hash pueden utilizarse como mecanismos de control para mantener información sobre las características del archivo y respaldar su autenticidad.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img60.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Cuando el SGC dispone de estas capacidades, puede consolidar en un único expediente la señal original, las imágenes, las comunicaciones, la minuta y los demás documentos relacionados con el incidente. Esta integración facilita la consulta y disminuye la dispersión documental.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cierre del procedimiento
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p El cierre comprende la consolidación de la información generada durante el evento. Para mantener una secuencia ordenada, se deben desarrollar las siguientes acciones:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span a
                | 
                p.mb-0 #[b Elaborar el informe final] con la información consolidada del incidente. 
              li 
                .lista-ol--cuadro__vineta
                  span b
                | 
                p.mb-0 #[b Vincular la evidencia] al expediente físico o digital correspondiente. 
              li 
                .lista-ol--cuadro__vineta
                  span c
                | 
                p.mb-0 #[b Gestionar la aprobación del responsable], de acuerdo con los procedimientos institucionales. 
              li 
                .lista-ol--cuadro__vineta
                  span d
                | 
                p.mb-0 #[b Archivar el caso de manera segura], aplicando los controles de confidencialidad establecidos. 
              li 
                .lista-ol--cuadro__vineta
                  span e
                | 
                p.mb-0 #[b Incorporar el incidente a los procesos de retroalimentación], cuando su relevancia permita identificar oportunidades de mejora. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img61.jpg', alt='' style="width: 600px").m-auto
      p El cierre documental garantiza que la información producida durante la atención del evento permanezca organizada y disponible para consultas posteriores.
      p.mb-5 Los #[b formatos complementarios], como registros administrativos, correspondencia o documentos relacionados con novedades del personal, también forman parte del sistema documental general. Su adecuado diligenciamiento contribuye al control, orden y custodia de la información, evitando pérdidas o inconsistencias que puedan afectar la operación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img62.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p El siguiente caso integra las principales etapas del diligenciamiento y permite identificar la continuidad entre la recepción de la señal, la actuación operativa y el cierre documental:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Recepción:] 08/09/2025, 14:05 — alarma perímetro oeste — Panel A. Se registra la hora exacta y el punto donde se origina la señal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comprobación:] CCTV, cámara P-03 — se identifica una persona no autorizada en el área relacionada con la alarma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Acción:] unidad Alfa 2 despachada a las 14:07. Policía notificada a las 14:09, conforme con el procedimiento de respuesta establecido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Registro:] minuta correspondiente al periodo 14:05–14:30. La evidencia queda almacenada en el expediente n.º 2025-081. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cierre:] informe final emitido el 08/09/2025 a las 18:00. El caso es remitido a investigación interna para el procedimiento correspondiente.
      p.mb-0 El ejemplo permite reconocer que el diligenciamiento no consiste únicamente en completar un formato. Cada registro debe mantener una relación cronológica con el evento y con las acciones realizadas, de modo que la documentación final permita reconstruir la operación con #[b claridad, precisión y trazabilidad].

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
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
