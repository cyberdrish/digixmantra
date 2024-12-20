import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("User account successfually updated");
      console.log("{ user }");

      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      console.log("useUpdate");
      toast.error(err.message);
    },
  });
  return { updateUser, isUpdating };
}
