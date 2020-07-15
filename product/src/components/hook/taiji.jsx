import React,{useEffect} from 'react'

export default  function Taiji(){
    useEffect(()=>{
        // 画黑色半圆
        var c = document.getElementById("canvas")
        var cv = c.getContext('2d')
        cv.beginPath()
        cv.arc(500, 500, 150, 0.5 * Math.PI, 1.5 * Math.PI, false)
        cv.fillStyle = "black"
        cv.fill()
        // 白色半圆
        cv.beginPath()
        cv.arc(500, 500, 150, 0.5 * Math.PI, 1.5 * Math.PI, true)
        cv.fillStyle = "white"
        cv.fill()
        // 画出一个小的白色半圆，盖在黑色上面
        cv.beginPath()
        cv.arc(500, 425, 75, 0.5 * Math.PI, 1.5 * Math.PI, false)
        cv.fillStyle = "white"
        cv.fill()
        // 画出一个小的黑色半圆，盖在白色大半圆上
        cv.beginPath()
        cv.arc(500, 575, 75, 0.5 * Math.PI, 1.5 * Math.PI, true)
        cv.fillStyle = "black"
        cv.fill()
        // 分别画一个黑色小圆和一个白色小圆
        cv.beginPath()
        cv.arc(500, 425, 20, 0, 2 * Math.PI, false)
        cv.fillStyle = "black"
        cv.fill()
        cv.beginPath()
        cv.arc(500, 575, 20, 0, 2 * Math.PI, false)
        cv.fillStyle = "white"
        cv.fill()
    })
    return(
        <div className="canvas-container" style={{'backgroundColor': 'steelblue'}}>
            <canvas id="canvas" width="700" height="700">

            </canvas>
        </div>
    )
}