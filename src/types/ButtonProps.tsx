export type ButtonProps = {
    theme: 'light' | 'dark';
    children: React.ReactNode;
    onClick?: () => void;
};