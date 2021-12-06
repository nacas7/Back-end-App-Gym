const { executeQuery, executeQueryOne } = require('../utils')

const getAll = () => {
    // return new Promise((resolve, reject) => {

    //     db.query('select * FROM profesores', (err, result) => {
    //         if (err) {
    //             reject(err);
    //         } else {
    //             resolve(result);
    //         }
    //     });
    // })

    return executeQuery('select * FROM profesores');
};

const createProfesor = (({ nombre, experiencia }) => {
    // return new Promise((resolve, reject) => {
    //     db.query('INSERT INTO profesores (nombre, experiencia) VALUES (?,?)', [nombre, experiencia],
    //         (err, result) => {
    //             if (err) return reject(err); resolve(result);
    //         })
    // })

    return executeQuery('INSERT INTO profesores (nombre, experiencia) VALUES (?,?)', [nombre, experiencia])
});

const getById = (profesorId) => {
    // return new Promise((resolve, reject) => {
    //     db.query('select * from profesores where id =?', [profesorId], (err, result) => {
    //         if (err) return reject(err);
    //         if (result.length === 0) return resolve(null)
    //         resolve(result[0])
    //     })
    // })

    return executeQueryOne('select * from profesores where id =?', [profesorId])
};

const deleteById = (profesorId) => {
    // return new Promise((resolve, reject) => {
    //     db.query('delete from clientes where id =?', [profesorId], (err, result) => {
    //         if (err) return reject(err);
    //         resolve(result);
    //     })

    // })

    return executeQuery('delete from clientes where id =?', [profesorId])

};

const upDate = ((profesorId, { nombre, experiencia }) => {
    // return new Promise((resolve, reject) => {
    //     db.query(
    //         'UPDATE profesores SET nombre = ?, experiencia = ? WHERE id = ?'),
    //         [nombre, experiencia, profesorId],
    //         (err, result) => {
    //             if (err) return reject(err)
    //             resolve(result)
    //         }

    // })
    return executeQuery('UPDATE profesores SET nombre = ?, experiencia = ? WHERE id = ?', [nombre, experiencia, profesorId])
})

module.exports = {
    getAll,
    createProfesor,
    getById,
    deleteById,
    upDate

}