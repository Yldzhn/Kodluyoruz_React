import axios from "axios"

const getD=(number)=>{
    return new Promise(async(resolve, reject)=>{
        const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+number)
        const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts/"+number)
        
        resolve(console.log("User: ",user)+console.log("Posts: ",post))
        reject("Bir hata bulundu")
   
    })

}
export default getD
// export{topla,cikar}