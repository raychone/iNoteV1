import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

const Note = ({ index, text }) => {
  const { handleDelete, handleEdit } = useContext(NoteContext);
  return (
    <div
      key={index}
      className="flex flex-col justify-between bg-white/60 w-[380px] lg:w-[420px] xl:w-[450px]  h-[320px] p-4 rounded-xl gap-2 px-2 mx-auto backdrop-blur-md"
    >
      <div className="whitespace-pre-wrap break-words">{text}</div>
      <div className="flex justify-end gap-2 items-center">
        <button
          className="font-semibold text-lg px-2 py-1 border-2 border-black/20 rounded-xl text-black hover:bg-black/10"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
        <button
          className="font-semibold text-lg px-2 py-1 border-2 border-black/20 rounded-xl text-black hover:bg-black/10"
          onClick={() => handleEdit(index, text)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Note;
