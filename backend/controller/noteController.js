import Note from "../models/Note.js";
//create note

export const createNote = async (req, res) => {
  
  try {
    const { title, description } = req.body;
    

    const note = await Note.create({
      title,
      description,
      user: req.user.id,
    });
    
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//get note
export const getNote = async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    // Check ownership
    if (note.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Note
export const deleteNote = async (req, res) => {
  console.log(req.user);
  
  try {
    const note = await Note.findById(req.params.id);
    

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    

    // Check ownership
    if (note.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await note.deleteOne();

    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
