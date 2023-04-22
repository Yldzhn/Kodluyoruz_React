import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import React,{useState,useEffect} from "react"
function MainComp() {
  const [gorev,setGorev]=useState([{grv:"3 Saat Js Çalış",check:true},{grv:"Sistem bakımları yapılacak",check:false}])
  let [def,setDef] =useState('Hepsi')
  const [grvCopy,setGrvCopy]=useState([...gorev])

  useEffect(()=>{
    setGrvCopy([...gorev])
  },[gorev])

  function filt(e){
    const  val=e.target.value
    let filterArray=[]
    if(val==="Tamamlandı"){
      filterArray=gorev.filter(v=>v.check===true)
      setGrvCopy([...filterArray])
      setDef(val)
    }
    else if(val==="Tamamlanmadı"){
      console.log(e.target.value)
      filterArray=gorev.filter(v=>v.check===false)
       setGrvCopy([...filterArray])
       setDef(val)
    }
    else if(val==="Hepsi"){
      filterArray=[...gorev]
       setGrvCopy([...filterArray])
       setDef(val)
    }
    // console.log(grvCopy)
  }
  // console.log(grvCopy)
  const [MainCheckboxState,setMainCheckboxState]=useState(false)
  // const [ChildCheckboxState,setChildCheckboxState]=useState(false)
  return (
    <div>
      <Header/>
      <Main
       grev={gorev}
       setGrv={setGorev}
       grevCopy={grvCopy}
       setGrvCopy={setGrvCopy}
       MainCheck={MainCheckboxState}
       setMainCheck={setMainCheckboxState}
       setDef={setDef} 
       />
      <Footer
      grev={gorev}
      setGrv={setGorev}
      filt={filt}
      def={def}
      />
    </div>
  );
}

export default MainComp
