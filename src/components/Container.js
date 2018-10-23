import React, { Component } from 'react'
import './Container.css';

class Container extends Component {
    render() {
        const { amt, dis_price, type_dis_price, tot_amt, no_of_items } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="box">
                    <p><b>TOTAL</b></p>
                    <p>
                        <span style={{ minWidth: "175px" }}>Items</span>
                        <span id="tot-items"> ( {no_of_items} )</span>
                        <span id="tot" style={{ float: 'right', marginRight: '10px' }}>&#8377; {amt}</span>
                        <br />
                        <span className="text-muted" style={{ fontSize: '12px' }}>Total cost</span>
                    </p>


                    <p>
                        <span style={{ minWidth: "175px" }}>Discount</span>
                        <span id="discount" style={{ float: 'right', marginRight: " 10px" }}>&#8377; {dis_price}</span>
                        <br />
                        <span className="text-muted" style={{ fontSize: '12px' }}>Discount on individual Items</span>
                    </p>

                    <p>
                        <span style={{ minWidth: "175px" }}>Type Discount</span>
                        <span id="type_discount" style={{ float: 'right', marginRight: "10px" }}>&#8377; {type_dis_price}</span >
                        <br />
                        <span className="text-muted" style={{ fontSize: '12px' }}>Discount on Friction Items</span>
                    </p >
                    <hr />
                    <p>
                        <span style={{ minWidth: "175px" }}>Total(in Rs)</span>
                        <span id="total" style={{ float: 'right', marginRight: "10px" }}> <b> &#8377; {tot_amt} </b> </span >
                    </p >
                </div >
            </div >
        )
    }
}
export default Container;
