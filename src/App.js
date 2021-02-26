import Giphy from "./assets/images/giphy.webp";

function App() {
  return (
    <>
      <main
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{fontSize:"2.5rem"}}>Votem no DANIEL</h1>
        <img src={Giphy} alt="gif fofinho pra votar no daniel" />
      </main>
    </>
  );
}

export default App;
