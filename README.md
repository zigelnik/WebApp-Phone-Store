

<p align="center">
  <h1 align="center">📱 Phonebook - E-Commerce Website</h1>
  <p align="center">
    <br>
  <img src="https://github.com/Orshimon810/WebApp-Phone-Store/assets/113368830/81a5bdf5-0426-477c-b522-feb5d01b7ded" width="300">
    
  </p>
</p>
<br><br>
              
<!-- TABLE OF CONTENTS -->
## 📋 Table of Contents

- [About the Project](#about-the-project)
  - [Key Features](#key-features)
  - [Built With](#built-with)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Demo](#demo)
- [Acknowledgements](#acknowledgements)

---

<!-- ABOUT THE PROJECT -->
## About the Project

**Phonebook** is a fully functional e-commerce website built using **Node.js** and **Express.js**, featuring a responsive design for showcasing products, managing orders, and enabling cart functionality. It includes:
- **User Authentication**: Login and registration for customers and admin accounts.
- **CRUD Functionality**: Full Create, Read, Update, and Delete support for products, orders, users, and cart items.
- **APIs for Dynamic Content**:
  - **Google Maps API**: Displays branch locations on an interactive map.
  - **GNews API**: Fetches and displays the latest news articles.
  - **Facebook API**: Enables posting products to the website's Facebook page.

The project leverages **MongoDB** as the database for scalable and efficient data management.

---

### Key Features

- **Product Management**:
  - Admins can add, edit, and delete products.
  - Users can view and search for products.
- **User Roles**:
  - Regular users can browse, add to cart, and order.
  - Admins have access to additional features like managing products and users.
- **Dynamic APIs**:
  - Integration with external APIs (Google Maps, GNews, Facebook) for dynamic data.
- **Real-time Features**:
  - **Socket.io** for chat functionality with real-time updates.

---

## Environment Variables

To run the project, the following environment variables are required:

```plaintext
PORT=3000
MONGODB_URL=<Your MongoDB Connection String>
API_URL=/api/v1
SECRET=<Your Secret Key>
```

Create a `config` folder and inside create a `.env.dev` file and add the variables above. Ensure these values are secure and not hardcoded into the application.

---

## Built With

- **[Node.js](http://nodejs.org)**:
  - **Express**: Backend framework for building REST APIs.
  - **Mongoose**: ODM library for MongoDB.
- **[MongoDB](https://mongodb.com)**: NoSQL database for storing user data, products, orders, and more.
- **APIs**:
  - **Google Maps API**: Display branch locations on an interactive map.
  - **GNews API**: Fetch and display news articles.
  - **Facebook API**: Share products to the website's Facebook page.
- **Socket.io**: Enables real-time chat functionality.

---
## Getting Started

Follow the steps below to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

---

### Installation

1. **Fork the Repository**:
   Click the fork button on GitHub to create your copy of the repository.

2. **Clone the Repository**:
   Clone your forked repo to your local machine.


3. **Install Dependencies**:
   Navigate to the project directory and install the required npm packages:
   ```bash
   cd WebApp-Phone-Store
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env.dev` file in the `config` folder and add your environment variables as outlined above.

---

### Running the Application

To start the application locally:

**Run the Development Server**:
   ```bash
   npm run dev
   ```


Visit the application at `http://localhost:5500/views/mainPage.html`.

---

## Demo

Check out the live demo or watch the preview:

<a href="https://www.veed.io/embed/19b1ee62-63e7-4ea0-a3af-120918d50327">
  <img src="https://i.ibb.co/kXpvRHf/phonebook.png" alt="Phonebook Demo" border="0" />
</a>

---

## Screenshots
![SHOP2](https://github.com/user-attachments/assets/b9732916-38a3-4d6d-bc2c-3e209bd6203f)
![SHOP](https://github.com/user-attachments/assets/90f17c06-782e-47a7-a80f-87514b2ba7bf)
![home2](https://github.com/user-attachments/assets/b35e8cc6-5292-40b9-b003-6a41de646f2d)
![CART](https://github.com/user-attachments/assets/9d8548f5-f0fd-43c2-811f-55b078eaf546)
![admin_users](https://github.com/user-attachments/assets/851d4aa0-cac9-4039-b6bf-e322a1a4a72c)
![admin_stats2](https://github.com/user-attachments/assets/c6e24af7-06ee-4094-83aa-f8be2e72e8d1)
![admin_products](https://github.com/user-attachments/assets/f6e90b8b-df0c-4e45-863e-b5b1effd7354)
![admin_orders](https://github.com/user-attachments/assets/6c9ccf38-ceb5-416c-a188-7266baaa0b16)


## Acknowledgements

This project was built with the help of the following resources and contributors:
- **Learning Resources**: [StackOverflow](https://stackoverflow.com), [W3Schools](https://www.w3schools.com), [GetBootstrap](https://getbootstrap.com)
- **APIs**:
  - [Google Maps API](https://developers.google.com/maps)
  - [GNews API](https://gnews.io/)
  - [Facebook Graph API](https://developers.facebook.com/docs/graph-api)
- **Tech Support**: ASUS, OnePlus, Apple, Samsung, Xiaomi, Lenovo, HP.

---

