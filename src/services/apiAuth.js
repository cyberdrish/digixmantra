import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  console.log({ fullName, email, password });

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    throw new Error(error.message); // Rethrow error for react-query to handle
  }
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  console.log("Fetching user data1...");
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  return data?.user;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  //1. update either fullname or the password
  let updateType;
  if (password) updateType = { password };
  if (fullName) updateType = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateType);

  if (error) throw new Error(error.message);

  if (!avatar) return data;
  //2. Update the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // 3.Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updatedUser;
}
