# 📝 React Todo App

A simple and responsive **Todo List Application** built with **React + Vite**.  
This app allows users to add, view, and delete tasks, with all tasks stored in **localStorage** for persistence — even after refreshing the browser.

---

## 🚀 Features

- ➕ Add new tasks
- ❌ Delete existing tasks
- 💾 Persistent data using **localStorage**
- 🟢 Success message when a task is added
- 🔴 Delete message when a task is removed
- 📭 Empty list message when no tasks exist
- 🧠 Clean and minimal UI with custom CSS styling

---

## 🧩 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Custom CSS
- **Storage:** LocalStorage
- **Icons:** Font Awesome

---

## 📂 Project Structure

react-todo/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── Todo_Add.jsx # Main component for adding & managing tasks
│ │ ├── Task_list.jsx # Component to render each individual task
│ │
│ ├── App.jsx # Root component
│ ├── App.css # Styling file
│ ├── main.jsx # React entry point
│
├── index.html
├── package.json
└── README.md


---

## ⚙️ Installation and Setup

Follow these steps to run the app locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open in browser

Vite will provide a local URL (e.g., http://localhost:5173/)
Open it in your browser to use the app.


💡 How It Works

When you add a new task, it’s saved in the localStorage.

The app automatically loads tasks from localStorage on every page refresh.

You can delete any task, and it updates both the UI and localStorage immediately.

Conditional messages are displayed:

🟢 “Todo item created successfully!” on add

🔴 “Todo item deleted!” on delete

🔴 “Your task list is empty” when no tasks exist

🧑‍💻 Author
Kalva Vikranth
💼 Full Stack Developer
📧 vikranthlucky123@gmail.com
🌐 https://www.linkedin.com/in/vikranthkalva

📄 License

This project is licensed under the MIT License — you’re free to use and modify it.

🏗️ Built With

[React](https://react.dev/)  
[Vite](https://vitejs.dev/)  
[Font Awesome](https://fontawesome.com/)