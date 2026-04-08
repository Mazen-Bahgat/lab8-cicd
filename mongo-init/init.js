db = db.getSiblingDB('lab8db');

db.tasks.insertMany([
  { title: 'Milk', completed: true },
  { title: 'Eggs', completed: true },
  { title: 'Bread', completed: false },
  { title: 'Butter', completed: false },
  { title: 'Orange juice', completed: false },
  { id: 5, name: 'Tea',  status: 'pending' }
]);
