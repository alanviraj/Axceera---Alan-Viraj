import React, { Component } from 'react';
/**Importing the CSS file */
import '../../CSS/Main.css'

/**Class Component */
class Footer_Main extends Component {
    render() {
        return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                                <h3>Pet Haven</h3>
                                <p style={{color:"whitesmoke"}}>Fast growing initiative with experts with knowladge care for animals. 
                                   “Animals are my friends...and I don't eat my friends.” “The greatness of a nation and its moral progress can 
                                    be judged by the way its animals are treated.” “Man is the cruelest animal.”
                                </p>
                            </div>
                            
                            
                            <div className="col-md-3 col-sm-6 col-xs-12 segment-four md-mb-30 sm-mb-30">
                                <h3>Contact Us</h3>
                                <p style={{color:"whitesmoke"}}>Contact us if you need any help</p>
                                <address>
                                    <li><a href="#"><i className="fas fa-at" ></i>&nbsp;Email &nbsp;&nbsp;&nbsp;  pethavens@gmail.com</a></li><br/>
                                    <li><a href="#"><i className="fas fa-phone-square"></i>&nbsp;Mobile &nbsp;  0776572518</a></li><br/>
                                    <li><a href="#"><i className="fas fa-tty"></i>&nbsp;Office &nbsp;&nbsp;&nbsp;  0354343262</a></li><br/>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-bottom-text" style={{color:"whitesmoke"}}> All right reserved by &copy; VIRAJ96.2021 </p>
            </footer>
        );
    }
}

export default Footer_Main;