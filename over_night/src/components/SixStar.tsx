import { useEffect, useState } from "react";

export default function SixStar(){
 
    const [sixStars, setSixStars] = useState([]);

    useEffect(() => {
        fetch('/api/sixstars')
          .then((resp) => resp.json())
          .then((sixStarHOtelData) => setSixStars(sixStarHOtelData));
      }, []);

    const hotels = sixStars.map((sixStarHotel: any) => (
        <div key={sixStarHotel.id}>
          <p>Six Star Hotel:{sixStarHotel.name}</p>{sixStarHotel.picture && (<img src={sixStarHotel.picture} alt={sixStarHotel.pictureName}/>)}
        </div>
      ));


    return(
        <div>
            <button>
                {hotels}
            </button>
        </div>
    )
}