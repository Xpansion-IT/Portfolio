export default function ContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <div className="container mx-auto h-full px-3 md:px-6 lg:px-24 2xl:px-32">
        {children}
      </div>
    </div>
  );
}
