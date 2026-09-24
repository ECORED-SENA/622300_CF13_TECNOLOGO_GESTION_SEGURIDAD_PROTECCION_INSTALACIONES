<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La operación, control y respuesta en los servicios de seguridad privada exige la articulación de conocimientos técnicos, administrativos y operativos que permitan proteger personas, bienes, información e instalaciones. En este contexto, la comunicación, la interpretación de señales, el manejo adecuado de reportes, la gestión documental y el uso de recursos tecnológicos constituyen elementos esenciales para mantener la trazabilidad, la continuidad operativa y la capacidad de reacción ante diferentes situaciones del servicio.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 El desarrollo de la operación también requiere una adecuada administración de recursos y servicios, mediante la programación de actividades, la definición de funciones, la aplicación de procedimientos, el uso de manuales operativos y la gestión de recursos humanos, tecnológicos y de infraestructura. Estos componentes permiten estandarizar la actuación del personal, reducir la improvisación y fortalecer el cumplimiento de consignas, controles de acceso, lineamientos de seguridad y procedimientos asociados con la prestación del servicio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 300px").m-auto
      p.mb-0 Asimismo, el manejo de emergencias representa un componente fundamental dentro del sistema de protección, ya que integra la identificación de eventos, la comunicación oportuna, la coordinación, la evacuación, la atención de personas y la protección de instalaciones. La aplicación coherente de estos elementos permite consolidar un servicio de seguridad preventivo, organizado, documentado y orientado a responder de manera efectiva frente a riesgos, incidentes y condiciones que puedan afectar la operación.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
