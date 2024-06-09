import { createContext, useContext, useEffect, useState } from "react";

const TimeContext = createContext();

// eslint-disable-next-line react/prop-types
export const TimeProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeContext.Provider value={currentTime}>
      {children}
    </TimeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTime = () => useContext(TimeContext);
