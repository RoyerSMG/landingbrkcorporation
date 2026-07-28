import {
    FaBuilding,
    FaTruck,
    FaPlane,
    FaVideo,
    FaUserShield,
    FaChartLine
} from "react-icons/fa";

export const capabilities = [

    {
        id: 1,
        title: "Seguridad de Sucursales",
        icon: FaBuilding,

        items: [
            "Aperturas seguras",
            "Gestión de alarmas",
            "Videoverificación",
            "Control de accesos"
        ]
    },

    {
        id: 2,
        title: "Seguridad de Flota",
        icon: FaTruck,

        items: [
            "Monitoreo transporte de valores",
            "Control de aperturas",
            "Gestión de eventos críticos"
        ]
    },

    {
        id: 3,
        title: "Operaciones Especiales",
        icon: FaPlane,

        items: [
            "Monitoreo aéreo",
            "Banco de la República",
            "Operaciones de alto riesgo"
        ]
    },

    {
        id: 4,
        title: "Inspección Remota",
        icon: FaVideo,

        items: [
            "Verificación de cumplimiento",
            "Auditorías remotas",
            "Cultura de control"
        ]
    },

    {
        id: 5,
        title: "Gestión de Identidades",
        icon: FaUserShield,

        items: [
            "Usuarios",
            "Biometría",
            "Perfiles de acceso"
        ]
    },

    {
        id: 6,
        title: "Inteligencia de Riesgos Asistida por IA",
        icon: FaChartLine,

        items: [
            "Indicadores",
            "Analítica de datos",
            "Mejora continua"
        ]
    }

];