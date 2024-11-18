import { Tipo_de_residuo } from "../models/Tipo_de_residuo.js";
import { Rols } from "../models/Roles.js";
import { User } from "../models/User.js";
import { Zona_de_reciclaje } from "../models/zona_de_reciclaje.js";

export const createTpo = async () => {
  try {
    const count = Tipo_de_residuo.count();
    if (count > 0) return;

    const tipoCreate = [
      {
        dimension: "6F22",
        material:
          "zinc, dióxido de manganeso, y una solución electrolítica alcalina o de cloruro de amonio.",
        contaminacion:
          "Pueden liberar metales pesados como mercurio, plomo o cadmio, los cuales son tóxicos para el suelo, el agua y la vida silvestre si se filtran al medio ambiente",
        procedimiento:
          "Los componentes metálicos, como el zinc y el manganeso, se separan y se reutilizan en la producción de nuevas baterías o productos metálicos. Sin embargo, los electrolitos alcalinos, que no son reutilizables, se neutralizan químicamente para evitar su impacto ambiental. Los restos de materiales no reciclables, como plásticos dañados o residuos químicos estabilizados, se encapsulan en concreto y se almacenan en celdas impermeables en rellenos sanitarios. Estas celdas se diseñan con capas de geomembrana y sistemas de drenaje para evitar filtraciones hacia el suelo o las aguas subterráneas",
      },
      {
        dimension: "R6",
        material:
          "dióxido de manganeso, zinc, carbón, y un electrolito alcalino",
        contaminacion:
          "Aunque las versiones modernas tienen menos mercurio que antes, aún pueden contaminar suelos y aguas con metales pesados y productos químicos si no se gestionan adecuadamente.",
        procedimiento:
          "Los componentes metálicos, como el zinc y el manganeso, se recuperan para su reutilización. Los plásticos y carbón que no pueden reciclarse son tratados en instalaciones controladas, donde se incineran para reducir su volumen. Los residuos restantes, incluidos los subproductos estabilizados químicamente, se depositan en celdas específicas de rellenos sanitarios. Estas celdas están protegidas con múltiples capas de impermeabilización y monitoreo constante de lixiviados, asegurando que los metales pesados no se liberen al medio ambiente",
      },
      {
        dimension: "R03",
        material:
          "dióxido de manganeso, zinc, carbón, y un electrolito alcalino",
        contaminacion:
          "Aunque las versiones modernas tienen menos mercurio que antes, aún pueden contaminar suelos y aguas con metales pesados y productos químicos si no se gestionan adecuadamente.",
        procedimiento:
          "Los componentes metálicos, como el zinc y el manganeso, se recuperan para su reutilización. Los plásticos y carbón que no pueden reciclarse son tratados en instalaciones controladas, donde se incineran para reducir su volumen. Los residuos restantes, incluidos los subproductos estabilizados químicamente, se depositan en celdas específicas de rellenos sanitarios. Estas celdas están protegidas con múltiples capas de impermeabilización y monitoreo constante de lixiviados, asegurando que los metales pesados no se liberen al medio ambiente",
      },
      {
        dimension: "LI-ION",
        material:
          "Litio, cobalto, níquel, manganeso y una solución electrolítica inflamable.",
        contaminacion:
          "Si no se reciclan, pueden liberar sustancias químicas inflamables o tóxicas, y los metales pesados pueden contaminar el agua y los ecosistemas.",
        procedimiento:
          "se trituran para recuperar metales valiosos como litio, cobalto y níquel. Los electrolitos inflamables y otros residuos peligrosos se neutralizan químicamente antes de su disposición final. Los materiales no reutilizables se encapsulan en concreto o materiales sellantes y se depositan en celdas aisladas en los rellenos sanitarios. Estas celdas cuentan con sistemas de detección de gases y fugas químicas, garantizando la seguridad a largo plazo y reduciendo el riesgo de incendio o contaminación",
      },
      {
        dimension: "Sin dimensiones",
        material: "",
        contaminacion: "",
        procedimiento: "",
      },
    ];
    await Tipo_de_residuo.bulkCreate(tipoCreate);
    const createTipo = Tipo_de_residuo.findAll;
    createTipo.forEach((tipo) => {
      console.log(
        "dimension " + tipo.dimension + ", material: " + tipo.material
      );
    });
  } catch (error) {
    console.error(error);
  }
};

export const createRols = async () => {
  try {
    const count = Rols.count();
    if (count > 0) return;

    const Roles = [
      { rol_name: "admin" },
      { rol_name: "trabajador" },
      { rol_name: "visitante" },
    ];
    await Rols.bulkCreate(Roles);
    const createRols = Rols.findAll;
    createRols.forEach((rols) => {
      console.log(
        "ID " + rols.id_rols + ", name: " + rols.rol_name
      );
    });
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  try {
    const adminFound = await User.findOne();
    if (adminFound) return;

    const adminRegistered = await User.create({
      user_name: "admin",
      poswarrd: "12345678",
      email: "admin@gmail.com",
      Rols: 1,
    });
    console.log("User: " + adminRegistered.user_name);
  } catch (error) {
    console.error(error);
  }
};

export const createZona = async () => {
    try{
        const lotes = [
            {  name: "Lote 1", latitude: 8.2405, longitude: -73.3287, advertencia: false, tipo_de_residuo: 1},
            {  name: "Lote 2", latitude: 8.2406, longitude: -73.3286, advertencia: false, tipo_de_residuo: 2},
            {  name: "Lote 3", latitude: 8.2407, longitude: -73.3288, advertencia: false, tipo_de_residuo: 3},
            { name: "Lote 4", latitude: 8.2410, longitude: -73.3290, advertencia: true, tipo_de_residuo: 4},
        ];
        await Zona_de_reciclaje.bulkCreate(lotes);
    }catch (error){
        console.error(error);
    }
};