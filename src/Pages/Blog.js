import React, { Component } from "react";
import { Col, Row, Card, Button, Form, Modal } from "react-bootstrap";
import Footer from './../Components/Footer'; 
import blog from "./../Components/img/blog.jpg"; // Автоматическая картинка

export default class Blog extends Component {
  constructor(props) {
    super(props);

    const userId = localStorage.getItem("userId") || this.generateUserId();

    this.state = {
      posts: JSON.parse(localStorage.getItem("posts")) || [],
      newText: "",
      userId,
      editingIndex: null, // Индекс редактируемого поста
      editedText: "", // Текст для редактирования
      showModal: false, // Показывать модальное окно или нет
      modalImage: "", // Изображение для модального окна
      showPasswordModal: false, // Показать модальное окно для пароля
      password: "", // Введенный пароль
    };
  }

  componentDidUpdate() {
    localStorage.setItem("posts", JSON.stringify(this.state.posts));
  }

  generateUserId() {
    const userId = `user_${Math.random().toString(36).substring(2)}`;
    localStorage.setItem("userId", userId);
    return userId;
  }

  handleTextChange = (event) => {
    this.setState({ newText: event.target.value });
  };

  handleShowPasswordModal = () => {
    this.setState({ showPasswordModal: true });
  };

  handleClosePasswordModal = () => {
    this.setState({ showPasswordModal: false, password: "" });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPassword = () => {
    const { password, newText, userId } = this.state;
    if (password === "1111") {
      const timestamp = new Date().toLocaleString(); // Текущая дата и время
      this.setState((prevState) => ({
        posts: [
          { image: blog, text: newText, timestamp, userId },
          ...prevState.posts,
        ],
        newText: "",
        showPasswordModal: false, // Закрыть модальное окно для пароля
        password: "", // Очистить введенный пароль
      }));
    } else {
      alert("Ungültiges Passwort. Bitte versuchen Sie es erneut.");
    }
  };

  handleAddPost = () => {
    const { newText } = this.state;
    if (newText) {
      this.handleShowPasswordModal(); // Показ модального окна для пароля
    } else {
      alert("Bitte geben Sie Text ein.");
    }
  };

  handleDeletePost = (index) => {
    const { posts, userId } = this.state;
    if (posts[index].userId === userId) {
      const updatedPosts = posts.filter((_, i) => i !== index);
      this.setState({ posts: updatedPosts });
    } else {
      alert("Sie können diesen Beitrag nicht löschen.");
    }
  };

  handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const { posts, userId } = this.state;
      if (posts[index].userId === userId) {
        const updatedPosts = [...posts];
        updatedPosts[index].image = reader.result;
        this.setState({ posts: updatedPosts });
      } else {
        alert("Sie können dieses Bild nicht ändern.");
      }
    };
    reader.readAsDataURL(file);
  };

  handleEditPost = (index) => {
    const { posts } = this.state;
    this.setState({
      editingIndex: index,
      editedText: posts[index].text,
    });
  };

  handleSaveEdit = (index) => {
    const { posts, editedText, userId } = this.state;
    if (posts[index].userId === userId) {
      const updatedPosts = [...posts];
      updatedPosts[index].text = editedText;
      this.setState({
        posts: updatedPosts,
        editingIndex: null,
        editedText: "",
      });
    } else {
      alert("Sie können diesen Beitrag nicht bearbeiten.");
    }
  };

  handleCancelEdit = () => {
    this.setState({
      editingIndex: null,
      editedText: "",
    });
  };

  handleEditedTextChange = (event) => {
    this.setState({ editedText: event.target.value });
  };

  handleImageClick = (image) => {
    this.setState({
      showModal: true,
      modalImage: image,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      modalImage: "",
    });
  };

  render() {
    const {
      posts,
      newText,
      editingIndex,
      editedText,
      showModal,
      modalImage,
      showPasswordModal,
      password,
    } = this.state;

    return (
      <div className="page-container">
        <div className="content-wrap">
          {/* Модальное окно для увеличенного изображения */}
          <Modal show={showModal} onHide={this.handleCloseModal} centered>
            <Modal.Body>
              <img src={modalImage} alt="Enlarged" style={{ width: "100%" }} />
              <Button
                variant="secondary"
                onClick={this.handleCloseModal}
                className="mt-3"
              >
                Schließen
              </Button>
            </Modal.Body>
          </Modal>

          {/* Модальное окно для ввода пароля */}
          <Modal
            show={showPasswordModal}
            onHide={this.handleClosePasswordModal}
            centered
          >
            <Modal.Body>
              <Form>
                <Form.Group controlId="formPassword">
                  <Form.Label>Geben das Passwort ein</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                    placeholder="Passwort"
                  />
                </Form.Group>
                <Button variant="primary" onClick={this.handleConfirmPassword}>
                  Einreichen
                </Button>
                <Button
                  variant="secondary"
                  onClick={this.handleClosePasswordModal}
                  className="ml-2"
                >
                  Stornieren
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Форма добавления нового поста */}
          <Row className="justify-content-center mt-5">
            <Col md="8">
              <Card>
                <Card.Body>
                  <h5 className="mb-3 text-center">Fügen neuer Beitrag hinzu</h5>
                  <Form>
                    <Form.Group controlId="formTextInput" className="mt-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={newText}
                        onChange={this.handleTextChange}
                        placeholder="Geben Text ein"
                        style={{ width: "100%", boxSizing: "border-box" }}                     
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      className="mt-3"
                      onClick={this.handleAddPost}
                    >
                      Beitrag hinzufügen
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Секция с постами */}
          <Row className="mt-5 justify-content-center">
            <Col md="8">
              <div
                className="d-flex flex-column"
                style={{ width: "90%", margin: "0 auto" }}
              >
                {posts.map((post, index) => (
                  <div
                    className="mb-4"
                    key={index}
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      boxSizing: "border-box",
                    }}
                  >
                    <div className="d-flex">
                      <img
                        height={150}
                        src={post.image} // Автоматическое изображение
                        alt="Blog post"
                        onClick={() => this.handleImageClick(post.image)} // Обработчик клика для увеличения изображения
                        style={{
                          cursor: "pointer",
                          marginRight: "15px",
                          maxWidth: "100%",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h5>{post.timestamp}</h5>{" "}
                        {/* Отображение даты и времени поста */}
                        {/* Проверка, редактируется ли пост */}
                        {editingIndex === index ? (
                          <Form.Control
                            as="textarea"
                            rows={3}
                            value={editedText}
                            onChange={this.handleEditedTextChange}
                            style={{ width: "100%", boxSizing: "border-box" }} // Установите ширину в 100% и добавьте boxSizing
                          />
                        ) : (
                          <p style={{ wordWrap: "break-word", width: "100%" }}>
                            {post.text}
                          </p> // Установите ширину в 100% для полного использования пространства
                        )}
                      </div>
                    </div>
                    {post.userId === this.state.userId && (
                      <div
                        className="d-flex align-items-center mt-3"
                        style={{ gap: "10px" }}
                      >
                        {" "}
                        {/* Кнопки по горизонтали */}
                        {editingIndex === index ? (
                          <>
                            <Button
                              variant="success"
                              onClick={() => this.handleSaveEdit(index)}
                              style={{ marginRight: "10px" }}
                            >
                              Speichern
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={this.handleCancelEdit}
                              style={{ marginRight: "10px" }}
                            >
                              Stornieren
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="warning"
                              onClick={() => this.handleEditPost(index)}
                              style={{ marginRight: "10px" }}
                            >
                              Bearbeiten
                            </Button>
                            <div className="custom-file-upload">
                              <input
                                type="file"
                                className="custom-file-input"
                                onChange={(e) => this.handleImageUpload(e, index)}
                                id={`file-upload-${index}`} // Уникальный id для каждого файла
                              />
                              <label
                                htmlFor={`file-upload-${index}`}
                                className="btn btn-secondary"
                              >
                                Datei auswählen
                              </label>
                            </div>
                            <Button
                              variant="danger"
                              onClick={() => this.handleDeletePost(index)}
                            >
                              &times;
                            </Button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}
