import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [input, setInput] = React.useState("");
  const [data, setData] = React.useState({
    circle1: '#' + Math.floor(Math.random() * 16777215).toString(16),
    circle2: '#' + Math.floor(Math.random() * 16777215).toString(16),
    circle3: '#' + Math.floor(Math.random() * 16777215).toString(16),
    circle4: '#' + Math.floor(Math.random() * 16777215).toString(16),
    circle5: '#' + Math.floor(Math.random() * 16777215).toString(16)

  });


  // const [flag, setFlag] = useState({
  //   circle1: false
  // })




  const handleChange = (e) => {

    setInput(e.target.value)
  }

  console.log(input)

  const shoot = () => {
    if (input === "1") {
      document.getElementById("one").style.display = "none";
      let circle = document.createElement("div")
      circle.className = "pratik"
      circle.style.backgroundColor = data.circle1;
      document.querySelector(".empty").append(circle)

      circle.addEventListener("click", function () {
        document.querySelector("#one").style.display = "block"
        circle.style.display = "none"
      })
    }

    if (input === "2") {
      document.getElementById("two").style.display = "none";
      let circle = document.createElement("div")
      circle.className = "pratik"
      circle.style.backgroundColor = data.circle2;

      document.querySelector(".empty").append(circle)

      circle.addEventListener("click", function () {

        document.querySelector("#two").style.display = "block"
        circle.style.display = "none"
      })
    }

    if (input === "3") {
      document.getElementById("three").style.display = "none";
      let circle = document.createElement("div")
      circle.className = "pratik"
      circle.style.backgroundColor = data.circle3;

      document.querySelector(".empty").append(circle)

      circle.addEventListener("click", function () {

        document.querySelector("#three").style.display = "block"
        circle.style.display = "none"
      })
    }

    if (input === "4") {
      document.getElementById("four").style.display = "none";
      let circle = document.createElement("div")
      circle.className = "pratik"
      circle.style.backgroundColor = data.circle4;

      document.querySelector(".empty").append(circle)

      circle.addEventListener("click", function () {

        document.querySelector("#four").style.display = "block"
        circle.style.display = "none"
      })
    }

    if (input === "5") {
      document.getElementById("five").style.display = "none";
      let circle = document.createElement("div")
      circle.className = "pratik"
      circle.style.backgroundColor = data.circle5;

      document.querySelector(".empty").append(circle)

      circle.addEventListener("click", function () {

        document.querySelector("#five").style.display = "block"
        circle.style.display = "none"
      })
    }
  }

  const colorchange = () => {
    document.querySelector("#one").style.backgroundColor = data.circle1
    document.querySelector("#two").style.backgroundColor = data.circle2;
    document.querySelector("#three").style.backgroundColor = data.circle3;
    document.querySelector("#four").style.backgroundColor = data.circle4;
    document.querySelector("#five").style.backgroundColor = data.circle5;
  }

  useEffect(() => {
    colorchange()
  }, [])

  return (
    <>
      <div className="container">
        <div className='mega'>

          <div className='empty'></div>

          <div className='right'>

            <div id='one' className='circle' ></div>
            <div id='two' className='circle'></div>
            <div id='three' className='circle'></div>
            <div id='four' className='circle'></div>
            <div id='five' className='circle'></div>

          </div>
        </div>
        <input onChange={(e) => handleChange(e)} type="number" />
        <button onClick={() => shoot()}>Shoot</button>
      </div>
    </>
  );
}

export default App;