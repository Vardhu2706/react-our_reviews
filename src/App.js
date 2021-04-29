// Importing Helpers
import React from "react";

// Importing Components/Files
import Review from "./Review";

// Functional Component
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

// Default Export
export default App;
