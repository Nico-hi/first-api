import {pool} from './../db.js';

export const index_controller = async (req,res)=>{ 
    try{
            // con result me extrae los reslutados obviamente xD no si tienes algo llamado result
    let [result] = await pool.query('select \'it works\' as result')
    res.json(result)
    }catch(error){
        return res.status(500).json({"message":"something goes wrong"})
    }

}