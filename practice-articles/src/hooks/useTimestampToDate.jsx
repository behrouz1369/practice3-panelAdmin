import { useState, useEffect } from 'react';

const useTimestampToDate = (timestamp) =>{
  const [date, setDate] = useState(new Date(timestamp));
  const [time, setTime] = useState(new Date(timestamp));

  useEffect(() => {

  }, [timestamp]);

  return {date , time};
}

export default useTimestampToDate;
