import express from 'express';
const router = express.Router();
import notesController from '../controllers/notesController.js';
import auth from '../middleware/auth.js';

router.use(auth);

router.get('/', notesController.getNotes);
router.post('/', notesController.createNote);
router.put('/', notesController.updateNote);
router.delete('/', notesController.deleteNote);
router.get('/search', notesController.searchNotes);

export default router;