// DECLARATION
function createPreloader( rootElement = document.body ) {
    const frames = ["◝", "◞", "◟", "◜"]
    let i=0
    setInterval(() => {
      rootElement.innerHTML = `${frames[i]}`  
      i = i >= 3 ? 0: i+1
    }, 100)
    
}
 // Execution
 // time / call back
// createPreloader( content )
// 1. clouser solution
// a) setTimeout(function () { createPreloader(content) } , 1000)
// b) setTimeout( () =>  createPreloader(content)  , 1000)

// 2. parameter binding
//
setTimeout( createPreloader.bind(undefined, content)  , 1000)