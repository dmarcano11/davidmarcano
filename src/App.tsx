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
            I'm a developer and innovator. I work at JP Morgan Chase as a full-stack engineer
            for an awesome team. I've been coding professionally for 3 years but building things
            since I was gifted my first Star Wars Lego set.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            My goal is to tackle the toughest problems through hard work and teamwork. I'm a twin
            to the biggest idiot Julio Marcano and have the best parents in the world. I love baseball, ping pong, tennis,
            lifting, and spending quality time with my friends.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
            Check out what I am building now:
          </p>
          
          <ul className="list-disc list-inside mb-6 text-base sm:text-lg md:text-xl space-y-2">
            <li>Trading</li>
            <li>Horse Racing</li>
          </ul>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            You can read my code on my github and follow me online. Reach out if interested.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
