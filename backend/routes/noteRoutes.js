import express from 'express';
import { createNote, deleteNote, getNote, updateNote } from '../controller/noteController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const noteRouter = express.Router();
noteRouter.post('/create',authMiddleware,createNote)
noteRouter.get('/get',authMiddleware,getNote)
noteRouter.put('/update/:id',authMiddleware,updateNote)
noteRouter.delete('/delete/:id',authMiddleware, deleteNote);

export default noteRouter