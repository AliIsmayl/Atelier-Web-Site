import React from 'react'
import './NumberBox.scss'

function NumberBox() {
    return (
        <section id='numberBox'>
            <div className="card">
                <p>1</p>
                <h1>Client Consultation</h1>
                <span>Atelier Di Falco begins with a detailed consultation to understand the client's preferences, style, and needs.</span>
            </div>
            <div className="card">
                <p>2</p>
                <h1>Fabric Selection</h1>
                <span>The client is guided through a curated selection of premium fabrics, textures, and colors to find the perfect material for their bespoke garment.</span>
            </div>
            <div className="card">
                <p>3</p>
                <h1>Tailoring Process</h1>
                <span>The expert tailors meticulously take measurements and create a custom pattern for the client's garment,ensuring a perfect fit.</span>
            </div>
            <div className="card">
                <p>4</p>
                <h1>Final Fitting</h1>
                <span>The client is invited for a final fitting to ensure the garment is tailored to their specifications and preferences.</span>
            </div>
        </section>
    )
}

export default NumberBox