export interface User {
  name: string;
  avatar: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: 'Terminé' | 'En cours' | 'À faire';
  assignee: User;
}
