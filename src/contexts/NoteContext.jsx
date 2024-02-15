import { createContext, useEffect, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleAdd = () => {
    if (edit !== null) {
      setNotes(notes.map((note, index) => (index === edit ? message : note)));
      setEdit(null);
    } else if (message.trim() !== "") {
      setNotes([...notes, message]);
    }
    setMessage("");
  };

  useEffect(() => {
    console.log("Attempting to load notes from localStorage...");
    const data = localStorage.getItem("notes");
    console.log("Retrieved data from localStorage:", data);
    if (data) {
      setNotes(JSON.parse(data));
      console.log("Notes loaded successfully:", JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    if (notes.index === index) {
      setMessage("");
    }
  };

  const handleEdit = (index, text) => {
    setEdit(index);
    setMessage(text);
  };

  return (
    <NoteContext.Provider
      value={{
        message,
        setMessage,
        notes,
        setNotes,
        edit,
        setEdit,
        handleAdd,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
