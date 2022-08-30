import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react'

const RandomValue = createContext('')

// 模仿Redux的工作流
const inittState = { count: 0 }

const reducerFu = (state: any, action: any) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 }
    case 'dec':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const HooksDemo = () => {
  const [state, dispatch] = useReducer(reducerFu, inittState)
  const randomValue = useContext(RandomValue)

  useEffect(() => {
    console.log('子组件===仅在第一次Render时会执行')
  }, [])

  useEffect(() => {
    console.log('子组件===每次Render后都会执行')
  })

  useEffect(() => {
    console.log('子组件===每次Count变化之后会执行')
  }, [state.count])

  return (
    <div>
      <h3>HooksDemo</h3>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>加一处理</button>
      <button onClick={() => dispatch({ type: 'dec' })}>减一处理</button>
      <p>父组件共享的数据：{randomValue}</p>
    </div>
  )
}

const Intro: NextPage = () => {
  const [randomValue, setRandomValue] = useState('')

  useEffect(() => {
    console.log('父组件===仅在第一次Render时会执行')
  }, [])

  useEffect(() => {
    console.log('父组件===每次Render后都会执行')
  })

  useEffect(() => {
    console.log('父组件===每次randomValue变化之后会执行')
  }, [randomValue])

  return (
    <RandomValue.Provider value={randomValue}>
      <SEO title="React Hooks"></SEO>
      <div>
        <h3>父组件</h3>
        <p>sharedValue: {randomValue}</p>
        <button
          onClick={() => setRandomValue(Math.random().toString(36).slice(-8))}
        >
          生成随机的共享字符串
        </button>
      </div>
      <hr />
      <HooksDemo />
    </RandomValue.Provider>
  )
}

export default Intro
