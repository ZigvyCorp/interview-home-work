"use client";

import type { FC, ReactNode } from "react";
import { createContext, useCallback, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import CookieHelper, { CookieKeys } from "@/utils/cookie-hepler";
import { UsersApi } from "@/api/users";

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

enum ActionType {
  UPDATE = "UPDATE",
  INITIALIZE = "INITIALIZE",
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

type UpdateAction = {
  type: ActionType.UPDATE;
  payload: {
    user: Partial<User>;
  };
};

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type SignInAction = {
  type: ActionType.SIGN_IN;
  payload: {
    user: User;
  };
};

type SignOutAction = {
  type: ActionType.SIGN_OUT;
};

type Action = InitializeAction | SignInAction | SignOutAction | UpdateAction;

type Handler = (state: State, action: any) => State;

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers: Record<ActionType, Handler> = {
  UPDATE: (state: State, action: UpdateAction): State => {
    const { user } = action.payload;

    return {
      ...state,
      user: state.user ? { ...state.user, ...user } : null,
    };
  },
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN: (state: State, action: SignInAction): State => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  SIGN_OUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export interface AuthContextType extends State {
  updateUser: (user: Partial<User>) => void;
  signIn: (email: string, password: string) => Promise<User | undefined>;

  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  updateUser: () => {},
  signIn: () => Promise.resolve(undefined),
  signOut: () => Promise.resolve(),
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const updateUser = useCallback(
    (user: Partial<User>) => {
      dispatch({
        type: ActionType.UPDATE,
        payload: {
          user,
        },
      });
    },
    [dispatch]
  );

  const initialize = useCallback(async (): Promise<void> => {
    try {
      const accessToken = CookieHelper.getItem(CookieKeys.TOKEN);
      if (accessToken) {
        const user = await UsersApi.me();
        if (!user) {
          throw new Error("Ger user failed.");
        }
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = useCallback(
    async (email: string, password: string): Promise<User> => {
      const response = await UsersApi.signIn({ username: email, password });

      CookieHelper.setItem(CookieKeys.TOKEN, response.token);

      dispatch({
        type: ActionType.SIGN_IN,
        payload: {
          user: response.data,
        },
      });
      return response.data;
    },
    [dispatch]
  );

  const signOut = useCallback(async (): Promise<void> => {
    CookieHelper.removeItem(CookieKeys.TOKEN);
    dispatch({ type: ActionType.SIGN_OUT });
    router.push("/");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        updateUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
