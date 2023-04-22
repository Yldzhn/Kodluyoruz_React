function Main({setDef,grev,setGrv,MainCheck,setMainCheck,grevCopy,setGrvCopy}){
 let objectArray=[];
 grev.forEach((v)=>objectArray.push(v.grv))

 function InputOnKeyDown(e){
        if(e.key==="Enter"){
            let x= e.target.value.trim()
            if(x&&!objectArray.includes(x)){
                setGrv([...grev,{grv:x,check:false}])
                e.target.value=""
                setDef('Hepsi')
            }
            else{
                e.target.value=""
                alert("Veri girişi yapmadınız veya olan bir görevi oluşturmaya çalışıyorsunuz")
            }
            
        }
    }   

    function  CheckBoxsState(i){
        const gorev = [...grevCopy];
        gorev[i].check =! gorev[i].check;
        setGrvCopy(gorev)
    }
    function MainCheckbox(e){
        const value=e.target.checked
        setMainCheck(value)
        Object.values(grevCopy).forEach(v=>v.check=!MainCheck)
    }

    return(
        <main className="row gy-2">
            <section className="col-12">
                <div className="input-group">
                    <span className="input-group-text">
                        <input className="form-check-input" onChange={MainCheckbox} type="checkbox"/>
                    </span>
                        <input id="grv" type="text" onKeyDown={InputOnKeyDown} className="form-control" />
                </div>
            </section >
            
            <section className="col-12">
                    <ul className="list-group">
                            {grevCopy.map((v,i)=>{
                                return(
                                    <li key={i} className="list-group-item">
                                        <input onChange={()=>{CheckBoxsState(i)}}  checked={v.check} className="form-check-input me-1 ms-1" type="checkbox"/>
                                        {
                                            v.check?
                                            <label onClick={()=>{grev.find(v)}} className="text-secondary text-opacity-50 text-break text-decoration-line-through">{v.grv}</label>
                                            :
                                            <label onClick={()=>{grev.find(v)}} className="text-light-emphasis text-break">{v.grv}</label>
                                        }
                                        <button onClick={()=>{
                                            setGrv(grev.filter((a)=>a!==v))
                                        }} className="btn-close float-end"></button>
                                    </li>
                                )
                            })}
                    </ul>
            </section>
        </main>
    )
}

export default Main