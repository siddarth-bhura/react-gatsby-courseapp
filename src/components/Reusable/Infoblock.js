import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

function Infoblock({heading}) {
    return (
<section className="bg-theme my-5 py-4">
<div class="container">
    <Heading title={heading}/>
    <div class="row">
        <div class="col-10 col-sm-8 mx-auto text-center">
            <p class="lead text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, earum. Deleniti alias blanditiis asperiores debitis! Suscipit tempora, nam inventore eveniet, voluptas cum nemo magni reprehenderit, adipisci eum quas fugiat consectetur dicta officiis. Fugit dicta accusamus nostrum ipsam consequuntur! Ex pariatur tempora cumque praesentium quas tenetur, inventore beatae consequatur, porro ea eius nisi placeat! Inventore distinctio quos amet consectetur, cumque sit.
            </p>
            <Link to="/about">
                <button className="btn btn-warning btn-lg">
                    {heading}
                </button>
            </Link>
        </div>
    </div>
</div>
</section>
    )
}

export default Infoblock
