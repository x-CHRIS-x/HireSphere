import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

const USERS = [
  { email: 'admin@hiresphere.com', password: 'admin123', role: 'admin', name: 'Admin User' },
  { email: 'applicant@hiresphere.com', password: 'applicant123', role: 'applicant', name: 'Maria Santos' },
  { email: 'encoder@hiresphere.com', password: 'encoder123', role: 'encoder', name: 'Carlos Reyes' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((email, password) => {
    const found = USERS.find(u => u.email === email && u.password === password);
    if (found) {
      setUser({ email: found.email, role: found.role, name: found.name });
      return { success: true, role: found.role };
    }
    return { success: false, error: 'Invalid email or password' };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
