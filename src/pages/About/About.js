import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const About = () => {
    const history = useHistory()
    return (
        <div>
            <div className="card-header"> About Us </div>
            <div className="card-body pt-3">
                <div className="text-center">
                    <img src="https://worktrialf.herokuapp.com/assets/images/profile.jpg" width="250" alt="" />
                </div>
                <div className="text-center mt-5">
                    <span className="d-block">
                        Developed by:
                    </span>
                    <h3>Vikas Garg</h3>
                    <p className="mb-1">@vikasgarg</p>
                    <Link to="/">www.bit.ly/vikasgarg</Link>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
            </div>
        </div>
    )
}

export default About
