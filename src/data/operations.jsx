import ejemplo from "../assets/images/puerta5.jpeg"
import brkSede from "../assets/images/brk_sede.png"
import brkBoveda from "../assets/images/brk_boveda.png"
import brkVideo from "../assets/images/brk_video.png"
import brkBiometria from "../assets/images/brk_biometria.png"
import brkEspeciales from "../assets/images/brk_especiales.png"
import brkEspeciales from "../assets/images/brk_Epago.jpg"
import alarmaPrincipalPDF from "../assets/documents/pruebaOperation.pdf"

export const operations = [
    {
        id: 1,
        title: "Seguridad Sedes",
        image: brkSede,
        document: alarmaPrincipalPDF,
        shortDescription: "Monitorear, analizar e interpretar la información generada por los sistemas remotos de alarma y demás medios tecnológicos de seguridad, con el fin de identificar, evaluar y gestionar oportunamente los riesgos y eventos de seguridad",
        description: "Monitorear, analizar e interpretar la información generada por los sistemas remotos de alarma y demás medios tecnológicos de seguridad, con el fin de identificar, evaluar y gestionar oportunamente los riesgos y eventos de seguridad, centralizando la información en la plataforma de monitoreo para la toma de decisiones, escalamiento y activación de los protocolos de respuesta correspondientes, garantizando la protección de las personas, los activos y las operaciones de la organización.",
        functions: [
            "Videoverificación",
            "Monitoreo",
            "Biometrias",
            "Alertas"
        ]
    },
    {
        id: 2,
        title: "Seguridad Bovedas",
        image: brkBoveda,
        document: alarmaPrincipalPDF,
        shortDescription: "Gestionar los riesgos asociados a la seguridad de las bóvedas mediante el monitoreo centralizado, análisis e interpretación de los eventos generados por los sistemas tecnológicos de seguridad, identificando amenazas",
        description: "Gestionar los riesgos asociados a la seguridad de las bóvedas mediante el monitoreo centralizado, análisis e interpretación de los eventos generados por los sistemas tecnológicos de seguridad, identificando amenazas, evaluando su impacto y probabilidad, y aplicando los protocolos de respuesta establecidos para contribuir a la protección de los activos bajo custodia, la continuidad de la operación y la mejora continua de los controles de seguridad.",
        functions: [
            "Recepción",
            "Despacho"
        ]
    },
    {
        id: 3,
        title: "Gestión y analítica de video alarmas",
        image: brkVideo,
        document: alarmaPrincipalPDF,
        shortDescription: "Contribuir a la gestión integral del riesgo mediante la supervisión remota de los procesos de apertura de sucursales, la identificación y evaluación de amenazas, el control de accesos a áreas de alta seguridad y la verificación del",
        description: "Contribuir a la gestión integral del riesgo mediante la supervisión remota de los procesos de apertura de sucursales, la identificación y evaluación de amenazas, el control de accesos a áreas de alta seguridad y la verificación del cumplimiento de los estándares de seguridad electrónica, normas internas CRS y requisitos de retención de video, fortaleciendo la protección de las personas, los activos y las operaciones críticas de la organización.",
        functions: [
            "Recepción",
            "Despacho"
        ]
    },
    {
        id: 4,
        title: "Operaciones especiales TAR - CIT",
        image: brkEspeciales    ,
        document: alarmaPrincipalPDF,
        shortDescription: "Contribuir a la gestión integral del riesgo en las operaciones especiales mediante la supervisión, monitoreo y análisis de eventos asociados a operaciones críticas, utilizando sistemas de geolocalización,",
        description: "Contribuir a la gestión integral del riesgo en las operaciones especiales mediante la supervisión, monitoreo y análisis de eventos asociados a operaciones críticas, utilizando sistemas de geolocalización, video y herramientas tecnológicas de seguridad, con el fin de identificar, evaluar y gestionar oportunamente los riesgos, asegurar el cumplimiento de los compromisos contractuales y fortalecer la efectividad de los controles definidos por la organización.",
        functions: [
            "Recepción",
            "Despacho"
        ]
    },
    {
        id: 5,
        title: "Comand center CB",
        image: ejemplo,
        document: alarmaPrincipalPDF,
        shortDescription: "Controlar y verificar el proceso de apertura de la Puerta 5 mediante la validación de claves randómicas generadas para cada transacción, evaluando los riesgos asociados al acceso y asegurando el cumplimiento de los procedimientos de seguridad definidos",
        description: "Controlar y verificar el proceso de apertura de la Puerta 5 mediante la validación de claves randómicas generadas para cada transacción, evaluando los riesgos asociados al acceso y asegurando el cumplimiento de los procedimientos de seguridad definidos, con el fin de prevenir vulnerabilidades, accesos indebidos y eventos que comprometan la integridad de tripulantes y valores en custodia ",
        functions: [
            "Recepción",
            "Despacho"
        ]
    },
    {
        id: 6,
        title: "Control acceso ATM",
        image: ejemplo,
        document: alarmaPrincipalPDF,
        shortDescription: "Contribuir a la seguridad de los cajeros automáticos mediante la custodia y verificación segura de las claves de alarma proporcionadas por el cliente,",
        description: "Contribuir a la seguridad de los cajeros automáticos mediante la custodia y verificación segura de las claves de alarma proporcionadas por el cliente, aplicando los controles establecidos para prevenir accesos no autorizados y reducir los riesgos asociados a la activación, desactivación o gestión de alarmas.",
        functions: [
            "Recepción",
            "Despacho"
        ]
    },
    {
        id: 7,
        title: "E pago",
        image: brk_Epago,
        document: alarmaPrincipalPDF,
        shortDescription: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure",
        description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit imperdiet eu augue ac, natoque netus fusce pretium. Luctus duis viverra pulvinar habitasse platea a urna aliquet, tortor nisl nibh massa sociosqu hac placerat class lacus, dapibus quis ultricies mollis augue tincidunt ad. Nulla primis dis tempus feugiat sodales litora pretium etiam, magnis ante tempor rhoncus habitant nibh cras nisl, scelerisque non posuere himenaeos lobortis porttitor montes.",
        functions: [
            "Recepción",
            "Despacho"
        ]
    },
    {
        id: 8,
        title: "Control Acceso Alta",
        image: brkBiometria,
        document: alarmaPrincipalPDF,
        shortDescription: "Contribuir a la gestión integral del riesgo mediante la supervisión remota de los procesos de apertura de sucursales, la identificación y evaluación de amenazas, el control de accesos a áreas de alta seguridad y la verificación",
        description: "Contribuir a la gestión integral del riesgo mediante la supervisión remota de los procesos de apertura de sucursales, la identificación y evaluación de amenazas, el control de accesos a áreas de alta seguridad y la verificación del cumplimiento de los estándares de seguridad electrónica, normas internas CRS y requisitos de retención de video, fortaleciendo la protección de las personas, los activos y las operaciones críticas de la organización.",
        functions: [
            "Recepción",
            "Despacho"
        ]
    }
];