import { useContext, useEffect } from "react";
import { AuthContext } from "../modules/auth/authContext";
import { v4 as uuidv4 } from "uuid";

export default async () => {
  const { user } = useContext(AuthContext);

  const fetchUserNotesOrCreateOne = async () => {
    if (user?.id) {
      const rawRes = await fetch(
        `http://localhost:1991/data?user_id=${user.id}`
      );
      const res = await rawRes.json();

      if (res.length) {
        console.log("The user has been registered!");
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
    }
  };

  useEffect(() => {
    fetchUserNotesOrCreateOne();
  }, [user?.id]);
};
