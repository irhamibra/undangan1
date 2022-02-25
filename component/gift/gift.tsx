const Gift = ({comment}: any) => {
    console.log('cek comment dikite', comment);
    
    return (
        <>
            <div className="container-sm">
                <section className="p-4 m-1">
                    <div className="row">
                        <div className="tittle mb-4">
                            <p className="title-section text-center fs-1 fw-bold">{'Kado Pernikahan'}</p>
                            <p className="description-section text-center">Bentuk suport dan kado undangan dapat dikirim kealamat berikut</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Gift;