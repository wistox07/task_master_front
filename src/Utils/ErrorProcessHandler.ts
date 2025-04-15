import { ApiErrorResponse } from "../Types/ShareTypes";
import { useLoginStore } from "../Stores/LoginStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export function useErrorProcessHandler() {
    const {logoutToken} = useLoginStore();
    const navigate = useNavigate();
    
  return (response:ApiErrorResponse) => {
      switch (response.code) {
        case 401:
          logoutToken();
          navigate("/login");
          break;
        default:
          toast.error(response.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
    }
  }

}
