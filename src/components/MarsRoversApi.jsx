import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const MarsRoversApi = () => {

    const [roverList, setRoverList] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=TzZQgHOdxjLplPnIZidyWnWicBbllZKUwUU20Xno');
                setRoverList(response.data.photos);

            } catch (error) {
                console.log('error en la api', error);
            }
        };
        fetchData();

    }, []);

    console.log(roverList);

  return (
    <div className="container mt-5">
        <h1 className="text-center text-white mb-4">Mars Rover</h1>
        <div className="row overflow-auto vh-80" style={{maxHeight: '80vh', overflowY: 'scroll'}}>
            <div className="row">
                {roverList.map((rover, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card d-flex-column">
                            <img src={rover.img_src} className="card-img-top img-fluid object-fit-cover rover-img" alt="rover gallery" />
                            <div className="card-body">
                                <h5 className="card-title">{rover.full_name}</h5>
                                <p className="card-text">Dia solar: {rover.earth_date}</p>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    </div>
  )
}

export default MarsRoversApi