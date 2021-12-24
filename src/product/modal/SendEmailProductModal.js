import React from "react";
import { Button, Modal, ModalBody} from "reactstrap";

class SendEmailProductModal extends React.Component{
	constructor(props) {
    super(props);
    this.state = {};
  }
	
	render() {
		return (					
			<Modal isOpen={this.props.open} toggle={this.props.onHide}>       
        <ModalBody>
					<div className="popup-holder">		
						<div id="popup1" className="lightbox">					
							<section className="mt-product-detial">
								<div className="container">
									<div className="row">
										<div className="col-xs-12">									
											<div className="slider">										
												<ul className="list-unstyled comment-list">
													<li><a href="#"><i className="fa fa-heart"></i>27</a></li>
													<li><a href="#"><i className="fa fa-comments"></i>12</a></li>
													<li><a href="#"><i className="fa fa-share-alt"></i>14</a></li>
												</ul>
												<div className="product-slider">
													<div className="slide">
														<img src="http://placehold.it/500x450" alt="image descrption" />
													</div>											
												</div>																				
											</div>								
											<div className="detial-holder">										
												<ul className="list-unstyled breadcrumbs">
													<li><a href="#">Chairs <i className="fa fa-angle-right"></i></a></li>
													<li>Products</li>
												</ul>										
												<h2>KAILA FABRIC CHAIR</h2>										
												<div className="rank-rating">
													<ul className="list-unstyled rating-list">
														<li><a href="#"><i className="fa fa-star"></i></a></li>
														<li><a href="#"><i className="fa fa-star"></i></a></li>
														<li><a href="#"><i className="fa fa-star"></i></a></li>
														<li><a href="#"><i className="fa fa-star-o"></i></a></li>
													</ul>
													<span className="total-price">Reviews (12)</span>
												</div>
												<ul className="list-unstyled list">
													<li><a href="#"><i className="fa fa-share-alt"></i>SHARE</a></li>
													<li><a href="#"><i className="fa fa-exchange"></i>COMPARE</a></li>
													<li><a href="#"><i className="fa fa-heart"></i>ADD TO WISHLIST</a></li>
												</ul>
												<div className="txt-wrap">
													<p>Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.</p>
													<p>Koila is a seat designed for restaurants and gastronomic places in general. Designed in collaboration with professional of restaurants and hotels field, this armchair is composed of a curved shell with a base in oak who has pinched the back upholstered in fabric or leather. It provides comfort and holds for ideal sitting position,the arms may rest on the sides ofthe armchair.</p>
												</div>
												<div className="text-holder">
													<span className="price">$ 79.00 <del>399,00</del></span>
												</div>
												<form action="#" className="product-form">
													<fieldset>
														<div className="row-val">
															<label for="qty">qty</label>
															<select id="clr">
																<option>1</option>
															</select>
														</div>
														<div className="row-val">
															<button type="submit">ADD TO CART</button>
														</div>
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
        </ModalBody>
      </Modal>			
		);
	}	
}

export default SendEmailProductModal;