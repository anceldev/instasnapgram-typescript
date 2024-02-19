export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
};
export type IUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
};
export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
};
export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string
}
export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
};
export type IContextType = {
    user: IUser;
    isLoading: boolean;
    isAuthenticated: boolean;
    /* React.Dispatch is a generic type in React that represents the type of a state 
    updater function. It is used to define the function signature for updating state 
    in a React component.
    React.SetStateAction<IUser> is another generic type in React. It represents the 
    type of the value that can be passed to the state updater function to update the 
    state variable of type IUser 
    */
    setUser: React.Dispatch<React.SetStateAction<IUser>>; 
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};
