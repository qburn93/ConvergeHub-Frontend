import axios from "axios";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Upload from "../../assets/upload.png";

import { Image } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";

import { CurrentUserContext } from "../../context/CurrentUserContext";

function PostCreateForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
        category: "",
    });
    const [uploadedImage, setUploadedImage] = useState();
    const { title, content, image, category } = postData;

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
            setUploadedImage(event.target.files[0]);
        }
    };

    const handleSubmit = (userValue) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', uploadedImage);
        formData.append('category', category);

        axios.post('/posts/', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        // FormData;
    };

    const textFields = (
        <CurrentUserContext.Consumer>
            {value => (
                <div className="text-center">
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            name="content"
                            value={content}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            as="select"
                            name="category"
                            value={category}
                            onChange={handleChange}
                        >
                            <option value="">Select a category</option>
                            <option value="Uncategorised">Uncategorised</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Nature">Nature</option>
                        </Form.Control>
                    </Form.Group>
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Blue}`}
                        onClick={() => { }}
                    >
                        cancel
                    </Button>
                    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="button" onClick={() => { handleSubmit(value); }}>
                        create
                    </Button>
                </div>
            )}
        </CurrentUserContext.Consumer>
    );

    return (
        <Form>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                            htmlFor="image-upload"
                                        >
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={Upload}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}

                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;