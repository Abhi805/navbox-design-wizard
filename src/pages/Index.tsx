import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary-foreground">Welcome</h1>
          <p className="mt-4 text-secondary">Start searching above!</p>
        </div>
      </main>
    </div>
  );
};

export default Index;