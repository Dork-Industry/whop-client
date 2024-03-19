import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmojiPicker from 'emoji-picker-react';

import Axios from 'axios';
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';

const Seller = () => {

    // const user_id = localStorage.getItem('user_id');
    let user_id;
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        user_id = userData.user_id;
    }
    const navigate = useNavigate();
    const param = useParams();
    const [actn, setActn] = useState('');
    const [activePrice, setActivePrice] = useState('');
    const [infoz, setInfoz] = useState({
        // prod_code: '',
        // cat_id: '',
        seller_id: '',
        name: '',
        prod_tagline: '',
        prod_info: '',
        thumbnail: '',
        facebooklink: '',
        instagramlink: '',
        youtubelink: '',
        twitterlink: ''
    });

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        product_name: '',
        product_type: '',
        product_cat: '',
        product_link: '',
        product_desc: '',
        price_type: '',
        price: 0,
        expiry: ''
    })

    const {
        // prod_code,
        // cat_id,
        seller_id,
        name,
        prod_tagline,
        prod_info,
        thumbnail,
        facebooklink,
        instagramlink,
        youtubelink,
        twitterlink

    } = infoz;

    const {
        product_name,
        product_type,
        product_cat,
        product_link,
        product_desc,
        price_type,
        price,
        expiry
    } = product;

    const [catList, setCat] = useState([]);
    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const videoTypeRegex = /video\/(mp4)/gm;
    // const mediaTypeRegex = /(?:image\/(png|jpg|jpeg))|(?:video\/(mp4|avi|mkv|wmv|mov|flv|webm|ogg|mpg|mpeg))/gm;
    // /(?:image\/(png|jpg|jpeg))|(?:video\/(mp4|avi|mkv|wmv|mov|flv|webm|ogg|mpg|mpeg))/gm;

    //////////////////////IMAGE////////////////

    const [image, setImage] = useState(null);
    const [imageFiles, setImageFiles] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [showProductModal, setShowProductModal] = useState(false)
    const [showFeatureModal, setShowFeatureModal] = useState(false)
    const [showFAQModal, setShowFAQModal] = useState(false)
    const [choosenEmoji, setChoosenEmoji] = useState('');
    const [features, setFeatures] = useState([]);
    const [feature, setFeature] = useState({
        feature_imoji: '',
        feature_title: '',
        feature_desc: ''
    })

    const {
        feature_desc,
        feature_title,
    } = feature;

    const [faqs, setFaqs] = useState([])
    const [faq, setFaq] = useState({
        question: '',
        answer: ''
    })

    const {
        question,
        answer,
    } = faq;

    const handleImageChange = (e) => {
        // Assuming only one file is selected
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            // Display the selected image (optional)
            const reader = new FileReader();
            reader.onloadend = () => {
                // Set the image in the state
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);

            // Call API using Axios
            const formData = new FormData();
            formData.append('image', selectedImage);
            // console.log(formData);

            Axios.post('https://whopapi.huepixel.com//upload/prodz', formData)
                .then((response) => {
                    // Handle the API response as needed
                    var vv = response.data;
                    setInfoz({ ...infoz, thumbnail: vv.imageUrl });
                    // console.log(response.data);
                    // console.log(infoz);
                })
                .catch((error) => {
                    // Handle errors
                    console.error('Error uploading image:', error);
                });
        }
    };

    //////////////////////IMAGE////////////////

    useEffect(() => {
        if (param.id > 0) {
            setActn('Update');
            getcat();
            getinfo(param.id);
        } else {
            setActn('Add');
            getcat();
        }

        setInfoz({ ...infoz, seller_id: user_id });
    }, []);

    const getinfo = (id) => {
        Apiconnect.getData(`product/get/${id}`).then((response) => {
            var tt = Apiconnect.decrypt_obj(response.data.data);
            // console.log(tt);
            setInfoz(tt);
        });
    };

    const getcat = (id) => {
        Apiconnect.getData(`cat/getAll`).then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            //console.log(_xtract);
            setCat(_xtract);
        });
    };

    const onInputChange = (e) => {
        setInfoz({ ...infoz, [e.target.name]: e.target.value });
        // console.log(infoz);
    };

    const onProductInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onFeatureInputChange = (e) => {
        setFeature({ ...feature, [e.target.name]: e.target.value });
    }

    const onFaqnputChange = (e) => {
        setFaq({ ...faq, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            infoz,
            "products": products,
            "features": features,
            "faqs": faqs
        }

        console.log("data", data);
        if (param.id > 0) {
            ///console.log('in edit function' +param.id);
            Apiconnect.postData(`product/update/${param.id}`, infoz).then((response) => {
                toast(response.data.message);
                navigate('/seller/product');
            });
        } else {
            // await Apiconnect.postData('product/create', infoz).then((response) => {
            //     console.log(response);
            //     setInfoz({
            //         prod_code: '',
            //         cat_id: '',
            //         seller_id: '',
            //         name: '',
            //         prod_tagline: '',
            //         prod_info: '',
            //         thumbnail: '',
            //     });
            //     toast(response.data.message);
            //     navigate('/seller/product');
            // });
            await Apiconnect.postData('store/create', data).then((response) => {
                if (response.data.status === 1) {
                    toast(response.data.message);
                    navigate('/seller/product');
                }
                else{
                    toast(response.data.message);
                    // navigate('/seller/product');
                }
            }).catch((err) => {
                console.log("Err", err.message)
            })
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setProducts([...products, product])
        // console.log("product", product)
        handleCloseProductModal();
    }

    const handleAddFeature = async (e) => {
        e.preventDefault();
        setFeatures([...features, feature]);
        handleCloseFeatureModal();
    }

    const handleAddFaq = async (e) => {
        e.preventDefault();
        setFaqs([...faqs, faq]);
        handleCloseFAQModal();
    }

    // useEffect(()=>{
    //     console.log("products", products)
    //     console.log("features", features)
    // }, [products, features])

    const handleCloseProductModal = () => {
        setShowProductModal(false)
    }

    const handleCloseFeatureModal = () => {
        setShowFeatureModal(false);
    }

    const handleCloseFAQModal = () => {
        setShowFAQModal(false);
    }

    const changeHandler = (e) => {
        const { files } = e.target;
        const validImageFiles = [];
        const validVideoFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i]; // OR const file = files.item(i);
            // console.log("file", file)
            if (file.type.match(imageTypeRegex)) {
                validImageFiles.push(file);
            }
            else if (file.type.match(videoTypeRegex)) {
                validVideoFiles.push(file)
            }
        }
        // console.log("validMediaFiles", validMediaFiles)
        if (validImageFiles.length || validVideoFiles.length) {
            setImageFiles(validImageFiles);
            setVideoFiles(validVideoFiles)
            return;
        }
        alert("Selected images are not of valid type!");
    }

    useEffect(() => {
        const images = [], fileReaders = [], videos = [];
        let isCancel = false;
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result)
                    }
                    if (images.length === imageFiles.length && !isCancel) {
                        setImages(images);
                    }
                }
                fileReader.readAsDataURL(file);
            })
        }
        if (videoFiles.length) {
            videoFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        videos.push(result)
                    }
                    if (videos.length === videoFiles.length && !isCancel) {
                        setVideos(videos);
                    }
                }
                fileReader.readAsDataURL(file);
            })
        }
        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [imageFiles])

    const emojiPickerFunction = (emojiObject) => {
        const emoji = emojiObject.emoji;
        console.log("emoji", emoji, "type", typeof (emoji));
        setChoosenEmoji(emoji);
        setFeature({ ...feature, "feature_imoji": emoji })
    };

    const handlePriceSelection = (pricetype) => {
        // console.log("pricetype", pricetype);
        setActivePrice(pricetype);
        setProduct({ ...product, "price_type": pricetype });
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-body cbtop p-2 d-flex justify-content-between align-items-center">
                        <h2 className='mt-2'>{actn} Product</h2>
                        <a href="/seller/product" className="btn btn-success midbtn">
                            {' '}
                            <i className="fa fa-arrow-left"></i> Back
                        </a>
                    </div>
                    <div className="card-body  p-2 mb-3">
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <Row>
                                <Col md={6} sm={12}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder='Store Title'
                                        value={name}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="prod_tagline"
                                        placeholder='Tagline/Slogan'
                                        value={prod_tagline}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    <div className="d-grid gap-2">
                                        <input type="file"
                                            id="file"
                                            accept="image/*,video/*"
                                            onChange={changeHandler}
                                            className='btn outline-dark'
                                            multiple />
                                        <p> <strong>Note :</strong> Upto 8 Images/Videos can be uploadable!</p>
                                    </div>
                                </Col>
                                {
                                    images.length > 0 ?
                                        <>
                                            {
                                                images.map((image, idx) => {
                                                    return <Col md={3}><p key={idx}> <img src={image} alt="" /><button className='img-remove-btn'>X</button> </p></Col>
                                                })
                                            }
                                        </> : null}{
                                    videos.length > 0 ? <>
                                        {
                                            videos.map((video, idx) => {
                                                return <Col md={3}><p key={idx}> <video controls style={{ maxWidth: '100%', maxHeight: '200px' }}>
                                                    <source src={video} type={"video/mp4"} />
                                                </video> </p></Col>
                                            })
                                        }
                                    </> : null
                                }
                            </Row>
                            <hr />
                            <Row>
                                <Col md={3}>
                                    <Button varient={"primary"} onClick={(e) => { setShowProductModal(true) }}> Add Product </Button>
                                </Col>
                                <Col md={3}>
                                    <Button variant="primary" onClick={(e) => { setShowFeatureModal(true) }}> Add Features </Button>
                                </Col>
                            </Row>
                            <Row>
                                {products && products.length > 0 && (
                                    <Col md={6}>
                                        {products.map((product, index) => {
                                            return (
                                                <div>
                                                    {product.product_name}
                                                </div>
                                            )
                                        })}
                                    </Col>
                                )}
                                {features && features.length > 0 && (
                                    <Col md={6}>
                                        {features.map((feature, index) => {
                                            return (
                                                <div>
                                                    {feature.feature_title}
                                                </div>
                                            )
                                        })}
                                    </Col>
                                )}
                            </Row>
                            <hr />
                            
                            <Row>
                                <Col md={12}>
                                    {/* <Form.Label>About Store : </Form.Label> */}
                                    <h5>About Store : </h5>
                                    <Form.Control as="textarea" rows={3} name="prod_info" value={prod_info}
                                        onChange={(e) => onInputChange(e)} required />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    <Button variant="primary" onClick={(e) => { setShowFAQModal(true) }}> Add FAQ </Button>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    <h5>Social Links</h5>
                                    <hr />
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Facebook</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"link"} name={"facebooklink"} value={facebooklink} onChange={(e) => onInputChange(e)} placeholder='https://www.facebook.com/' className='form-control' />
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Instagram</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"text"} name={"instagramlink"} value={instagramlink} onChange={(e) => onInputChange(e)} placeholder='https://www.instagram.com/' className='form-control' />
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Youtube</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"text"} name={"youtubelink"} value={youtubelink} onChange={(e) => onInputChange(e)} placeholder='https://www.youtube.com/' className='form-control' />
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Twitter</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"text"} name={"twitterlink"} value={twitterlink} onChange={(e) => onInputChange(e)} placeholder='https://www.twitter.com/' className='form-control' />
                                </Col>
                            </Row>
                            {/* <div className="row">
                                <div className="col-md-12">
                                    <label>Product Info*</label>
                                    <textarea
                                        style={{ height: 280 }}
                                        className="form-control"
                                        name="prod_info"
                                        value={prod_info}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label>Thumbnail*</label>
                                    <br />

                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                    <div className="col-md-4" style={{ marginTop: 30, overflow: 'hidden' }}>
                                        {image && (
                                            <img
                                                src={image}
                                                crossorigin="anonymous"
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        )}
                                        {thumbnail && (
                                            <img
                                                crossorigin="anonymous"
                                                src={thumbnail}
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div> */}
                            <Row>
                                <Col md={12} className="d-grid">
                                    <Button variant='primary' type="submit" > {actn} {' '}</Button>
                                </Col>
                            </Row>

                            {/* <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-success">
                                        {actn}{' '}
                                    </button>
                                </div>
                            </div> */}
                        </Form>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Modal show={showProductModal} onHide={handleCloseProductModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form onSubmit={(e) => handleAddProduct(e)}>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control
                                            type="text"
                                            placeholder="Product Name"
                                            value={product_name}
                                            name={"product_name"}
                                            onChange={(e) => { onProductInputChange(e) }}
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Select aria-label="Default select example" onChange={(e) => { onProductInputChange(e) }} className="mb-3" name={"product_type"} value={product_type}>
                                        <option>Product Type</option>
                                        <option value="telegram">Telegram</option>
                                        <option value="whatsapp">Whats App</option>
                                        <option value="Discord">Discord</option>
                                    </Form.Select>
                                </Col>
                                <Col md={6}>
                                    <Form.Select aria-label="Default select example" className="mb-3"
                                        name="product_cat"
                                        value={product_cat}
                                        onChange={(e) => onProductInputChange(e)}>
                                        <option>Product category</option>
                                        {catList.map((val, key) => {
                                            return (
                                                <option key={key} value={val.id}>
                                                    {val.name}
                                                </option>
                                            );
                                        })}
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control
                                            type="link"
                                            placeholder="Product Link"
                                            name={"product_link"}
                                            value={product_link}
                                            onChange={(e) => onProductInputChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Product description"
                                            style={{ height: '100px' }}
                                            name={"product_desc"}
                                            value={product_desc}
                                            onChange={(e) => onProductInputChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <h5>Price</h5>
                                    <p>Set your price, subscription, currency and more.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className='flex flex-col gap-2 md:flex-row'>
                                        <div className={`product-price-wrapper w-100 p-2 border-2 rounded ${activePrice === 'free' ? 'active' : ''}`} onClick={() => { handlePriceSelection('free') }}>
                                            <div className='product-price'>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={activePrice === "free"} />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Free
                                                    </label>
                                                </div>
                                                <div><p className='mb-0'>allow access for free.</p></div>
                                            </div>
                                        </div>
                                        <div className={`product-price-wrapper w-100 p-2 border-2 rounded ${activePrice === 'subscription' ? 'active' : ''}`} onClick={() => { handlePriceSelection('subscription') }}>
                                            <div className='product-price'>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={activePrice === "subscription"} />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Subscription
                                                    </label>
                                                </div>
                                                {/* <div><p className='mb-0'>allow access for free.</p></div> */}
                                            </div>
                                        </div>
                                        <div className={`product-price-wrapper w-100 p-2 border-2 rounded ${activePrice === 'onetime' ? 'active' : ''}`} onClick={() => { handlePriceSelection('onetime') }}>
                                            <div className='product-price'>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={activePrice === "onetime"} />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Single Payment
                                                    </label>
                                                </div>
                                                <div><p className='mb-0'>charge a one-time fee.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {activePrice === "free" && (
                                    <Col md={12} className='mt-3'>
                                        <p>Access expires.</p>
                                        <Form.Select aria-label="Default select example" className="mb-3" name={"expiry"} value={expiry} onChange={(e) => onProductInputChange(e)}>
                                            <option value="-1">Never</option>
                                            <option value="1">After 7 days</option>
                                            <option value="2">After 2 weeks</option>
                                            <option value="3">After 1 month</option>
                                            <option value="4">After 2 months</option>
                                            <option value="5">After 3 months</option>
                                            <option value="6">After 6 months</option>
                                            <option value="7">After 1 year</option>
                                        </Form.Select>
                                    </Col>
                                )}

                                {activePrice === "subscription" && (
                                    <Col md={12} className='mt-3'>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="number" placeholder="Rs." name={"price"} value={price} onChange={(e) => onProductInputChange(e)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select aria-label="Default select example" name={"expiry"} value={expiry} onChange={(e) => onProductInputChange(e)}>
                                                <option value="0">Per custom time period</option>
                                                <option value="1">Per 7 days</option>
                                                <option value="2">Per 2 weeks</option>
                                                <option value="3">Per month</option>
                                                <option value="4">Per 2 months</option>
                                                <option value="5">Per 3 months</option>
                                                <option value="6">Per 6 months</option>
                                                <option value="7">Per year</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                )}

                                {activePrice === "onetime" && (
                                    <Col md={12} className='mt-3'>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="number" placeholder="Rs." name={"price"} value={price} onChange={(e) => onProductInputChange(e)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select aria-label="Default select example" name={"expiry"} value={expiry} onChange={(e) => onProductInputChange(e)}>
                                                <option value="-1">Never expires</option>
                                                <option value="0">Expires after cutom time period</option>
                                                <option value="1">Expires 7 days</option>
                                                <option value="2">Expires 2 weeks</option>
                                                <option value="3">Expires 1 month</option>
                                                <option value="4">Expires 2 months</option>
                                                <option value="5">Expires 3 months</option>
                                                <option value="6">Expires 6 months</option>
                                                <option value="7">Expires 1 year</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                )}

                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseProductModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddProduct} >
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFeatureModal} onHide={handleCloseFeatureModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Feature</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form onSubmit={(e) => handleAddFeature(e)}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Select Imojies : <span>{choosenEmoji}</span> </Form.Label>
                                        {/* <Form.Control
                                            type="text"
                                            placeholder="Product Name"
                                            autoFocus
                                        /> */}
                                        {/* <div className="emoji-picker"> */}
                                        <EmojiPicker
                                            onEmojiClick={emojiPickerFunction} autoFocus
                                        />
                                        {/* </div> */}
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        {/* <Form.Label>Feature Title</Form.Label> */}
                                        <Form.Control
                                            type="text"
                                            placeholder="Feature Title"
                                            // autoFocus
                                            name={"feature_title"}
                                            value={feature_title}
                                            onChange={(e) => onFeatureInputChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Feature description"
                                            style={{ height: '100px' }}
                                            name={"feature_desc"}
                                            value={feature_desc}
                                            onChange={(e) => onFeatureInputChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFeatureModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddFeature}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFAQModal} onHide={handleCloseFAQModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form onSubmit={(e) => { handleAddFaq(e) }}>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Question :  </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Question"
                                            style={{ height: '100px' }}
                                            name={"question"}
                                            value={question}
                                            onChange={(e) => onFaqnputChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label>Answer :</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Answer"
                                            style={{ height: '100px' }}
                                            name={"answer"}
                                            value={answer}
                                            onChange={(e) => onFaqnputChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFAQModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddFaq}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Seller;
