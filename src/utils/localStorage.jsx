const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile the sales and revenue data for the past month.",
        date: "2024-10-20",
        category: "Reports",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client meeting",
        description: "Discuss project scope with client ABC.",
        date: "2024-10-18",
        category: "Meetings",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team presentation",
        description: "Present project progress to the team.",
        date: "2024-10-22",
        category: "Presentation",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Code review",
        description: "Review and merge pull requests from the team.",
        date: "2024-10-19",
        category: "Development",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update project documentation",
        description:
          "Ensure all the documentation is up to date with new features.",
        date: "2024-10-21",
        category: "Documentation",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Server maintenance",
        description: "Check and update server configurations.",
        date: "2024-10-23",
        category: "Maintenance",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design logo",
        description: "Create a logo for the new product line.",
        date: "2024-10-18",
        category: "Design",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Marketing strategy",
        description: "Outline the marketing strategy for Q4.",
        date: "2024-10-21",
        category: "Marketing",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Feedback analysis",
        description: "Analyze customer feedback from last month.",
        date: "2024-10-19",
        category: "Research",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory check",
        description: "Perform a stock count of the warehouse.",
        date: "2024-10-20",
        category: "Operations",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Supplier meeting",
        description: "Meet with supplier to discuss terms for new materials.",
        date: "2024-10-21",
        category: "Procurement",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Shipment tracking",
        description: "Ensure all outgoing shipments are tracked properly.",
        date: "2024-10-22",
        category: "Logistics",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer support",
        description: "Resolve pending support tickets.",
        date: "2024-10-19",
        category: "Support",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team training",
        description: "Train new employees on company software.",
        date: "2024-10-21",
        category: "Training",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "System upgrade",
        description: "Upgrade internal systems to the latest version.",
        date: "2024-10-23",
        category: "IT",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
