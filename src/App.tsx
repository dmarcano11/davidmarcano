import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-left">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-bold mb-6 sm:mb-8">
            David Marcano
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            I'm a full-stack engineer at JP Morgan Chase, where I've been coding professionally 
            for three years. Before that, I studied mechanical engineering at the New Jersey 
            Institute of Technology and played baseball, setting several school records.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            I tackle tough problems through hard work. I'm a twin and have the best parents in the 
            world. I love baseball, ping pong, tennis, lifting, CAD projects with my 3D printer, and 
            spending quality time with friends.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
            Currently building:
          </p>
          
          <ul className="list-disc list-inside mb-6 text-base sm:text-lg md:text-xl space-y-2">
            <li>Trading algorithms</li>
            <li>Horse racing analytics</li>
          </ul>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Check out my code on GitHub and follow me online. Feel free to reach out.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
