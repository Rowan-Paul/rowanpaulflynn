function Layout({ children }: any) {
  return (
    <div className="container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default Layout;
