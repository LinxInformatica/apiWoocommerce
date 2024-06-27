const { ApiCabezera } = require('../../../db');

const { Op } = require('sequelize');

const putApiCabezeraService = async (params = {}) => {
    const {where,fields}=params
    console.log(where,fields)
    //
    // filtros
    await ApiCabezera.update(
        fields,
        {
            where: where
        },
    );

    return { ApiCabezera };
};

module.exports = putApiCabezeraService;
