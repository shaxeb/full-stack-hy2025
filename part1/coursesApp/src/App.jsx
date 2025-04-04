const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.name}</h1>
    )
  }

  const Part = (props) => {
    console.log(props)
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <Part name= {props.parts[0].name} exercises = {props.parts[0].exercises}/>
        <Part name= {props.parts[1].name} exercises = {props.parts[1].exercises}/>
        <Part name= {props.parts[2].name} exercises = {props.parts[2].exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <p>
        Total courses = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
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
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App