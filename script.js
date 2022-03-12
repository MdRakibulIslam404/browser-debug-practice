// 1. console.log with setTimeout
setTimeout(() => {
    console.log("I am come after 3.5 seconds");
}, 3500);

// 2. get user input with prompt and addition 200
const add = () => {
    const promptValue = prompt("Enter a number for addition with 200");
    const number = parseFloat(promptValue);
    // console.log(number);
    if (number > 0) {
        alert(number + 200);
    }
    else {
        alert("Please input a number above zero '0'");
    }
};

// 3. website location with confirm and console log
const webLocation = () => {
    const webLocation = confirm("Are you see your web location in console tab ???");
    if (webLocation === true) {
        console.log(location.href); // window.location and location is same
    }
};

// 4. what is Cookies
document.getElementById("cookies").innerText = `// What is Cookies ? :: Cookies is a browser API. Cookies does tracking and authentication. When I search a product or talking my friend about any product, then, I see ad about this product/site, it's cookies. Cookies direct send data to server. type 'document.cookie' for get cookies from browser.`;

// 5. local storage vs session storage
document.getElementById("localVsSession").innerText = `// Local storage vs Session storage :: Local and session storage both are browser api, session storage stored data until the browser or site closes. But local storage stored data as long as I need. local and session storage both are object, and type localStorage / sessionStorage or window.localStorage / window.sessionStorage for get from browser.`;

// 6. how does run js in browser
document.getElementById("jsBrowser").innerText = `// js run in chrome browser with v8 engine. v8 engine convert js code to bytecode. And converts line by line in a timely manner, that means, Just in time compiler(JIT)`;

// 7 . about asynchronous
document.getElementById("asynchronous").innerText = `// Asynchronous means :: When js code run then, some code go to queue and the code in the queue is run after all synchronous code finished run. Asynchronous example: fetch(data load), setTimeOut, setInterval, etc.`;

// 8. about event loop
document.getElementById("eventLoop").innerText = `// Event loop is js run time model / system. js code is stays in heap. some js code is synchronous and some js code is asynchronous. synchronous code is go stacks and run. And asynchronous code goes inside queue and run after all synchronous code finished run.`;