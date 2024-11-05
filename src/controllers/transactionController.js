import transactionService from "../services/transactionServices.js";


async function create(req, res) {
    const body = req.body;
    const { _id: id } = res.locals.user;

    try{
        const transaction = await transactionService.create(body, id);
        return res.status(210).send(transaction);
    } catch (err){
        return res.status(409).send(err.message);
    }    
}

async function findAllByUser(req, res) {
    const {_id: id} = res.locals.user;
    try{
        const transaction = await transactionService.findAllByUser(id);
        return res.send(transaction);
    } catch (err){
        res.status(500).send(err.message);
    } 
}


export default {create, findAllByUser};