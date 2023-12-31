# Triveous_Ecommerce_API_with_Node_js

This project involves the development of a robust backend API for an eCommerce application. The primary focus of the project is on the logic and functionality that powers the eCommerce platform and the backend's routes, use cases, and careful consideration of edge cases are crucial for building a reliable and functional eCommerce system. This backend can later be integrated with various frontend platforms to create a complete eCommerce solution.

## Deployed Link

```bash
  https://triveous-ecommerce.onrender.com/
```

## API Documentation Swagger

```bash
  https://triveous-ecommerce.onrender.com/api-docs/
```

## Key Features

- **High Prformance**: insures that the eCommerce site can handle high traffic loads efficiently.
- **Scalability**: easily adapt to increased user demand by adding more servers or resources as needed.
- **API Devlopment**: building APIs, to interact with frontend interfaces, mobile apps, and third-party services.
- **Database Integration**: can integrate with MongoDB, offering flexibility in choosing the right database solution.
- **Security**: protect sensitive customer information, such as encryption, authentication, and authorization mechanisms.
- **Inventory Management**: efficiently manage product inventory, order processing, and shipping logistics.
- **User Authentication and Authorization**: ensures that only authorized users can access certain parts of the website.

## Tech Stack

- Backend: Node.js


## Getting Started

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js
   ```
   
2. Install dependencies:
   ```
   npm install 
   ```

3. Application Start
   ```
   npm run server
   ```


## Endpoints Reference

### Home Route

- `GET /`: Get the welcome message.
- ...


### User Authentication and Authorization Routes

- `POST /user/register`: Register a new user.
- `POST /user/login`: Login a user.
- `POST /user/logout`: Logout a user.
- ...

### Seller Product Routes(RBAC)

- `GET /seller/products`: Seller who currently logged in can fetch all products posted him.
- `GET /seller/products/:id`:  Seller who currently logged in can fetch a specific product using its ID.
- `POST /seller/products/addProduct`:  Seller who currently logged in can post a new product.
- `PATCH /seller/products/updateProduct/:id`:  Seller who currently logged in can update his products.
- `DELETE /seller/products/deleteProduct/:id`:  Seller who currently logged in can delete his products.
- ...

### User Product Routes(Public)

- `GET /user/products`: All user can fetch all products.
- `GET /user/products/:id`: All user can get a specific product using its ID.
- `GET /user/products/categories`: All users can fetch categories.
- ...

### Cart Routes(Only Login User can access)

- `GET /cart`: User who logged in can get his cart.
- `POST /cart/add`: User who logged in can add products to his cart.
- `PATCH /cart/decrement/:id`: User who logged in can decrease cart product quantitiy.
- `PATCH /cart/increase/:id`: User who logged in can increase cart product quantitiy.
- `DELETE /cart/delete/:id`: User who logged in can delete product form his cart.
- ...

### Order Routes(Only Login User can access)

- `POST /order`: User who logged in can order form his cart.
- `GET /order/history`: User who logged in can get his order history.
- `GET /order/:id`: User who logged in can get a specific order by its ID.
- `PATCH /order/updateStatus/:id`: Seller can update the status of the product.
- ...



#### Dummy Seller Credentials 1: 
email: `ramlal@gmail.com`
password: `ramlal`


#### Dummy Seller Credentials 2: 
email: `gangadhar@gmail.com`
password: `gangadhar`


#### Dummy User Credentials 1: 
email: `chunnu@gmail.com`
password: `chunnu`


#### Dummy User Credentials 2: 
email: `munnu@gmail.com`
password: `munnu`


## API Documentation 

### User-swagger
![image](https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js/assets/112754413/e9848fe8-464f-4781-86fd-f91f57154ceb)


### User-Products-swagger
![image](https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js/assets/112754413/6aa09919-e74a-4a6f-b12d-5367a09afbae)


### Seller-Products-swagger
![image](https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js/assets/112754413/3d31e7e1-6b77-4931-9e68-332ff64a54e8)



### Cart-swagger
![image](https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js/assets/112754413/1d72e563-9b2e-4814-ba22-a65a9121056c)


### order-swagger
![image](https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js/assets/112754413/abd3212b-747f-405e-b7c1-a0c372b79d19)


### Schema-swagger
![image](https://github.com/aman1722/Triveous_Ecommerce_API_with_Node_js/assets/112754413/bb5d6910-f362-4f87-b881-493c035961cf)

