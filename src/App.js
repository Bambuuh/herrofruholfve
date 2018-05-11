import React, { Component } from 'react';
import './App.css';

import CG from './components/cg'
import Section from './components/Section'

class App extends Component {
  render() {
    document.title = 'Herr & Fru Holfve';
    return (
      <div className="container is-tablet">
        <CG />
        <Section className="welcome-text-container">
          <span className="welcome-text cursive">Välkommen till vårt bröllop den 11 Augusti</span>
        </Section>
        <Section className="name-section">
          <div className="name-container italic">
            <div>Cecilia Lundblad</div>
            <span className="ampersand">&</span>
            <div>Gustav Holfve</div>
          </div>
        </Section>
        <Section className="name-section">
          <p>
            Visste ni att vid vigseln så kommer Cilla & Gurra att ha varit tillsammans i 5 år och under dessa 5 år har de hunnit med 15 skidresor, resor till 10 länder och 3 världsdelar, bott tillsammans i tre olika lägenheter (alla söder om söder) och köpt en bil. De har dock inget gemensamt ICA kort än, och de är oense om vilket sätt som är rätt sätt att laga en Pasta Carbonara (men man kan ju inte komma överens om allt).
        </p>
          <br />
          <p>
            Nedan finner ni all info ni behöver om bröllopet, men undrar ni ändå över något så är det bara att slå en signal till Cilla (<a href="tel:0762158856">0762 15 88 56</a>) eller Gurra (<a href="tel:0763408409">0763 408 409</a>).
        </p>
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
              Festen äger rum hemma hos Gustavs föräldrar på Ältavägen 159B i Nacka.
            Hit tar man sig enkelt med buss, antingen 401 från Slussen (hållplats Ormunksvägen)
            eller buss 801 från Gullmarsplan (hållplats Älta Gård).
            </p>
            <iframe title="karta" className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.0864301645151!2d18.17694285124697!3d59.264705023154875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f78dfa34ccae3%3A0x99e6ddb221dc6bbc!2zw4RsdGF2w6RnZW4gMTU5QiwgMTM4IDM3IMOEbHRh!5e0!3m2!1ssv!2sse!4v1517860723197" width="600" height="450" frameBorder="0"></iframe>
          </div>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Behöver du/ni boende i Stockholm?</div>
          </div>
          <div>
            <p>
              Hör av dig till Hanna Holfve för hjälp med bokning på något av Clarions hotell i Stockholm.
          Vi kommer att bo på Clarion Sign vid Norra Bantorget.
          </p>
            <p className="number-wrapper">
              Tel: <a href="tel:0761362694">0761 36 26 94</a>
            </p>
            <p>
              Mail: <a href="mailto:h.holfve@gmail.com">h.holfve@gmail.com</a>
            </p>
          </div>
        </Section>
        <Section className="toastmasters">
          <div className="section-heading gold italic">
            <div>Toastmasters</div>
          </div>
          <div class="toast-masters-info-wrapper">
            <div>
              <p><b>Carolin Lundblad</b></p>
              <p className="number-wrapper">
                Tel: <a href="tel:0735596037">0735 59 60 37</a>
              </p>
              <p>
                Mail: <a href="mailto:lundbladcarolin@gmail.com">lundbladcarolin@gmail.com</a>
              </p>
            </div>
            <div>
              <p><b>Hanna Holfve</b></p>
              <p className="number-wrapper">
                Tel: <a href="tel:0761362694">0761 36 26 94</a>
              </p>
              <p>
                Mail: <a href="mailto:h.holfve@gmail.com">h.holfve@gmail.com</a>
              </p>
            </div>
          </div>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Present</div>
          </div>
          <p>
            Vi behöver inte fler prylar,
            men vill ni ge oss en bröllopspresent så får ni gärna ge ett bidrag till vår bröllopsresa.
          </p>
        </Section>

        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Klädkod: Cocktail</div>
          </div>
          {/* 
          Lägg klädkoderna för män och kvinnor brevid varandra 
          Text tagen från: http://www.amelia.se/artiklar/bjuden-pa-brollop-eller-fest-sa-har-tyder-du-kladkoden/
        */}
          <div className="dress-code-container">
            <div>
              <p className="dress-code-title cursive"><b>Klädkod för män:</b></p> <p>Klädkoden innebär kavaj eller kostym, i en lite ljusare nyans om man vill.
              Till det kan männen bära slips eller fluga.
              </p>
            </div>
            <div>
              <p className="dress-code-title cursive"><b>Klädkod för kvinnor:</b></p> <p>Klädkoden innebär klänning, kjol eller byxdress som är lite finare än vardagsklädsel.
              En hellång klänning är tillexempel för uppklätt men du kan välja en modell som är vadlång eller knälång.
              </p>
            </div>
          </div>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Bar</div>
          </div>
          <p>
            <b>Mat</b> - ingen sittande middag, utan plockmat och mingel.
          </p>
          <p>
            <b>Bar</b> - alkoholhaltiga drycker till självkostnadspris (inga kontanter).
          </p>
        </Section>
        <Section className="name-section">
          <div className="section-heading gold italic">
            <div>Barn</div>
          </div>
          <p>
            Vi gillar barn, men denna kväll älskar vi barnvakter.
        </p>
        </Section>
        <Section className="osa-section">
          <div className="section-heading gold italic">
            <div>OSA</div>
          </div>
          <div style={{ height: 1425, width: '100%' }}>
            <iframe title="OSA" src="https://docs.google.com/forms/d/e/1FAIpQLScqPB0QNAxA9TJBMX9MJGx-Iir3l83XEwooIZhq44lm4etX9g/viewform?embedded=true" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Läser in...</iframe>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
