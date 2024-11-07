import mongoose from 'mongoose';
import TransactionSchema from "../schemas/transaction.js";

async function create(data) {
    return TransactionSchema.create(data);    
};

async function findAllByUser(id) {
    return await TransactionSchema.find({userId: id});
    
};


async function update(id, data) {
    return await TransactionSchema.updateOne({ _id: new mongoose.Types.ObjectId(id) }, data);
}

async function findById(id) {
    return await TransactionSchema.findById(new mongoose.Types.ObjectId(id));
}

export default {create, findAllByUser, findById, update};