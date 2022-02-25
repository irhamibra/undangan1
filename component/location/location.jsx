import React from 'react';

export default function Location() {
    return (
        <>
            <div className="container-sm">
                <section className="p-4">
                    <div className="row">
                        <div className="tittle mb-4">
                            <p className="text-center fs-3 fw-bold">Buku Tamu Kehadiran</p>
                            <p className="text-center">Gunakan google maps untuk navigasi ke lokasi acara</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510664.0795358248!2d100.86272215570638!3d-0.6480415368003694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b1cbee5c4166b%3A0x3848747ced671a54!2sKabupaten%20Sijunjung%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1642957279351!5m2!1sid!2sid" width="600" height="450" style={{"border:0;" allowfullscreen="" loading="lazy"}}></iframe> */}
                        <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510664.0795358248!2d100.86272215570638!3d-0.6480415368003694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b1cbee5c4166b%3A0x3848747ced671a54!2sKabupaten%20Sijunjung%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1642957279351!5m2!1sid!2sid" width="600" height="450"></iframe>
                    </div>
                </section>
            </div>
        </>
    )
}
