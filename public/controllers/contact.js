//document.getElementById("contact-location").innerHTML = "Adelaide, AU";

let headerText = 'CONTACT';
let blurbText = 'Fan? Drop a Note!';

let headerDiv = document.createElement('h2');
headerDiv.classList.add('w3-wide');
headerDiv.classList.add('w3-center');
headerDiv.innerHTML = headerText;

let blurbDiv = document.createElement('p');
blurbDiv.classList.add('w3-opacity');
blurbDiv.classList.add('w3-center');
blurbDiv.innerHTML = blubText;

let contactBoxDiv = document.createElement('div');
contactBoxDiv.classList.add('w3-row');
contactBoxDiv.classList.add('w3-padding-32');

// <!-- The Contact Section -->
{/* <div class="w3-container w3-content w3-padding-64 w3-black" style="max-width:100%" id="contact"> */}
  {/* <h2 class="w3-wide w3-center">CONTACT</h2> */}
//   <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
//   <div class="w3-row w3-padding-32">

    <div class="w3-col m6 w3-large w3-margin-bottom">
      <i class="fa fa-map-marker" style="width:30px"></i> Vancouver, BC<br>
      <i class="fa fa-phone" style="width:30px"></i> Phone: +1 604-657-5677<br>
      <i class="fa fa-envelope" style="width:30px"></i> info@commongroundband.ca<br>
    </div>
    <div class="w3-col m6">
      <form action="" target="_blank" method="post">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Name" required name="name">
          </div>
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Email" required name="email">
          </div>
        </div>
        <input class="w3-input w3-border" type="text" placeholder="Message" required name="message">
        <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
      </form>

      <!-- <form action="/contact" id="contact-form" method="post">
      <fieldset>
        <label for="name">Name &#42;</label>
        <input id="name" name="name" type="text" placeholder="Your name" required="required">
        <label for="email">Email &#42;</label>
        <input id="email" name="email" type="text" placeholder="Your email" required="required">
        <label for="message">Message &#42;</label>
        <textarea id="message" name="message" placeholder="Enter your message here" rows="3" required="required"></textarea>
        <button type="submit">Submit</button>
      </fieldset>
    </form> -->
    </div>

