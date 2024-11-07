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

async function update(req, res) {
    const { id } = req.params;
    const { _id: userId } = res.locals.user;
    const body = req.body;
    
    console.log("ID da Transação:", id);
    console.log("Corpo da Requisição:", body);
    console.log("User ID autenticado:", userId);
    
    try {
        await transactionService.update(id, body, userId);
        return res.status(200).send("Transação atualizada com sucesso.");
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export default {create, findAllByUser, update};