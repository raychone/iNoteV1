import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import CreateNote from "./CreateNote";
import Note from "./Note";

const NoteList = () => {
  const { notes, edit } = useContext(NoteContext);

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-white/90 py-5 px-5 my-5 bg-black/10 w-fit mx-auto rounded-xl backdrop-blur-sm">
        iNote
      </h1>
      <div className=" mx-auto grid gap-[1rem] grid-cols-1    lg:grid-cols-2   xl:grid-cols-3 ">
        {notes.map((note, index) =>
          edit === index ? (
            <CreateNote key={index} />
          ) : (
            <Note
              key={index}
              index={index}
              text={note}
            />
          )
        )}
        {edit === null ? <CreateNote /> : <></>}
      </div>
    </>
  );
};

export default NoteList;
