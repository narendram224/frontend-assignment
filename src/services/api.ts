import { API_PATH, BASE_API_URL } from "../utils/constant";

export const fetchSaasLabTableData = async () => {
  const response = await fetch(`${BASE_API_URL}/${API_PATH}`);
  return await response.json();
};
