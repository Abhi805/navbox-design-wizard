import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main className="pt-5 mt-5 px-4">
        <div className="container">
          <h1 className="display-4 fw-bold text-dark">Welcome</h1>
          <p className="text-secondary mt-4">Start searching above!</p>
        </div>
      </main>
    </div>
  );
};

export default Index;