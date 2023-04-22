function Footer({grev,setGrv,filt,def}){
    function liClear(){
        setGrv([])
    }
    return(
        <footer className="row mt-2" >
            <article className="d-flex justify-content-between align-items-center">
                <section className="col-4 text-start">
                    <label className="text-light-emphasis">Toplam Görev: {grev.length}</label>
                </section>
                <section className="col-5">
                <select onInput={filt} value={def} className="form-select text-center text-light-emphasis form-select-sm">
                    <option value="Hepsi">Hepsi</option>
                    <option value="Tamamlandı">Tamamlandı</option>
                    <option value="Tamamlanmadı">Tamamlanmadı</option>
                </select>
                </section>
                <section className="col-3 text-end">
                    <button onClick={liClear} className="btn text-light-emphasis btn-dark btn-sm">Listeyi Temizle</button>
                </section>
            </article>
        </footer>
    )
}

export default Footer