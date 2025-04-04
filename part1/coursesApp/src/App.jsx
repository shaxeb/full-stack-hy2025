const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
  }

  const Part1 = (props) => {
    console.log(props)
    return (
      <p>
        {props.part1} {props.exercises1}
      </p>
    )
  }

  const Part2 = (props) => {
    console.log(props)
    return (
      <p>
        {props.part2} {props.exercises2}
      </p>
    )
  }
  
  const Part3 = (props) => {
    console.log(props)
    return (
      <p>
      {props.part3} {props.exercises3}
      </p>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part1 part1= {part1.name} exercises1 = {part1.exercises}/>
        <Part2 part2= {part2.name} exercises2 = {part2.exercises}/>
        <Part3 part3= {part3.name} exercises3 = {part3.exercises}/>
      </div>
    )
  }

  const Total = () => {
    return (
      <p>
        Total courses = {part1.exercises + part2.exercises + part3.exercises}
      </p>
    )
  }

  return (
    <div>
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Header course = {course}/>
      <Content />
      <Total/>
    </div>
  )
}

export default App