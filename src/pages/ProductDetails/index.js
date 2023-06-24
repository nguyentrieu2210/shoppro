import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../shared/contants/action-type";
import { Link, useActionData, useNavigate, useParams } from "react-router-dom";
import { createCommentProduct, getCommentProduct, getProduct, getProducts } from "../../services/Api";
import { getImgProduct } from "../../shared/ultils";
import moment from "moment";
const ProductDetails = () => {
    const [product, setProduct] = React.useState(null);
    const [comments, setComments] = React.useState([]);
    const [inputComment, setInputComment] = React.useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    //DidMount
    useEffect(() => {
        getProduct(id, {}).then(({ data }) => {
            setProduct(data.data);
        });
        getComments(id);
    }, [id]);

    const addToCart = (type)=>{

        if(product){
            const {_id, name, price, image} = product;
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    _id,
                    name,
                    price,
                    image,
                    qty: 1
                }
            });
        }
    
        if(type==="buy-now"){
            navigate("/Cart");
        }
    }
    

    const getComments = (id) => {
        getCommentProduct(id, {}).then(({ data }) => setComments(data.data.docs));
    }
    const onClickSubmit = (e) => {
        e.preventDefault();
        createCommentProduct(id, inputComment, {}).then(({ data }) => {
            if (data.status == "success") {
                setInputComment({});
            }
            getComments(id);
        })
        console.log(inputComment);
    }
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputComment({ ...inputComment, [name]: value });
    }
    return (
        <div>
            {/*	List Product	*/}
            <div id="product">
                <div id="product-head" className="row">
                    <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                        <img src={getImgProduct(product?.image)} />
                    </div>
                    <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                        <h1>{product?.name}</h1>
                        <ul>
                            <li><span>Bảo hành:</span> 12 Tháng</li>
                            <li><span>Đi kèm:</span> {product?.accessories}</li>
                            <li><span>Tình trạng:</span> {product?.status}</li>
                            <li><span>Khuyến Mại:</span> giảm giá 30%</li>
                            <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                            <li id="price-number">{product?.price}</li>
                            <li id="status">Còn hàng</li>
                        </ul>
                        <div id="add-cart">
                            <button onClick={() => addToCart("buy-now")} className="btn btn-warning mr-2">
                                Mua ngay
                            </button>

                            <button onClick={addToCart} className="btn btn-info">
                                Thêm vào giỏ hàng
                            </button>
                        </div>

                    </div>
                </div>
                <div id="product-body" className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3>{product?.name}</h3>
                        {/* {product?.details}  */}
                        <p>
                            Màn hình OLED có hỗ trợ HDR là một sự nâng cấp mới của Apple thay vì màn hình LCD với IPS được tìm thấy trên iPhone 8 và iPhone 8 Plus đem đến tỉ lệ tương phản cao hơn đáng kể là 1.000.000: 1, so với 1.300: 1 ( iPhone 8 Plus ) và 1.400: 1 ( iPhone 8 ).
                        </p>
                        <p>
                            Màn hình OLED mà Apple đang gọi màn hình Super Retina HD có thể hiển thị tông màu đen sâu hơn. Điều này được thực hiện bằng cách tắt các điểm ảnh được hiển thị màu đen còn màn hình LCD thông thường, những điểm ảnh đó được giữ lại. Không những thế, màn hình OLED có thể tiết kiệm pin đáng kể.
                        </p>
                        <p>
                            Cả ba mẫu iPhone mới đều có camera sau 12MP và 7MP cho camera trước, nhưng chỉ iPhone X và iPhone 8 Plus có thêm một cảm biến cho camera sau. Camera kép trên máy như thường lệ: một góc rộng và một tele. Vậy Apple đã tích hợp những gì vào camera của iPhone X?
                        </p>
                        <p>
                            Chống rung quang học (OIS) là một trong những tính năng được nhiều hãng điện thoại trên thế giới áp dụng. Đối với iPhone X, hãng tích hợp chống rung này cho cả hai camera, không như IPhone 8 Plus chỉ có OIS trên camera góc rộng nên camera tele vẫn rung và chất lượng bức hình không đảm bảo.
                        </p>
                        <p>
                            Thứ hai, ống kính tele của iPhone 8 Plus có khẩu độ f / 2.8, trong khi iPhone X có ống kính tele f / 2.2, tạo ra một đường cong nhẹ và có thể chụp thiếu sáng tốt hơn với ống kính tele trên iPhone X.
                        </p>
                        <p>
                            Portrait Mode là tính năng chụp ảnh xóa phông trước đây chỉ có với camera sau của iPhone 7 Plus, hiện được tích hợp trên cả iPhone 8 Plus và iPhone X. Tuy nhiên, nhờ sức mạnh của cảm biến trên mặt trước của iPhone X, Camera TrueDepth cũng có thể chụp với Potrait mode.
                        </p>
                    </div>
                </div>
                {/*	Comment	*/}
                <div id="comment" className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3>Bình luận sản phẩm</h3>
                        <form method="post">
                            <div className="form-group">
                                <label>Tên:</label>
                                <input
                                    onChange={onChangeInput}
                                    name="name"
                                    required type="text"
                                    className="form-control"
                                    value={inputComment.name || ""}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    onChange={onChangeInput}
                                    name="email"
                                    required type="email"
                                    className="form-control"
                                    id="pwd"
                                    value={inputComment.email || ""}
                                />
                            </div>
                            <div className="form-group">
                                <label>Nội dung:</label>
                                <textarea
                                    onChange={onChangeInput}
                                    name="content"
                                    required rows={8}
                                    className="form-control"
                                    defaultValue={""}
                                    value={inputComment.content || ""}
                                />
                            </div>
                            <button onClick={onClickSubmit} type="submit" name="sbm" className="btn btn-primary">Gửi</button>
                        </form>
                    </div>
                </div>
                {/*	End Comment	*/}
                {/*	Comments List	*/}
                <div id="comments-list" className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {
                            comments.map((comment) =>
                                <div className="comment-item">
                                    <ul>
                                        <li><b>{comment.name}</b></li>
                                        <li>{moment(comments.createdAt).fromNow()}</li>
                                        <li>
                                            <p>{comment.content}</p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>
                {/*	End Comments List	*/}
            </div>
            {/*	End Product	*/}
            <div id="pagination">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                </ul>
            </div>
        </div>

    )
}
export default ProductDetails;