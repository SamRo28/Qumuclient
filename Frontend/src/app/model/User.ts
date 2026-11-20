export interface User {
  email: string;
  role?: string;
  isAdmin?: boolean;
}

export type UserResponse = User;
