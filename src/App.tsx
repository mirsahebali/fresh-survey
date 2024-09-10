import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <main class="alegreya-font">
      <h1 class="text-4xl flex justify-center items-center text-red-300">
        Hello, Fresher!
      </h1>
      <h2 class="text-2xl flex justify-center items-center text-cyan-400">
        Let's break the ICE
      </h2>
      <form class="my-5 flex flex-col justify-center items-center ">
        <div class="" id="student-name">
          <h3 class="text-blue-300 text-4xl my-1">Enter your name</h3>
          <div class="text-orange-300 text-2xl">
            println("
            <input
              type="text"
              name="name"
              class="rounded text-white bg-black hover:scale-105 border-b-2  active:border-cyan-200 border-cyan duration-200"
            />
            ")
          </div>
        </div>
        <div id="senior-name">
          <h3 class="text-blue-300 text-4xl my-1">
            Your Favorite Senior's Name
          </h3>
          <div class="text-orange-300 text-2xl">
            println("
            <input
              type="text"
              name="name"
              class="rounded  text-white bg-black hover:scale-105 border-b-2 border-cyan duration-200"
            />
            ")
          </div>
        </div>
        <div>
          <h3 class="text-blue-300 text-4xl my-1">About Your Senior</h3>
          <div>
            <div class="text-orange-300 text-2xl">
              println("
              <textarea
                name="name"
                class="rounded  text-white bg-black hover:scale-105 border-b-2 border-cyan duration-200"
              />
              ")
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default App;
