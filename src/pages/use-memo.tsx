/* eslint-disable react/display-name */
import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
  useCallback,
  memo,
} from 'react'

const Child1 = memo(({ onClick }: any) => {
  useEffect(() => {
    console.log('子组件1===仅在第一次Render时会执行')
  }, [])

  useEffect(() => {
    console.log('子组件1===每次Render后都会执行')
  })

  return (
    <div>
      <h3>Child1</h3>
      <button onClick={onClick}>Count1++</button>
    </div>
  )
})

const Child2 = memo(({ onClick }: any) => {
  useEffect(() => {
    console.log('子组件2===仅在第一次Render时会执行')
  }, [])

  useEffect(() => {
    console.log('子组件2===每次Render后都会执行')
  })

  return (
    <div>
      <h3>Chile2</h3>
      <button onClick={onClick}>Count2++</button>
    </div>
  )
})

const UseMemo: NextPage = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const onClick1 = () => {
    setCount1(count1 + 1)
  }

  const onClick2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <>
      <SEO title="useMemo"></SEO>
      <div>
        <h3>父组件</h3>
        <p>count1: {count1}</p>
        <p>count2: {count2}</p>
      </div>
      <hr />
      <Child1 onClick={onClick1} />
      <Child2 onClick={onClick2} />
    </>
  )
}

export default UseMemo
