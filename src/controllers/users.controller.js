import { pool } from "./../db.js"

export const get_users = async (req, res) => {
    try{
        
        let [rows] = await pool.query('select * from Usuarios');
        //res.send("mostrando usuarios")
        res.send({rows});
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }
        
}

export const get_user = async (req, res,next) => {
    try{
        
        //si quieres sacar el parametro del enpoint usa req.params
        //res.send("mostrando usuario");

        let [rows] = await pool.query("select * from Usuarios where u.id = ?", [req.params.id]);
        //if (rows.length <= 0) return res.status(404).json({ "data": "data not  found" })
          if (rows.length === 0) return next(); // → Va al app.use((req,res) => res.send(HTML 404))
    

            res.send(rows[0])
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }
    }
export const post_users = async (req, res) => {
    try{
        
        console.log(req.body);
        let { name, email } = req.body;
        let [rows] = await pool.query('insert into Usuarios(nombre, email) values(?,?)', [name, email]);
        //res.send("insertando usuarios")
        res.send({
            id: rows.insertId,
            name,
            email
        });
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }
    }
export const delete_users = async (req, res) => {
    try{
        
        let [result] = await pool.query("delete from Usuarios where id = ?", [req.params.id]);
        console.log(result)
        if (result.affectedRows > 0) {
//            res.send({ rows })
            return res.status(202).send("usuario eliminado")
        } else {
            return res.status(404).send("usuario no fue eliminado")
        }
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }
        
}

export const put_users = async (req, res) => {
    try{
        
        let {id} = req.params
        let {name,email} = req.body
        console.log(name,email);
        let [result] = await pool.query("update Usuarios set nombre= ? , email= ? where id= ?", [name, email, id]);
        console.log(result);
        if (result.affectedRows === 0) return res.status(404).json({ "user": "user not  found" });
        let [rows] = await pool.query("select * from Usuarios where id=?", [id]);
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }
}

export const patch_users = async (req, res) => {
    try{
        
        let {id} = req.params
        let {name,email} = req.body
        console.log(name,email);
        let [result] = await pool.query("update Usuarios set nombre= IFNULL(?,nombre) , email= IFNULL(?,email) where id= ?", [name, email, id]);
        console.log(result);
        if (result.affectedRows === 0) return res.status(404).json({ "user": "user not  found" });
        let [rows] = await pool.query("select * from Usuarios where id=?", [id]);
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }
}