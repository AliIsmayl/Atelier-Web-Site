import React from 'react'
import './NumberBox.scss'

function NumberBox() {
    return (
        <section id='numberBox'>
            <div className="card">
                <p>1</p>
                <span className='span1'>Client Consultation</span>
                <span className='span2'>Atelier Di Falco begins with a detailed consultation to understand the client's preferences, style, and needs.</span>
            </div>
            <div className="card">
                <p>2</p>
                <span className='span1'>Fabric Selection</span>
                <span className='span2'>The client is guided through a curated selection of premium fabrics, textures, and colors to find the perfect material for their bespoke garment.</span>
            </div>
            <div className="card">
                <p>3</p>
                <span className='span1'>Tailoring Process</span>
                <span className='span2'>The expert tailors meticulously take measurements and create a custom pattern for the client's garment,ensuring a perfect fit.</span>
            </div>
            <div className="card">
                <p>4</p>
                <span className='span1'>Final Fitting</span>
                <span className='span2'>The client is invited for a final fitting to ensure the garment is tailored to their specifications and preferences.</span>
            </div>
        </section>
    )
}

export default NumberBox