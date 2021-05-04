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