import transactionRespository from "../repositories/transactionRepository.js"

async function create(body, id) {
    if (!id) throw new Error('User ID is required');    
    return await transactionRespository.create({...body, userId: id});
    
}
export default {create};