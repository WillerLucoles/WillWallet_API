import transactionService from "../services/transactionServices.js";


async function create(req, res) {
    const body = req.body;
    const id = '672442cf3ca655d99c36f661'

    try{
        const transaction = await transactionService.create(body, id);
        return res.status(210).send(transaction);
    } catch (err){
        res.status(409).send(err.message);
    }    
}

export default {create};