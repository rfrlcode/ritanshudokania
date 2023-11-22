interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex min-h-screen flex-col py-8 max-w-3xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
