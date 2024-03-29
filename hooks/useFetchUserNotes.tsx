import { useContext, useEffect } from "react";
import { AuthContext } from "../modules/auth/authContext";
import { v4 as uuidv4 } from "uuid";
import { CLIENT_IP_ADDRESS } from "../utils/constants";
import axios from "axios";
import { NoteContext } from "../modules/note/noteContext";
import { fetchAllNotes, getAllNotes } from "../modules/note/noteAction";

export default async () => {
  const { user } = useContext(AuthContext);
  const { dispatch: noteDispatch } = useContext(NoteContext);

  const fetchUserNotesOrCreateOne = async () => {
    if (user?.id) {
      try {
        const rawRes = await axios.get(
          `http://${CLIENT_IP_ADDRESS}:1991/data?user_id=${user.id}`
        );

        const res = rawRes.data;

        console.log({ res });

        if (res.length && noteDispatch) {
          console.log("The user has been registered!");
          const notes = res[0].notes;
          noteDispatch(fetchAllNotes(notes));
        } else {
          const newUserBody = {
            id: uuidv4(),
            user_id: user.id,
            notes: [],
          };

          const postNewUser = await fetch(`http://localhost:1991/data`, {
            method: "POST",
            body: JSON.stringify(newUserBody),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const createNewUserRes = await postNewUser.json();

          console.log(newUserBody);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchUserNotesOrCreateOne();
  }, [user?.id]);
};
