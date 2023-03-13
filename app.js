const root = document.getElementById("root")
let count = 0
let id 
let bamb = [] //7 bambs with random id
let arr = []
let innerNumber = 0
    function foo() {
        for ( let i=0; i<15; i++) {
            let r = Math.random()
            r= r*100+1
            let random = Math.ceil(r)
            bamb.push(random)
        }
    }

    foo();
    while(count < 100) {
        let div
        count++;
        div = document.createElement('div')
        root.appendChild(div);
        div.id = count
        div.innerText = count-1
        div.onclick = () => fool(div.id-1)
        // div.style.userSelect = "none"
        if (bamb.includes(count)) {
            div.innerText = "BOOM"
        }
        arr.push(div.innerText)
        div.style.color = "gray"
    }
    function fool (f) {
        let right = f+1
        let left = f-1
        let up = f-10
        let down = f+10
        let upRight = f-9
        let upLeft = f-11
        let downRight = f+11
        let downLeft = f+9

        console.log("f", f)
        console.log("right",right)
        console.log("left",left)
        console.log("up",up)
        console.log("down",down)
        console.log('upRight',upRight)
        console.log('upLeft',upLeft)
        console.log('downRight',downRight)
        console.log('downLeft',downLeft)
        //
        
        let clickedDiv = document.getElementById(f+1)
        
        let strRight =  right.toString().lastIndexOf("0")
        let strLeft =  left.toString().lastIndexOf("9")
        // let strUP = up.toString().lastIndexOf("9")
        // let strDown = down.toString().lastIndexOf("9")
        let strUpRight = upRight.toString().lastIndexOf("0")
        let strUpLeft = left.toString().lastIndexOf("9")
        let strDownRight = downRight.toString().lastIndexOf("0")
        let strDownLeft = left.toString().lastIndexOf("9")
        console.log(strLeft)
        console.log(strDownLeft)
        console.log(strDownRight)
        console.log(downLeft)
        console.log(typeof(left))
        console.log(typeof(upRight))

        // let sttrLeft = left.toString()
        // let sttrDownLeft = downLeft.toString()

// debugger
         result =       (arr[right] === "BOOM" && strRight !== 1) ? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[left] ==="BOOM " && strLeft !== 0)? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[left] === "BOOM" && strLeft !== 1 && strLeft !== 0) ? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[up] === "BOOM") ? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[down] === "BOOM") ? innerNumber=innerNumber+1 : innerNumber=innerNumber;

                        (arr[upRight] === "BOOM" && strUpRight !== 1) ? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[upLeft] === "BOOM" && strUpLeft !== 1) ? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[downRight] === "BOOM" && strDownRight !== 1 ) ? innerNumber=innerNumber+1 : innerNumber=innerNumber;
                        (arr[downLeft] === "BOOM" && strDownLeft !== 1 && strDownLeft !== 0) ? innerNumber=innerNumber+1 : innerNumber=innerNumber;

          
            
            if (clickedDiv.innerText === "BOOM") {
                clickedDiv.style.color = "black"
                clickedDiv.style.fontSize ="15px"
                
                clickedDiv.style.backgroundColor = "red"
            }if (clickedDiv.innerText === arr[f] && clickedDiv.innerText !== "BOOM") {
                clickedDiv.style.backgroundColor = "green"
                clickedDiv.style.color = "black"
                clickedDiv.style.fontSize = "36px"
                if (innerNumber>0) {
                    clickedDiv.innerText = innerNumber
                }else {
                    clickedDiv.innerText = 0
                }
            }
            innerNumber = 0
        }