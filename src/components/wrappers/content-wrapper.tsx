export default function ContentWrapper({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className}`}>
      <div className="container mx-auto h-full px-3 md:px-6 lg:px-12 2xl:px-32">
        {children}
      </div>
    </div>
  );
}
