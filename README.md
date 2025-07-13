# Major-Project  
# 👷 JobConnect — A Job Portal for Uneducated and Unemployed Individuals

**JobConnect** is a full-stack web application built to bridge the gap between employers and unskilled or semi-skilled workers such as security guards, laborers, and domestic help. It aims to provide a simple and user-friendly platform where employers can post jobs and job seekers can apply without needing to upload resumes or have strong digital literacy.

---

## 📌 Key Features

### 👥 User Roles
- **Job Seekers**: Can register, update profiles, search for jobs, and apply.
- **Employers**: Can register, post job openings, and manage listings.

### ✅ Functional Highlights
- User registration and secure login
- Job posting by employers (e.g., Security Guard, Labourer)
- Job search based on role, location, and skill
- Profile creation and management for workers
- Apply to jobs without uploading resumes
- Backend validation and secure authentication (JWT)

---

## 🛠️ Tech Stack

| Layer         | Technology                     | Purpose                                           |
|---------------|-------------------------------|---------------------------------------------------|
| Frontend      | React.js, JavaScript, MUI      | UI development, responsive and user-friendly design |
| Backend       | Spring Boot (Java)             | API creation, business logic, and backend security |
| Database      | MySQL                          | Stores user data, job listings, and profiles       |
| Styling       | CSS                            | UI layout and styling                             |
| Tools         | VS Code, Postman               | Development and API testing                       |

---

## 🧪 Functional Requirements

- User Registration & Login
- Account creation for job seekers and employers
- Secure backend validation and token-based login
- Employers can:
  - Post job openings
- Job Seekers can:
  - Search for jobs by role/location/skill
  - Apply to jobs directly
  - Create/update profiles with skill info

---

## ⚙️ Non-Functional Requirements

- **Responsive Design**: Fully functional on desktop and mobile.
- **Performance**: Fast loading and optimized backend calls.
- **Security**: Token-based authentication using JWT and HTTPS.
- **Scalability**: Architecture allows future upgrades like a mobile app or multi-language support.
- **Usability**: Designed for users with limited digital literacy.

---

## 🧱 System Architecture

### 🖥️ Client-side (Frontend)
- Built with React.js and Material UI
- Communicates with backend via REST APIs

### 🖧 Server-side (Backend)
- Spring Boot handles logic, data access, authentication, and API endpoints

### 🗄️ Database
- MySQL stores worker profiles, job postings, employer data, and applications

---

## 🚀 Getting Started

### Prerequisites
- Node.js, npm
- Java JDK 17+
- MySQL
- Maven

### Frontend Setup

```bash
git clone https://github.com/Niladri-Chowdhury2004/Major-Project.git
cd Major-Project/frontend
npm install
npm start
