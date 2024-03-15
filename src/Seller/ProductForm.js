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

    const user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();
    const param = useParams();
    const [actn, setActn] = useState('');
    const [infoz, setInfoz] = useState({
        prod_code: '',
        cat_id: '',
        seller_id: '',
        name: '',
        prod_tagline: '',
        prod_info: '',
        thumbnail: '',
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
    });

    const {
        prod_code,
        cat_id,
        seller_id,
        name,
        prod_tagline,
        prod_info,
        thumbnail,
        meta_title,
        meta_keyword,
        meta_description,
    } = infoz;
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
            console.log(formData);

            Axios.post('https://whopapi.huepixel.com//upload/prodz', formData)
                .then((response) => {
                    // Handle the API response as needed
                    var vv = response.data;
                    setInfoz({ ...infoz, thumbnail: vv.imageUrl });
                    console.log(response.data);
                    console.log(infoz);
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
            console.log(tt);
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
        console.log(infoz);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (param.id > 0) {
            ///console.log('in edit function' +param.id);

            Apiconnect.postData(`product/update/${param.id}`, infoz).then((response) => {
                toast(response.data.message);
                navigate('/seller/product');
            });
        } else {
            await Apiconnect.postData('product/create', infoz).then((response) => {
                console.log(response);
                setInfoz({
                    prod_code: '',
                    cat_id: '',
                    seller_id: '',
                    name: '',
                    prod_tagline: '',
                    prod_info: '',
                    thumbnail: '',
                    meta_title: '',
                    meta_keyword: '',
                    meta_description: '',
                });
                toast(response.data.message);
                navigate('/seller/product');
            });
        }
    };

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
            console.log("file", file)
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
        setChoosenEmoji(emoji);
    };

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
                                    {/* <label>Category*</label>
                                    <select
                                        className="form-control"
                                        required
                                        name="cat_id"
                                        value={cat_id}
                                        onChange={(e) => onInputChange(e)}
                                    >
                                        <option value="">Select</option>
                                        {catList.map((val, key) => {
                                            return (
                                                <option key={key} value={val.id}>
                                                    {val.name}
                                                </option>
                                            );
                                        })}
                                    </select> */}
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
                                        name="name"
                                        placeholder='Tagline/Slogan'
                                        value={name}
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
                            <hr />
                            <Row>
                                <Col md={12}>
                                    {/* <Form.Label>About Store : </Form.Label> */}
                                    <h5>About Store : </h5>
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    <Button variant="primary" onClick={(e) =>  {setShowFAQModal(true)}}> Add FAQ </Button>
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
                                    <input type={"text"}  placeholder='https://www.facebook.com/' className='form-control'/>
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Instagram</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"text"}  placeholder='https://www.instagram.com/' className='form-control'/>
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Youtube</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"text"}  placeholder='https://www.youtube.com/' className='form-control'/>
                                </Col>
                            </Row>
                            <Row className='align-items-center mx-3 my-3'>
                                <Col md={2}>
                                    <label >Twitter</label>
                                </Col>
                                <Col md={10}>
                                    <input type={"text"}  placeholder='https://www.twitter.com/' className='form-control'/>
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
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control
                                            type="text"
                                            placeholder="Product Name"
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Select aria-label="Default select example">
                                        <option>Product Type</option>
                                        <option value="telegram">Telegram</option>
                                        <option value="whatsapp">Whats App</option>
                                        <option value="Discord">Discord</option>
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
                                            autoFocus
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
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseProductModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseProductModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFeatureModal} onHide={handleCloseFeatureModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Feature</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
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
                                            onEmojiClick={emojiPickerFunction}
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
                                            autoFocus
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
                    <Button variant="primary" onClick={handleCloseFeatureModal}>
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
                        <Form>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Question :  </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Question"
                                            style={{ height: '100px' }}
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
                    <Button variant="primary" onClick={handleCloseFAQModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Seller;
