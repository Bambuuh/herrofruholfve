import React, { Component } from 'react';
import './App.css';

import CG from './components/cg'
import Section from './components/Section'

class App extends Component {
  render() {
    return (
      <div className="container is-tablet">
        <CG />
        <Section className="welcome-text-container">
          <span className="welcome-text cursive">Välkommen till vårt bröllop</span>
        </Section>
        <Section className="name-section">
          <div className="name-container italic">
            <div>Cecilia Lundblad</div>
            <span className="ampersand">&</span>
            <div>Gustav Holfve</div>
          </div>
        </Section>
        <Section className="name-section">
        {/* 
        Adress och resväg tänker jag mig att man ska ha texten till vänster och kartan till höger
        på små skärmar så kör man texten över och kartan under.
        */}
          <div className="section-heading gold italic">
            <div>Adress & resväg</div>
          </div>
          <div className="adress-container">
            <p>
              Festen kommer vara hemma hos Gustavs föräldrar på Ältavägen 159b i Nacka.
              Vill man åka buss så tar man buss 401 från Slussen
              alternativt så tar man buss 801 från Gullmarsplan.
            </p>
            <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.0864301645151!2d18.17694285124697!3d59.264705023154875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f78dfa34ccae3%3A0x99e6ddb221dc6bbc!2zw4RsdGF2w6RnZW4gMTU5QiwgMTM4IDM3IMOEbHRh!5e0!3m2!1ssv!2sse!4v1517860723197" width="600" height="450" frameBorder="0"></iframe>
          </div>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Behöver du boende i Stockholm?</div>
          </div>
          <div>
            <p>
              Hör av dig till Hanna Holfve
              för att få en bokning på Clarion Sign vid norra bantorget
            </p>
            <p className="number-wrapper">
              Tel: <a href="tel:0761362694">0761 36 26 94</a>
            </p>
          </div>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Present</div>
          </div>
          <p>Vi behöver inte fler prylar men man får gärna ge ett bidrag till vår bröllopsresa</p>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Dresscode</div>
          </div>
          {/* 
          Lägg klädkoderna för män och kvinnor brevid varandra 
          Text tagen från: http://www.amelia.se/artiklar/bjuden-pa-brollop-eller-fest-sa-har-tyder-du-kladkoden/
        */}
        <div className="dress-code-container">
          <div>
            <p className="dress-code-title cursive"><b>Klädkod för män:</b></p> <p>Klädkoden innebär hel kostym, men den kan vara i en lite ljusare nyans om man vill. Till det kan männen bära slips eller fluga. Jeans är däremot inte okej.</p>
          </div>
          <div>
            <p className="dress-code-title cursive"><b>Klädkod för kvinnor:</b></p> <p>Som kvinna kan du bära en klänning, kjol eller byxdress som är finare än en vanlig vardagsklädsel men inte lika tjusig som aftonklänning. En hellång klänning är för uppklätt men du kan välja en modell som är vadlång eller knälång.</p>
          </div>
        </div>
        </Section>
        <Section className="osa-section">
          <div className="section-heading gold italic">
            <div>OSA</div>
          </div>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScqPB0QNAxA9TJBMX9MJGx-Iir3l83XEwooIZhq44lm4etX9g/viewform?embedded=true" width="100%" height="1425px" frameBorder="0" marginHeight="0" marginWidth="0">Läser in...</iframe>
        </Section>
      </div>
    );
  }
}

export default App;
