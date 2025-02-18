function MyButton({ setUrl }) {
    const cargarImagen = () => {
        fetch("https://picsum.photos/200")
            .then(response => setUrl(response.url))
            .catch(error => console.error("Error al cargar la imagen:", error));
    };

    return (
        <button onClick={cargarImagen}>Cargar imagen</button>
    );
}

function Titulo({ palabra }) {
    return <h1>{palabra}</h1>;
}

function App() {
    const [url, setUrl] = React.useState("");

    return (
        <main>
            <div>
                <Titulo palabra="Foto Aleatoria" />
                <p>Esta pagina renderiza una foto random</p>
                <MyButton setUrl={setUrl} />
            </div>
            <div className="imgs">
                {url && <img src={url} alt="Imagen aleatoria" />}
            </div>
            
        </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
