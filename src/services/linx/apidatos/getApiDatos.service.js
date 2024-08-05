const { ApiDatos, ApiCabezera, SArticulosAtributos } = require('../../../db');

const { Op } = require('sequelize');

const getApiDatosService = async (params = {}) => {
    //
    // filtros
    let filtro = []
    const { IDINTERNOAPICABEZERA, TIPODATO, SKU, IDPUBLICADO } = params;
    if (SKU) {
        filtro.push({ SKU })
    }
    if (IDPUBLICADO) {
        filtro.push({ IDPUBLICADO })
    }
    if (IDINTERNOAPICABEZERA) {
        filtro.push({ IDINTERNOAPICABEZERA })
    }
    if (TIPODATO) {
        filtro.push({ TIPODATO })
    }

    //busqueda
    const found = await ApiDatos.findAll(
        {
            attributes: [
                'IDAPIDATOS',
                'IDINTERNODATO',
                'IDINTERNOVARIACION',
                'SKU',
                'IDPUBLICADO',
                'DESCRIPCION',
                'CANTIDAD',
                'PRECIOREAL',
                'PRECIOPUBLICADO',
                'ACTIVO',
                'LINK'
            ],
            include: [
                {
                    attributes: [
                        'IDAPIDATOS',
                        'IDINTERNODATO',
                        'IDINTERNOVARIACION',
                        'SKU',
                        'IDPUBLICADO',
                        'DESCRIPCION',
                        'CANTIDAD',
                        'PRECIOREAL',
                        'PRECIOPUBLICADO',
                        'ACTIVO',
                        'LINK'
                    ],
                    model: ApiDatos,
                    as: 'Variaciones',
                }
                ,
                {
                    attributes: [
                        'IDATRIBUTO'
                    ],
                    model: SArticulosAtributos,
                    as: 'Atributos',
                    include: [
                        {
                            attributes: [
                                'SKU',
                                'IDPUBLICADO',
                                'DESCRIPCION',
                                'IDINTERNOVARIACION'
                            ],
                            model: ApiDatos,
                            as: 'AtributosLeyenda',
                            include: [{
                                attributes: [
                                    'DESCRIPCION'
                                ],
                                model: ApiDatos,
                                as: 'AtributosBase'
                            }]
                        }
                    ]
                }
            ]

            ,
            where: filtro
        });

    //armado de objeto de salida    
    const count = found.length;
    const apiDatos = {
        records: count,
        filter: filtro,
        data: found,
    };
    return { apiDatos };
};

module.exports = getApiDatosService;
