import React, { Component } from 'react'
import './CartItem.css';
import plus from '../plus.png';
import minus from '../minus.png';
import trash from '../trash.png';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';

class CartItem extends Component {



    clickedPlus = () => {
        this.props.plusClickHandler();
    }

    clickedMinus = () => {
        this.props.minusClickHandler();
    }
    deleteItem = (e) => {
        this.props.onItemDelete();
        e.preventDefault();
        Alert.success('Item Deleted', {
            position: 'top',
            timeout: 3000
        });

    }



    render() {
        const { id, name, price, qty, img_url, type } = this.props.data;
        return (
            <div className="row tot-box">

                <div className="card m_box">
                    <div className="card-body">
                        <img src={img_url} alt="wede" height='75px' style={{ float: 'left' }} />
                        <div className="card-in" >
                            <span className="card-title clear-fix">{name}</span><br />
                            <span className="card-subtitle mb-2 text-muted" >{type}</span>
                        </div>
                        <Alert stack={true} />
                        <img src={trash} alt='thrh' width="20px" height="20px" onClick={this.deleteItem} className="float-right cross" id="myModal" />

                    </div>
                </div>

                <span className="float-right sym-mi" data-id={id} onClick={this.clickedMinus}>
                    <img src={minus} alt="" width="22px" />
                </span>
                <div className="sq_box">{qty}</div>
                <span className="float-right sym-plus" data-id={id} onClick={this.clickedPlus}>
                    <img src={plus} alt="" width="20px" />
                </span>

                <div className="prices pri_box"> &#8377;{price}</div>

            </div>
        )
    }
}
export default CartItem;
