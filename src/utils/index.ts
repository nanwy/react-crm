import { useEffect } from 'react';
import { useState } from 'react';
export const useArray = <T>(initialVal: T[]) => {
  const [arr, setArr] = useState(initialVal)
  const add = (obj: T) => {
    setArr([...arr, obj])
  }
  const remove = (index: number) => {
    const temp = [...arr]
    temp.splice(index, 1)
    setArr(temp)
  }
  const clear = () => {
    setArr([])
  }
  return {
    value: arr,
    setArr,
    add,
    remove,
    clear
  }
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = (value: unknown, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay);
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounceValue
}