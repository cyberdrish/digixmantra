import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/homepage");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("provided email or password are incorrect ");
    },
  });
  return { login, isLoading };
}
