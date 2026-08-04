import { useLocation } from "react-router-dom";
import { routes } from "../config/routes";


export function usePageMeta() {

  const location = useLocation();


  return (
    routes.find(
      (route) => route.path === location.pathname
    ) || routes[0]
  );

}