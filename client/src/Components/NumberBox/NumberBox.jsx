import React from 'react'
import './NumberBox.scss'

function NumberBox() {
    return (
        <section id='numberBox'>
            <div className="card">
                <h1>1</h1>
                <p>Client Consultation</p>
                <span>Atelier Di Falco begins with a detailed consultation to understand the client's preferences, style, and needs.</span>
            </div>
            <div className="card">
                <h1>2</h1>
                <p>Fabric Selection</p>
                <span>The client is guided through a curated selection of premium fabrics, textures, and colors to find the perfect material for their bespoke garment.</span>
            </div>
            <div className="card">
                <h1>3</h1>
                <p>Tailoring Process</p>
                <span>The expert tailors meticulously take measurements and create a custom pattern for the client's garment,ensuring a perfect fit.</span>
            </div>
            <div className="card">
                <h1>4</h1>
                <p>Final Fitting</p>
                <span>The client is invited for a final fitting to ensure the garment is tailored to their specifications and preferences.</span>
            </div>
        </section>
    )
}

export default NumberBox