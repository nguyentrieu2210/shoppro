import { useSelector, useDispatch } from "react-redux";
import { getImgProduct } from "../../shared/ultils";
import { UPDATE_CART, DELETE_ITEM_CART } from "../../shared/contants/action-type";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { orders } from "../../services/Api";
const Cart = () => {
    const [inputs, setInputs] = React.useState({});
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [order, setOrder] = React.useState(null);

    // useEffect(({})=> {
    //     order( {}).then(()=> {

    //     })
    // },[]);

    const onClickOder = (e)=> {
        e.preventDefault();
        const items = carts.map((item)=> ({prd_id: item._id, qty: item.qty}));
        orders({
            items,
            ...inputs
        }).then(({data})=>{
            if(data.status==="success") {
                navigate("/Success");
            }
        });

    }

    const onchangeInput = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]:value});
        console.log(inputs);
    }

    const carts = useSelector(({ Cart }) => {
        return Cart.items;
    });

    const deleteItemCart = (e,_id) => {
        e.preventDefault();
        //eslint-disable-next-line no-restricted-globals
        const isConfim = confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?");
        return isConfim ?
            dispatch({
                type: DELETE_ITEM_CART,
                payload: {
                    _id,
                }
            })
            : false;
    }

    const updateCart = (e, _id) => {
        const val = parseInt(e.target.value);
        if (val > 0) {
            dispatch({
                type: UPDATE_CART,
                payload: {
                    _id,
                    qty: val,
                }
            });
        } else {
            //eslint-disable-next-line no-restricted-globals
            const isConfim = confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?");
            return isConfim ?
                dispatch({
                    type: DELETE_ITEM_CART,
                    payload: {
                        _id,
                    }
                })
                : dispatch({
                    type: UPDATE_CART,
                    payload: {
                        _id,
                        qty: 1,
                    }
                })
        }
    }

    const moneyTotal = carts.reduce((total, item) => { return total += (item.qty * item.price); }, 0);
    const moneyFormat = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };
    return (
        <div>
            {/*	Cart	*/}
            <div id="my-cart">
                <div className="row">
                    <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
                    <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
                    <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
                </div>
                <form method="post">
                    {
                        carts?.map((item) =>
                            <div className="cart-item row">
                                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                    <img src={getImgProduct(item.image)} />
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                                    <input onChange={(e) => updateCart(e, item._id)} type="number" id="quantity" className="form-control form-blue quantity" value={item.qty} />
                                </div>
                                <div onClick={(e) => deleteItemCart(e,item._id)} className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{moneyFormat(item.price * item.qty)}</b><a href="#">Xóa</a></div>
                            </div>
                        )
                    }
                    <div className="row">
                        {/* <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                            <button id="update-cart" className="btn btn-success" type="submit" name="sbm">Cập nhật giỏ hàng</button>
                        </div> */}
                        <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                        <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{moneyFormat(moneyTotal)}</b></div>
                    </div>
                </form>
            </div>
            {/*	End Cart	*/}
            {/*	Customer Info	*/}
            <div id="customer">
                <form method="post">
                    <div className="row">
                        <div onChange={onchangeInput} id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                            <input placeholder="Họ và tên (bắt buộc)" type="text" name="name" className="form-control" value={inputs?.name} required />
                        </div>
                        <div onChange={onchangeInput} id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                            <input placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" className="form-control" value={inputs?.phone} required />
                        </div>
                        <div onChange={onchangeInput} id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                            <input placeholder="Email (bắt buộc)" type="text" name="email" className="form-control" value={inputs?.email} required />
                        </div>
                        <div onChange={onchangeInput} id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                            <input placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="address" className="form-control" value={inputs?.address} required />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="by-now col-lg-6 col-md-6 col-sm-12">
                        <a onClick={onClickOder} href="#">
                            <b>Mua ngay</b>
                            <span>Giao hàng tận nơi siêu tốc</span>
                        </a>
                    </div>
                    <div className="by-now col-lg-6 col-md-6 col-sm-12">
                        <a href="#">
                            <b>Trả góp Online</b>
                            <span>Vui lòng call (+84) 0988 550 553</span>
                        </a>
                    </div>
                </div>
            </div>
            {/*	End Customer Info	*/}
        </div>

    )
}

export default Cart;