import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type UserPlan = "free" | "premium";

export type AuthUser = {
    id: string;
    name: string;
    email: string;
    plan: UserPlan;
};

type AuthContextType = {
    user: AuthUser | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
    register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
    logout: () => void;
    upgradeToPremium: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "tf_auth";
const USERS_KEY = "tf_users";

type StoredUser = AuthUser & { passwordHash: string };

function hashPassword(password: string): string {
    // Simple deterministic hash for localStorage-based auth (no backend)
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = (hash << 5) - hash + password.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString(36);
}

function loadUsers(): StoredUser[] {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveUsers(users: StoredUser[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession(): AuthUser | null {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    } catch {
        return null;
    }
}

function saveSession(user: AuthUser | null) {
    if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
        localStorage.removeItem(STORAGE_KEY);
    }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const session = loadSession();
        setUser(session);
        setIsLoading(false);
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        const users = loadUsers();
        const found = users.find(
            (u) => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === hashPassword(password)
        );
        if (!found) {
            return { ok: false, error: "Correo o contraseña incorrectos." };
        }
        const { passwordHash: _omit, ...authUser } = found;
        setUser(authUser);
        saveSession(authUser);
        return { ok: true };
    }, []);

    const register = useCallback(async (name: string, email: string, password: string) => {
        const users = loadUsers();
        if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
            return { ok: false, error: "Ya existe una cuenta con ese correo." };
        }
        const newUser: StoredUser = {
            id: Date.now().toString(36),
            name: name.trim(),
            email: email.toLowerCase().trim(),
            plan: "free",
            passwordHash: hashPassword(password),
        };
        saveUsers([...users, newUser]);
        const { passwordHash: _omit, ...authUser } = newUser;
        setUser(authUser);
        saveSession(authUser);
        return { ok: true };
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        saveSession(null);
    }, []);

    const upgradeToPremium = useCallback(() => {
        if (!user) return;
        const upgraded: AuthUser = { ...user, plan: "premium" };
        // Update stored users list
        const users = loadUsers();
        const idx = users.findIndex((u) => u.id === user.id);
        if (idx !== -1) {
            users[idx] = { ...users[idx], plan: "premium" };
            saveUsers(users);
        }
        setUser(upgraded);
        saveSession(upgraded);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout, upgradeToPremium }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
