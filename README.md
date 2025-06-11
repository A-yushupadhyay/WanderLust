# 🏕️ WanderLust – Full-Stack Travel Listing & Review Platform

WanderLust is a full-stack web application inspired by Airbnb that allows users to explore, create, review, and manage travel listings around the world. Built using Node.js, Express, MongoDB, and EJS, it supports full authentication, session-based access, and flash messaging.


WandurLust is Hosted on  -  https://first-project-1-3p5h.onrender.com/listings

![Screenshot (281)](https://github.com/user-attachments/assets/efe25c02-47b6-428d-83bf-c52e489d9ed6)

![Screenshot (282)](https://github.com/user-attachments/assets/253cc9c9-a67f-43ec-9ad8-3f3f7846bbef)

![Screenshot (283)](https://github.com/user-attachments/assets/cea6cfab-0c2e-4911-ae20-50b834a45729)



![Screenshot (285)](https://github.com/user-attachments/assets/1c7f1d9c-7520-4939-8a6f-ea43bc354a93)


![Screenshot (286)](https://github.com/user-attachments/assets/d1db0180-7bf4-49dc-843f-a72858557c16)



---

## 🌟 Features

- 🗺️ **Explore All Listings** – Browse places submitted by the community.
- ➕ **Create New Listings** – Add your own locations with title, price, image, and description.
- ✏️ **Edit & Delete Listings** – Only by the author of the listing.
- ⭐ **Add Reviews** – Authenticated users can review places.
- 🔐 **User Authentication** – Register, Login, Logout with full session support.
- 🛡️ **Secure Session Store** – Stored in MongoDB Atlas via `connect-mongo`.
- 🔔 **Flash Messages** – Feedback on actions like success and errors.
- 🧼 **Clean UI** – Built with Bootstrap 5.

---

## 🧠 Tech Stack

| Layer       | Tech Used                      |
|-------------|--------------------------------|
| Backend     | Node.js, Express.js            |
| Frontend    | EJS templating + Bootstrap     |
| Database    | MongoDB with Mongoose          |
| Auth        | Passport.js (Local Strategy)   |
| Session     | express-session + connect-mongo|
| Flash Msgs  | connect-flash                  |
| Templating  | ejs-mate                       |
| Deployment  | [Optional: Add if deployed]    |

---

## 🚀 Getting Started

### 🛠️ Prerequisites
- Node.js v18+
- MongoDB Atlas URI
- Environment Variables (`.env` file)

### 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/WanderLust
cd WanderLust

# 2. Install dependencies
npm install

# 3. Add environment variables
touch .env
```

```bash
ATLASDB_URL=your_mongodb_uri
SECRET=your_secret_key


# 4. Start the server
node app.js

# App runs at: http://localhost:8080
```


🗂️ Project Structure
bash
Copy
Edit
WanderLust/
│
├── models/              # Mongoose schemas (User, Listing, Review)
├── routes/              # Express routers (Listings, Reviews, Auth)
├── views/               # EJS templates
│   ├── partials/        # Header, footer, flash messages
│   ├── listings/        # Index, show, edit, new
│   └── users/           # Login, register
├── public/              # Static files (CSS, JS, images)
├── middleware/          # Reusable middlewares (auth, validation)
├── app.js               # Main server file
├── .env                 # Environment variables
└── package.json         # Project metadata



✨ Highlights
✅ Session Store using connect-mongo

✅ Modular Express Routers

✅ Custom error handling via middleware

✅ Passport.js integration with Local Strategy

✅ Clean MVC architecture

✅ Fully responsive with Bootstrap

🚧 Future Improvements
📍 Map integration using Mapbox

📸 Cloudinary support for image uploads

🧾 Filtering and search by tags or location

📞 Contact form with nodemailer

📬 Contact
Made with ❤️ by Ayush Upadhyay
📧 Email: puskaru202@gmail.com
