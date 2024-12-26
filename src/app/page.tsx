import Link from "next/link";
import Navbar from "./components/Header";

export default function Home() {
  return (
    <div className="container">
      <img 
        src="https://www.limelight.pk/cdn/shop/files/Cambric-Unstitched.jpg?v=1728534904" 
        alt="Women Wear" 
        className="centered-image" 
      />
      <br />
      <h1 className="text-center text-4xl decoration-double">Women Wear</h1>
      <br />
      <img 
        src="https://www.limelight.pk/cdn/shop/files/eastern_tops_8ec740e5-d124-4d3b-9d97-3d300b20a667_300x.png?v=1722245388" 
        alt="Eastern Tops" 
        className="centered-image" 
      />
      <br />
      <img 
        src="https://www.limelight.pk/cdn/shop/files/dailywear_5e709826-db47-41b8-b0e4-0bc3a84a343f_300x.png?v=1722244654" 
        alt="Daily Wear" 
        className="centered-image" 
      />
      <br />
      <img 
        src="https://www.limelight.pk/cdn/shop/files/Unstitched_300x300_17c8fa10-87ff-4ef7-b344-de5ab26aa340_300x.png?v=1728026205" 
        alt="Unstitched Dress" 
        className="centered-image" 
      />
      <br />
      <img 
        src="https://www.limelight.pk/cdn/shop/files/P9329SU-SML-143_5_3PieceCottonNetSuit-Embroidered_Pret_330x.jpg?v=1728996329" 
        alt="Cotton Net Suit" 
        className="centered-image" 
      />
      <br />
      <img 
        src="https://www.limelight.pk/cdn/shop/files/P9239SE-SML-227_1_-2PieceOrganzaSaree-Embroidered_Pret_330x.jpg?v=1727521454" 
        alt="Organza Saree" 
        className="centered-image" 
      />
      <br />
      <img 
        src="https://www.limelight.pk/cdn/shop/files/A0666ST-SML-374_6_-GripCo-OrdSet-Printed_Pret_330x.jpg?v=1726640265" 
        alt="Co-Ord Set" 
        className="centered-image" 
      />
    </div>
  );
}
