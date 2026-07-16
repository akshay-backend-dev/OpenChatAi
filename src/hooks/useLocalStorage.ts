"use client";

import { useEffect, useState } from "react";


export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {

  const [value, setValue] = useState<T>(
    initialValue
  );


  const [isLoaded, setIsLoaded] = useState(false);



  // Get data from localStorage
  useEffect(() => {

    try {

      const storedValue =
        localStorage.getItem(key);


      if (storedValue) {

        setValue(
          JSON.parse(storedValue)
        );

      }

    } catch (error) {

      console.error(
        "LocalStorage read error:",
        error
      );

    } finally {

      setIsLoaded(true);

    }


  }, [key]);



  // Update localStorage
  const updateValue = (
    newValue: T
  ) => {

    try {

      setValue(newValue);


      localStorage.setItem(
        key,
        JSON.stringify(newValue)
      );


    } catch (error) {

      console.error(
        "LocalStorage write error:",
        error
      );

    }

  };



  return {
    value,
    setValue: updateValue,
    isLoaded,
  };

}