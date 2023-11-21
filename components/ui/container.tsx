interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container mx-auto w-full max-w-3xl">
            {children}
        </div>
    );
};

export default Container;