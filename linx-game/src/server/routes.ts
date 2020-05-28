import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('./Controlador/Clientes',(req,res,next)=>{

    res.json('World');
});


router.get('./Controlador/Clientes',async(req,res)=>{
    try{
        let App = await DB.App.all();
        res.json(App); 
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    
})

export default router;
