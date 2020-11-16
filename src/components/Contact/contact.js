import React from 'react'
import Heading from "../Reusable/Heading"

function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"/>
<div class="col-10 col-sm-8 mx-auto">
    <form action="https://formspree.io/f/siddarth.bhura@btech.christuniversity.in" method="POST">
        <div class="form-group">
            <input type="text" name="name" id="name" placeholder="Your Name" className="form-control" />
        </div>
        <div class="form-group">
            <input type="email" name="email" id="email" placeholder="Your Email" className="form-control" />
        </div>
        <div class="form-group">
            <input type="text" name="mobile" id="mobile" placeholder="Your Mobile No" className="form-control" />
        </div>
        <div class="form-group">
            <textarea type="text" name="description" id="description" placeholder="Your Message" className="form-control" />
        </div>
        <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
    </form>
</div>
        </section>
    )
}

export default Contact
