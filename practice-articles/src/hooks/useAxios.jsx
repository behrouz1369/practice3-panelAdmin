import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosCRUD = (initialUrl, initialData = []) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  const postData = async (newData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, newData);
      setData([...data, response.data]);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  const putData = async (id, updatedData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(`${url}/${id}`, updatedData);
      setData(data.map((item) => (item.id === id ? response.data : item)));
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  const deleteData = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return { data, loading, error, postData, putData, deleteData };
};

export default useAxiosCRUD;
