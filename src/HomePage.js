import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {
 constructor(props) {
 super(props);
 this.state = {
 showAlert: false,
 };
 }

 handleAlertClick = () => {
 this.setState({ showAlert: true });
 };

 render() {
 const { showAlert } = this.state;

 return (
 <div className="container-fluid" style={{ backgroundColor: '#e6f2ff' }}>


<a href="#"> <span class="badge"></span></a>

<button class="btn btn-primary" type="button">
  Hola Mundo <span class="badge"></span>
</button>

<div class="jumbotron">
  <h1>Hola Mundo</h1>
</div>


 <h1>Bienvendos</h1>
 <p>Welcome, amigos and amigas, to our incredible website for learning Spanish! Here, fun and learning go hand in hand. Are you ready to dive into the adventure of mastering the coolest and tastiest language in the world? Get comfortable, because a journey filled with laughter and discoveries awaits you! Whether you want to impress your friends with your language skills or simply enjoy the rich Hispanic culture, you're in the right place. Join our fun community and get ready to learn Spanish in the most entertaining way possible!</p>

 <h3>Famous Hispanohablantes</h3>

 <table className="table">
 <thead>
 <tr>
 <th>Name</th>
 <th>Biography</th>
 <th>Era</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Frida Kahlo</td>
 <td>Hailing from Mexico, Frida Kahlo was a renowned painter known for her vibrant and emotive self-portraits. Her works often explored themes of identity, gender, and indigenous Mexican culture. Kahlo's art continues to inspire and resonate with audiences, making her an iconic figure in the art world.
</td>
 <td> 1907-1954</td>
 </tr>
 <tr>
 <td>Pablo Picasso </td>
 <td> Born in Spain, Picasso was one of the most influential artists of the 20th century. He co-founded the Cubist movement, revolutionizing modern art. Picasso's artworks such as "Guernica" and "Les Demoiselles d'Avignon" are renowned for their innovative styles and profound impact on the art world.
</td>
 <td> 1881-1973</td>
 </tr><tr>
 <td> Gabriel García Márquez</td>
 <td>This Colombian writer is recognized as one of the greatest novelists in the Spanish language. García Márquez's masterpiece, "One Hundred Years of Solitude," introduced magical realism to the literary world. His writing style combined fantasy and reality, captivating readers worldwide and earning him the Nobel Prize in Literature in 1982.
</td>
 <td>1927-2014</td>
 </tr>
 <tr>
 <td>Salvador Dalí</td>
 <td>Born in Spain, Dalí was a prominent surrealist artist known for his eccentric personality and distinctive style. His imaginative and dreamlike paintings, such as "The Persistence of Memory," challenged traditional artistic conventions. Dalí's contributions to surrealism left an indelible mark on the art world.
</td>
 <td>1904-1989</td>
 </tr>
 <tr>
 <td>Isabel Allende</td>
 <td>A Chilean-American writer, Isabel Allende is celebrated for her captivating novels that often intertwine magical realism with historical events. Her renowned work, "The House of the Spirits," put her on the literary map, and she has since become one of the most widely read Spanish-language authors. Allende's novels explore themes of love, family, and social justice.

</td>
 <td>!942-</td>
 </tr>
 </tbody>
 </table>

 <h3>Why learn Spanish?</h3>

 <ol className="text-purple">
 <li> <b>Cultural Exploration:</b>  Learn Spanish to dive into a diverse cultural world with 460+ million speakers across 21 countries. Discover Hispanic literature, music, and art.
</li>
 <li>  <b>Cultural Exploration:</b> With Spanish as the second most spoken language globally, learning it enriches travel experiences, fostering more authentic interactions with locals.
</li>
 <li>  <b>Professional Opportunities</b>  Spanish is in high demand in various industries (tourism, business, healthcare, education), providing a competitive edge in the job market.

</li>
 <li>  <b>Cognitive Benefits::</b> Learning Spanish enhances memory, multitasking, problem-solving skills, and may even delay age-related cognitive decline.
</li>
 <li>  <b>Improved Communication:</b> Spanish acquisition improves overall communication skills, even in one's native language, empowering more effective interactions personally and professionally.

</li>
 </ol>

 <div className="text-center">
 <img
 src="https://images.pexels.com/photos/12319942/pexels-photo-12319942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 alt="People shading"
 className="rounded img-fluid"
 style={{ width: '50%', maxWidth: '400px' }}
 />
 </div>

 <button className="btn btn-primary" onClick={this.handleAlertClick}>
 Frase del Día: Haz Clic Aquí
 </button>

 {showAlert && (
 <div className="alert alert-success mt-3" role="alert">
 Frase del día: Estoy hambriento/a: I am hungry.
 </div>
 )}
 </div>
 );
 }
}




export default HomePage;
