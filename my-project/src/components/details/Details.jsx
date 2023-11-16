import React from "react";
import røndeimage from "../../images/rønde.png";

const Details = () => {
  return (
    <div className="flex justify-center my-8">
      <figure className="flex my-auto mx-4 border-8 rounded-full max-w-lg overflow-hidden  border-custom-tan">
        <img className="max-w-2xl" src={røndeimage} alt="" />
      </figure>
      <article>
        <section className="max-w-4xl flex bg-custom-green border-8 rounded-lg border-custom-light-green ">
          <p className="p-4 m-4  text-start text-xl text-white">
            <h1 className="mb-4 font-bold">Om projektet</h1>
            Vores projekt fokuserer på at skabe bevidsthed om klimaforhold og
            bæredygtighed gennem et unikt koncept kaldet "klimahuset." Dette hus
            er konstrueret ved hjælp af "cob" og præsenterer en fortryllende,
            hobbit-hus lignende struktur. Ved at kombinere æstetik og
            funktionalitet som skaber en engagerende oplevelse for besøgende.
            <br className="mb-6" />
            Inde i huset er der en række interaktive elementer, såsom live data
            feeds. Disse data feeds præsenterer besøgende med
            realtidsinformation om energiforbrug og bæredygtig energiproduktion.
            Besøgende kan følge med i, hvor meget grøn strøm der bliver brugt,
            herunder energikilder som vind, sol og atomkraftværker. Derudover
            tilbyder klimahuset et interaktiv "carbon footprint calculator," der
            giver besøgende mulighed for at få et indblik i deres eget
            CO2-aftryk. Dette værktøj skaber ikke kun bevidsthed om individuelle
            bidrag til klimaforandringer, men opfordrer også til overvejelse af
            bæredygtige alternativer. Samlet set repræsenterer vores projekt en
            innovativ tilgang til at informere og uddanne om klimaforhold og
            skabe en dialog om bæredygtighed.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Details;
