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

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
