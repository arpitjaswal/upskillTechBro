# Upskill Tech Bro - Job Switch Platform

A comprehensive platform designed to help tech professionals track their job switch journey, manage daily tasks, and stay consistent with their learning and interview preparation.

## 🚀 Features

- **User Authentication**: Secure signup and login system
- **Personalized Roadmap**: Create and manage your job switch roadmap
- **Milestone Tracking**: Track your progress with milestones and tasks
- **Daily Progress Log**: Log your daily activities and time spent
- **Resource Management**: Save and organize learning resources
- **Progress Analytics**: Visualize your progress over time

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful API design
- **Frontend**: (To be implemented) React.js

## 📦 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/upskill-tech-bro.git
   cd upskill-tech-bro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/upskill-tech-bro
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000`

## 📚 API Documentation

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Roadmap

- `GET /api/roadmap` - Get user's roadmap
- `POST /api/roadmap` - Create a new roadmap
- `PUT /api/roadmap` - Update roadmap
- `POST /api/roadmap/milestones` - Add a milestone
- `PUT /api/roadmap/milestones/:milestoneId` - Update milestone status

## 🧪 Running Tests

```bash
# Run tests
npm test
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the struggles of tech professionals switching jobs
- Built with ❤️ for the developer community
