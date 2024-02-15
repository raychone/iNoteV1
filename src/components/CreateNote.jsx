import { NoteContext } from "../contexts/NoteContext";
import { useContext } from "react";

const CreateNote = () => {
  const { message, setMessage, notes, setNotes, handleAdd } =
    useContext(NoteContext);

  const char = 300;
  const charLimit = char - message.length;

  return (
    <div className="flex flex-col justify-between bg-green-200/70  w-[380px] lg:w-[420px] xl:w-[450px]  h-[320px]  p-4 rounded-xl gap-2 px-2 mx-auto backdrop-blur-lg">
      <textarea
        className="text-mx outline-none whitespace-pre-wrap break-words resize-none border-none bg-transparent w-full h-[300px] px-2"
        name="note"
        id="note"
        cols="10"
        rows="5"
        placeholder="Type new note..."
        maxLength={300}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="flex justify-between items-center">
        <span>{charLimit} characters left.</span>
        <button
          onClick={handleAdd}
          className="font-semibold text-lg px-2 py-1 border-2 border-black/20 rounded-xl text-black hover:bg-black/10"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
