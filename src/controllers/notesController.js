import noteModel from '../models/noteModel.js';

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.getNotesByUser(req.user.userId);
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, text } = req.body;
    if (!title || !text || title.length > 50 || text.length > 300) {
      return res.status(400).json({ message: 'Invalid title or text length.' });
    }
    const note = await noteModel.createNote(req.user.userId, title, text);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id, title, text } = req.body;
    if (!id || !title || !text || title.length > 50 || text.length > 300) {
      return res.status(400).json({ message: 'Invalid data.' });
    }
    const note = await noteModel.updateNote(id, req.user.userId, title, text);
    if (!note) {
      return res.status(404).json({ message: 'Note not found.' });
    }
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'Note id required.' });
    }
    const note = await noteModel.deleteNote(id, req.user.userId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found.' });
    }
    res.status(200).json({ message: 'Note deleted.' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const searchNotes = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ message: 'Search query required.' });
    }
    const notes = await noteModel.searchNotesByTitle(req.user.userId, q);
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
}; 
export default {
  searchNotes,
  deleteNote,
  updateNote,
  createNote,
  getNotes

}