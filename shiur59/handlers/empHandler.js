


const saveEmp = (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const con = global.Application.get('CONNECTION')
    let sql = `INSERT INTO users 
                 ( first_name, last_name, email, password) 
                 VALUES ('${first_name}','${last_name}','${email}','${password}')`
    con.query(sql, (err, result, fields) => {
        if (err) {
            res.json(err)
        } else {
            res.json({ insertId: result.insertId, affectedRows: result.affectedRows })
        }
    })
}


module.exports = {
    saveEmp,
 

}
