# Major-Project  
# 👷 JobConnect — A Job Portal for Uneducated and Unemployed Individuals

**JobConnect** is a full-stack web application built to bridge the gap between employers and unskilled or semi-skilled workers such as security guards, laborers, and domestic help. It provides a simple and user-friendly platform where an admin can post jobs, and job seekers can search and apply without needing to upload resumes or have strong digital literacy.

---

## 📌 Key Features

### 👤 User Roles
- **Admin**: Posts job listings, manages system data.
- **Job Seekers**: Can register, update profiles, view jobs, and apply.
- **Customers** : Can browse and book available workers.

### ✅ Functional Highlights
- Session-based login and authentication
- Job posting by admin (e.g., Security Guard, Labourer)
- Job search by role, location, or skill
- Interactive map to view job locations
- Profile creation and updates for job seekers
- Apply to jobs directly without resumes
- Secure backend validation

---

## 🛠️ Tech Stack

| Layer         | Technology                     | Purpose                                           |
|---------------|-------------------------------|---------------------------------------------------|
| Frontend      | React.js, JavaScript, MUI      | UI development, responsive design                 |
| Backend       | Spring Boot (Java)             | API creation, business logic, and session handling|
| Database      | MySQL                          | Stores users, jobs, profiles, bookings            |
| Styling       | CSS                            | UI layout and responsiveness                      |
| Tools         | VS Code, Postman               | Development and testing                           |
| Maps          | Google Maps API / OpenStreetMap  | Display job vacancies on map         |

---

## 🧪 Functional Requirements

- User Registration & Login (session-based)
- Admin can:
  - Post new job openings
  - Manage job listings
- Job Seekers can:
  - Search jobs by location/role
  - View job availability on a map
  - Apply for jobs directly
  - Create and update personal profile

---

## ⚙️ Non-Functional Requirements

- **Responsive Design**: Mobile and desktop friendly
- **Performance**: Fast page loads and efficient data calls
- **Security**: Session-based authentication and role-based access
- **Usability**: Easy-to-use interface for users with low digital literacy


---

## 🧱 System Architecture

### 🖥️ Client-side (Frontend)
- Built with React.js and Material UI
- Communicates with backend through REST APIs

### 🖧 Server-side (Backend)
- Built using Spring Boot
- Manages business logic, session-based login, and role-based access

### 🗄️ Database
- MySQL for storing:
  - User and admin data
  - Job listings
  - Booking information
  - Worker profiles
  - Security Guard Profiles

---

## 🗺️ Job Location Map Feature

- An interactive **map interface** shows where job openings are available.
- Helps job seekers **visually find nearby vacancies**.
- Filters by location or role can be applied.

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
cd "React Project/test"
npm install
npm start
