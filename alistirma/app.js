import get from "./getData.js"

Promise.all([get(1)])
.then()
.catch(a=>console.log(a))

    