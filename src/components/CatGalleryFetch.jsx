import { useEffect, useState } from "react"

export const CatGalleryFetch = () => {

    const [cats, setCats] = useState([

    ]);

    //Estado Manejar Errores
    const [error, setError] = useState(null);

    //Metodo para realizar peticion a la API con fetch
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            // Convertimos la respuesta a formato .JSON
            const data = await response.json();
            //Setear la variable de estado cats a traves de su metodo setCats
            setCats(data);

        }catch (error) {
            console.log('error al hacer la solicitud', error);
            setError('error al hacer la solicitud', error);
        }
    };
    //aqui se ejecuta el metodo fetch data la primera vez que se monta el componente cuando hace peticion de la api
    useEffect(() => {
        fetchData();
    }, []);

    //mostrar el mensaje de error
    if(error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
            {error}
            </div>
        );
    }

  return (
    <div className="container mt-5">
        <h1 className="text-center text-white mb-4">Cat Gallery con Fetch</h1>
        <div className="row overflow-auto vh-80" style={{maxHeight: '80vh', overflowY: 'scroll'}}>
            <div className="row">
                {cats.map((cat, index)=>(
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card d-flex-column">
                            <img src={cat.url} className="card-img-top img-fluid object-fit-cover cat-img" alt="cat gallery" />
                            <div className="card-body">
                                <h5 className="card-title">Cat {index + 1}</h5>
                                <p className="card-text">Cute CAT</p>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    </div>
  )
}