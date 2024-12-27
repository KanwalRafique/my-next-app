import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <br />
      <h1 className="text-4xl text-center">Contact Us</h1>
      <br />
      <hr />
      <br />

      <p className="p-14">
        The customer care representative is available from 10 am to 9 pm (Monday to Saturday).
        <br />
        <b>Landline: 111-300-800</b>
        <br />
        <b>Whatsapp: +92 315 1110333</b>
        <br />
        <b>Email: Online@limelight.pk</b>
      </p>

      <Image
        src="https://img.freepik.com/premium-vector/contact-us-label-contact-information-about-company-individual_123447-6082.jpg?w=360"
        alt="info"
        width={360} // Adjust the width based on your image dimensions
        height={240} // Adjust the height to maintain aspect ratio
        className="mx-auto"
      />
    </div>
  );
}
