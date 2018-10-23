import React, { Component } from 'react';
import CartItem from './CartItem';
import Container from './Container';
import './CartList.css';

class CartList extends Component {
    constructor() {
        super();
        this.state = {
            datas: [],
            amt: 0,
            dis_price: 0,
            type_dis_price: 0,
            tot_amt: 0,
            no_of_items: 0
        }
        this.addItemInit = this.addItemInit.bind(this);
    }
    Data = [
        {
            "id": 9090,
            "name": "Item1",
            "price": 200,
            "discount": 10,
            "type": "fiction",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9091,
            "name": "Item2",
            "price": 250,
            "discount": 15,
            "type": "literature",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9092,
            "name": "Item3",
            "price": 320,
            "discount": 5,
            "type": "literature",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9093,
            "name": "Item4",
            "price": 290,
            "discount": 0,
            "type": "thriller",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9094,
            "name": "Item5",
            "price": 500,
            "discount": 25,
            "type": "thriller",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9095,
            "name": "Item6",
            "price": 150,
            "discount": 5,
            "type": "literature",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9096,
            "name": "Item7",
            "price": 700,
            "discount": 22,
            "type": "literature",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        },
        {
            "id": 9097,
            "name": "Item8",
            "price": 350,
            "discount": 18,
            "type": "fiction",
            "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"
        }
    ]


    addItemInit() {
        let newContact = JSON.parse(localStorage.getItem('CartItems'));
        this.setState({ datas: newContact })
        console.log(this.state.datas)
    }


    componentDidMount() {
        if (localStorage.getItem('CartItems') !== null) {
            console.log('if');
            this.addItemInit();
            this.totalPrice();
        } else {
            console.log('else');
            this.Data = this.Data.filter(item => {
                return item['qty'] = 1;
            })
            localStorage.setItem('CartItems', JSON.stringify(this.Data));
            this.addItemInit();
            this.totalPrice();
        }
    }


    totalPrice = () => {
        let items = JSON.parse(localStorage.getItem('CartItems'));
        //total amount
        var amt = 0;
        let amt_arr = items.map(item => {
            return (Number(item.price) * Number(item.qty));
        })
        for (let i = 0; i < amt_arr.length; i++) {
            amt = parseFloat(amt + Number(amt_arr[i]));
        }
        this.setState({ amt: amt.toFixed(2) })

        //discount
        var dis_price = 0;
        var dis_amt_arr = items.map(item => {
            return Number((item.price * (item.discount / 100)) * item.qty);
        })
        for (let i = 0; i < dis_amt_arr.length; i++) {
            dis_price = dis_price + dis_amt_arr[i];
        }
        this.setState({ dis_price: dis_price.toFixed(2) })

        //typr discount price
        var type_discount_arr = items.map(item => {
            if (item.type === "fiction") {
                return (Number((item.price * (15 / 100)) * item.qty));
            }
            return 0;
        })
        var type_dis_price = 0;
        for (let i = 0; i < type_discount_arr.length; i++) {
            type_dis_price = type_dis_price + type_discount_arr[i];
        }
        this.setState({ type_dis_price: type_dis_price.toFixed(2) });

        //tot amount
        var tot_amt = amt - (dis_price + type_dis_price);
        this.setState({ tot_amt: tot_amt.toFixed(2) });

        // no of items
        var itemsl = JSON.parse(localStorage.getItem('CartItems'));
        var n = itemsl.length;
        this.setState({ no_of_items: n });

    }

    minusQty = id => {
        const { datas } = this.state;
        var newContent = datas.filter(item => {
            if (item.id === id) {
                if (item.qty !== 1) {
                    item.qty = item.qty - 1;
                }
            }
            return item;
        })
        localStorage.setItem("CartItems", JSON.stringify(newContent));
        this.setState({ datas: newContent })
        this.totalPrice();

    }

    plusQty = id => {
        //const { datas } = this.state;
        var content = JSON.parse(localStorage.getItem('CartItems'));
        var newContent1 = content.filter(item => {
            if (item.id === id) {
                item.qty = item.qty + 1;
            }
            return item;
        })
        localStorage.setItem("CartItems", JSON.stringify(newContent1));
        this.setState({ datas: newContent1 });
        this.totalPrice();
    }
    deleteItem = id => {
        var items = JSON.parse(localStorage.getItem('CartItems'));
        var newItems = items.filter(item => {
            return (item.id !== id)
        })
        localStorage.setItem('CartItems', JSON.stringify(newItems));
        this.setState({ datas: newItems });
        this.totalPrice();
    }
    restoreAllItems = () => {
        var Data = this.Data.filter(item => {
            return item['qty'] = 1;
        })
        localStorage.setItem('CartItems', JSON.stringify(Data));
        this.setState({ datas: Data });
        this.totalPrice();
    }

    render() {
        const { datas, amt, dis_price, type_dis_price, tot_amt, no_of_items } = this.state;
        return (
            <div >
                <button className="btn btn-outline-secondary" onClick={this.restoreAllItems} style={{ marginLeft: "50%" }}>List All Items</button>

                <hr />
                <div className="row">
                    <div className="col-md-7 _fixedr">
                        <p>
                            <span className="title">Title</span>
                            <span className="quantity">Quantity</span>
                            <span className="subtotal">SubTotal</span>
                        </p>
                        <hr />
                        {datas.map(data => (
                            <CartItem
                                minusClickHandler={this.minusQty.bind(this, data.id)}
                                plusClickHandler={this.plusQty.bind(this, data.id)}
                                onItemDelete={this.deleteItem.bind(this, data.id)}
                                key={data.id}
                                data={data}
                            />
                        ))}

                    </div>
                    <div className="col-md-5 _fixedl">
                        <Container
                            amt={amt}
                            dis_price={dis_price}
                            type_dis_price={type_dis_price}
                            tot_amt={tot_amt}
                            no_of_items={no_of_items}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CartList;