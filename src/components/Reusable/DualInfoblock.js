import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"


const DualInfoblock = ({heading,img}) => {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
  <p className="lead text-white mb-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae aliquam illo nihil dolore ipsam sapiente fuga doloribus veniam cumque vel deserunt officiis, voluptatibus quam voluptate, blanditiis unde? Aspernatur fuga quod voluptate atque. Animi doloribus similique aspernatur aperiam ex, culpa a, quo deserunt necessitatibus eos ipsa voluptates dicta, reprehenderit veritatis? Cumque dignissimos esse ad tempora vel saepe illum, accusantium soluta ipsum officia in aut quasi architecto! Minus eum deleniti voluptates fugiat soluta, vero ullam eaque tempora illum iure id laboriosam quos ea reiciendis nam, officia a ut nihil voluptatibus ducimus. Odit quisquam voluptatem molestiae fugit? Quo, odio? Reiciendis, est non?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores atque nam maxime illo amet voluptas eligendi eaque commodi id, voluptatem iste nihil repudiandae, veniam voluptatum officia odio debitis. Quisquam, illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque nobis illum numquam sint facilis adipisci impedit, similique exercitationem ducimus ex accusantium repellendus culpa ad consequatur quae praesentium velit ipsum sed iure. Ab quasi officia aspernatur ratione voluptatem. Nostrum repellendus dolores commodi assumenda dignissimos at molestias cupiditate earum unde dolorem?
  </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark" style={{width: "18rem"}}>
  <img className="card-img-top" src={img} alt="Image comes here" />
  <div className="card-body">
    <h5 className="card-title text-white">Just click photos</h5>
    <p className="card-text text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sequi, repellat provident possimus sit nihil quisquam necessitatibus numquam ad saepe molestias earum voluptatum placeat molestiae delectus voluptatem similique architecto. Dolores?</p>
    <Link to="#" className="btn btn-warning btn-block">{heading}</Link>
  </div>
</div> 
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default DualInfoblock
