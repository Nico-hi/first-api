import {pool} from './../db.js';

export const get_pedidos = async (req,res)=>{

    try{
        let [rows] = await pool.query('select * from Pedidos');
        res.send({rows})
    }catch(error){
        console.log("algo esta mal");
        
        return res.status(500).json({"message":"something goes wrong..."})
    }


}
export const get_pedido = async (req,res,next)=>{

    try{
        let [rows] = await pool.query('select * from Pedidos where id = ?',[req.params.id]);
        if (rows.length === 0) return next(); // → Va al app.use((req,res) => res.send(HTML 404))
//      if(rows.length <=0 )return res.status(404).json({"estado":"pedido no encontrado"})
        res.send({rows})
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }

    
}

export const post_pedidos = async (req,res)=>{

    try{
        let {usuario_id,total,estado}=req.body;
        let [rows] = await pool.query('insert into Pedidos(usuario_id, total, estado) values (?,?,?)',[usuario_id,total,estado ]);
            res.send({
            id:rows.insertId,
            usuario_id,
            total,
            estado
        });
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }

    
}


export const delete_pedidos = async (req,res)=>{

    try{
        let [result] = await pool.query("delete from Pedidos where id = ?",[req.params.id]);
        if(result.affectedRows>0){
            return res.status(200).send("pedido eliminado")
        }else{ 
            return res.status(404).send("pedido no fue eliminado")
        }
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }

}
export const put_pedidos = async (req,res)=>{

    try{
        let {id} = req.params
        let {usuario_id,total,estado} = req.body
        console.log(usuario_id,total,estado);
        let [result] = await pool.query("update Pedidos set usuario_id = ? , total = ? , estado = ?  where id= ? ", [usuario_id,total,estado,id]);
        console.log(result);
        if (result.affectedRows == 0) return res.status(404).json({ "pedido": "pedido wasn't updated" });
        let [rows] = await pool.query("select * from Pedidos where id= ?", [id]);
        res.json(rows[0]);

    }catch(error){
        return res.status(500).json({"message":"something goes wrong put"})
    }

}

export const patch_pedidos = async (req, res) => {
    try{
        let {id} = req.params
        let {usuario_id,total,estado} = req.body
        console.log(usuario_id,total,estado);
        let [result] = await pool.query("update Pedidos set usuario_id = IFNULL(?,usuario_id) , total = IFNULL(?,total) , estado = IFNULL(?,estado)  where id= ?", [usuario_id,total,estado,id]);
        console.log(result);
        if (result.affectedRows === 0) return res.status(404).json({ "pedido": "pedido wasn't updated" });
        let [rows] = await pool.query("select * from Pedidos where id=?", [id]);
        res.json(rows[0]);

    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }

}