/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Axios from "axios";

const IDWise = () => {
  const { loading, setLoading, status, setStatus, BASE } =
    useContext(UserContext);
  const { search } = useParams();

  async function FetchIDWise() {
    try {
      setLoading(true);
      const response = await Axios.post(`${BASE}/mains/${search}`);
      if (response.status === 200) {
        //
        setStatus("Completed");
      }
    } catch (err) {
      if (err.status === 404) {
        setStatus("No results found");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchIDWise();
  }, []);

  return (
    <div>
      <div className="main-container">
        <h1>Search</h1>
        <p>{search}</p>
      </div>
      <p>{status}</p>
    </div>
  );
};

export default IDWise;
