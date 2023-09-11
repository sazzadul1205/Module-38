import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './inger'
import BookStore from './bookStore'

function App() {
  const actors = ['Sakib', 'Shoriful Raj', 'Dipjol', 'Manna', 'Chonchol', 'Josim', 'Rubel', 'Salman shah'];

  const books = [
    {id: 1, name: 'Physics', price: 200},
    {id: 2, name: 'Maths', price: 190},
    {id: 3, name: 'Biology', price: 150},
    {id: 4, name: 'Chemistry', price: 220},
  ]

  const singers = [
    { id: 1, name: 'Dr. Mohfizur', age: 68},
    { id: 2, name: 'Eva Rahman', age: 38},
    { id: 3, name: 'Shuvro Dev', age: 58},
    { id: 4, name: 'pritom', age: 28},
  ]

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={'Bappa raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="learn JSX"
        isDone={false}></Todo> */}

      {/* <Student grade='7' score='99'></Student>
      <Student grade={8} score={87}></Student>
      <Student></Student>
      <Device name='laptop' price='545'></Device>
      <Device name='mobile' price='23'></Device>
      <Device name='watch' price='3000'></Device>
      <Person></Person>
      <Person></Person>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 24;
  const money = 20
  const person = { name: 'sakib', age: 12 };
  return <h3>I am {person.name}, and my age is {age + money}</h3>
}

const { grade, score } = { grade: '7', marks: 99 }


function Student({ grade, score = 'Fail' }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Developer corner</h5>
      <p>code: </p>
    </div>
  )
}

export default App
