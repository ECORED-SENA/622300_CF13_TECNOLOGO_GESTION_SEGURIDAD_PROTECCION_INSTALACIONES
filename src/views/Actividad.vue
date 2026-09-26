<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Operación, control y respuesta en servicios de seguridad privada.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la comunicación, gestión documental, recursos, procedimientos y respuesta operativa en los servicios de seguridad privada.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función de la semiótica en los servicios de seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interpretar signos para orientar respuestas operativas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Organizar documentos para facilitar procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Supervisar recursos para controlar actividades operativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Programar turnos para distribuir responsabilidades laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elementos debe contener un mensaje operativo correctamente estructurado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emisor, receptor, canal y equipo utilizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hecho, lugar, momento y nivel de prioridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fecha, firma, archivo y tiempo establecido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Persona, equipo, turno y puesto asignado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la finalidad de utilizar códigos estandarizados en seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Extender los mensajes durante las comunicaciones operativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los procedimientos establecidos para cada evento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir ambigüedades y acelerar la respuesta operativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar los registros escritos de las novedades diarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuáles son las principales modalidades de comunicación utilizadas en seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Radial, telefónica y tecnológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Directa, indirecta y preventiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interna, externa y administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oral, escrita y mediante señales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué característica debe tener la comunicación oral durante una operación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser clara, técnica, breve y verificable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser extensa, informal, flexible y espontánea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser subjetiva, personal, detallada y coloquial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser reservada, improvisada, variable y opcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué permite la confirmación en espejo durante una comunicación operativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar el registro escrito de las instrucciones recibidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar que la instrucción fue comprendida correctamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la identificación del emisor del mensaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los protocolos establecidos para cada incidente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo debe elaborarse un registro en la minuta de vigilancia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con opiniones personales sobre los hechos ocurridos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Con abreviaturas creadas durante cada situación presentada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Con objetividad, precisión y orden cronológico verificable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Con información aproximada registrada al finalizar turno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el primer paso recomendado para la gestión de una señal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar inmediatamente la señal como falsa alarma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Despachar una unidad antes de verificar el evento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Archivar la señal sin realizar ninguna comprobación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Detectar o recibir correctamente la señal generada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuáles son funciones esenciales de la comunicación operativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informar, coordinar y controlar las acciones ejecutadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Archivar, destruir y reemplazar documentos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contratar, seleccionar y evaluar únicamente al personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprar, instalar y reparar únicamente equipos tecnológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función principal de un reporte en seguridad privada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar los procedimientos internos establecidos previamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documentar hechos, decisiones y resultados de forma verificable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de conservar evidencia tecnológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar opiniones personales relacionadas con cada incidente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza principalmente a un informe inicial de un incidente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presenta recomendaciones posteriores al cierre del evento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Describe únicamente los daños generados por el incidente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Notifica el evento y activa la respuesta correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Conserva exclusivamente fotografías relacionadas con el hecho.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué función cumple el Sistema de Gestión Central (SGC)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supervisar únicamente los horarios laborales del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente los equipos tecnológicos de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar solamente el ingreso físico de los visitantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar reportes, alarmas, minutas y evidencias operativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe registrarse inicialmente al diligenciar un formato operativo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La hora precisa en formato de veinticuatro horas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La recomendación final formulada por el supervisor responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El periodo establecido para destruir la documentación registrada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La opinión del operador acerca de la situación observada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué criterios debe garantizar la conservación de documentos operativos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificación, divulgación, reemplazo y eliminación documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integridad, autenticidad, disponibilidad y confidencialidad documental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Publicidad, flexibilidad, accesibilidad y modificación documental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reproducción, sustitución, publicación y eliminación documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el documento central del archivo operativo de un puesto de vigilancia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El inventario general de los equipos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El listado diario de visitantes y proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El libro de minuta o libro de servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El manual comercial entregado a los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cómo debe manejarse la información reservada durante el servicio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compartirse con terceros cuando exista una solicitud verbal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantenerse visible para facilitar consultas de los visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fotografiarse para conservar copias personales de respaldo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Protegerse mediante custodia y acceso únicamente autorizado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es la finalidad principal de los manuales operativos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estandarizar procedimientos, responsabilidades y actuaciones del personal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar completamente la capacitación técnica del personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de documentar novedades durante el servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permitir actuaciones improvisadas según decisiones individuales del vigilante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de los siguientes corresponde a un recurso tecnológico de seguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un procedimiento escrito para controlar los accesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un sistema de cámaras CCTV para monitoreo operativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un programa de entrenamiento dirigido al personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una consigna particular establecida para cada puesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué debe orientar la programación de actividades del servicio de seguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La preferencia personal del vigilante durante su jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La disponibilidad exclusiva de documentos administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El análisis de riesgos y condiciones operativas identificadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La decisión espontánea realizada durante el cambio de turno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es una función principal del supervisor de seguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar únicamente las rondas asignadas a los vigilantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar exclusivamente los ingresos realizados por visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reparar directamente los equipos tecnológicos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar procedimientos y coordinar la respuesta operativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
