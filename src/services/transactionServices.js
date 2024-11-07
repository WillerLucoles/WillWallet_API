import transactionRespository from "../repositories/transactionRepository.js"

async function create(body, id) {
    if (!id) throw new Error('User ID is required');    
    return await transactionRespository.create({...body, userId: id});
    
}

async function findAllByUser(id) {
    if (!id) throw new Error('User ID is required'); 
    return await transactionRespository.findAllByUser(id);    
}

async function update(id, body, userId) {
    const transaction = await transactionRespository.findById(id);
    if (!transaction) {
        throw new Error("Transaction not found");
    }
    if (userId.toString() !== transaction.userId.toString()) {
        throw new Error("You can't update a transaction that is not yours");
    }
    return await transactionRespository.update(id, body);
}

async function deleteTransaction(id, userId) {
    const transaction = await transactionRespository.findById(id);
    if (!transaction) {
        throw new Error("Transaction not found");
    }
    if (userId.toString() !== transaction.userId.toString()) {
        throw new Error("You can't delete a transaction that is not yours");
    }
    return await transactionRespository.delete(id);
}

export default { create, findAllByUser, update, delete: deleteTransaction };