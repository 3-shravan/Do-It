const employee = [
  {
    id: 1,
    email: "shantanuyadav379@gmail.com",
    username: "Shravan",
    password: "shravan",
    role: "employee",
    tasks: [
      {
        taskTitle: "Submit Monthly Report",
        taskDescription:
          "Complete the monthly financial report and submit to the manager.",
        failed: false,
        completed: true,
        newTask: false,
        active: false,
        taskDate: "2024-11-15",
        category: "Finance",
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription:
          "Create a presentation for the upcoming client meeting.",
        failed: false,
        completed: false,
        newTask: true,
        active: true,
        taskDate: "2024-11-20",
        category: "Meetings",
      },
    ],
    taskCounts: {
      active: 3,
      newTask: 1,
      failed: 0,
      completed: 2,
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    username: "Upendra",
    password: "employee123",
    role: "employee",
    tasks: [
      {
        taskTitle: "Inventory Check",
        taskDescription: "Check and update inventory records in the system.",
        failed: false,
        completed: true,
        newTask: false,
        active: false,
        taskDate: "2024-11-18",
        category: "Operations",
      },
    ],
    taskCounts: {
      active: 0,
      newTask: 0,
      failed: 0,
      completed: 1,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    username: "Sneha",
    password: "employee123",
    role: "employee",
    tasks: [
      {
        taskTitle: "Client Follow-Up",
        taskDescription:
          "Call and follow up with clients regarding project updates.",
        failed: false,
        completed: false,
        newTask: true,
        active: true,
        taskDate: "2024-11-25",
        category: "Client Relations",
      },
      {
        taskTitle: "Team Meeting",
        taskDescription:
          "Participate in the weekly team meeting and share updates.",
        failed: false,
        completed: false,
        newTask: true,
        active: true,
        taskDate: "2024-11-22",
        category: "Team",
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      failed: 0,
      completed: 0,
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    username: "Shantanu",
    password: "employee123",
    role: "employee",
    tasks: [
      {
        taskTitle: "Update Website",
        taskDescription:
          "Update the company website with the latest announcements.",
        failed: false,
        completed: true,
        newTask: false,
        active: false,
        taskDate: "2024-11-14",
        category: "Web",
      },
    ],
    taskCounts: {
      active: 0,
      newTask: 0,
      failed: 0,
      completed: 1,
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    username: "Priya",
    password: "employee123",
    role: "employee",
    tasks: [
      {
        taskTitle: "Prepare Budget Proposal",
        taskDescription: "Prepare a budget proposal for the next quarter.",
        failed: true,
        completed: false,
        newTask: false,
        active: false,
        taskDate: "2024-11-12",
        category: "Finance",
      },
      {
        taskTitle: "Organize Files",
        taskDescription: "Sort and organize files in the shared drive.",
        failed: false,
        completed: true,
        newTask: false,
        active: false,
        taskDate: "2024-11-10",
        category: "Manage",
      },
    ],
    taskCounts: {
      active: 0,
      newTask: 0,
      failed: 1,
      completed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    username: "RaoSahab",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};
