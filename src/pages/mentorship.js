import React from 'react';
import LandingPageLayout from '../templates/landing-page-layout/';
import SEO from '../bosons/seo/';
import SelectedBox from '../assets/illustrations/selected_box.svg';
import Check from '../assets/icons/check.svg';
import Close from '../assets/icons/close.svg';
import Dropdown from '../templates/landing-page-layout/components/dropdown';


const Mentorship = () => {

  return (

    <LandingPageLayout>

      <SEO title = 'Mentorship' />

      {/*
        ========================
        Header
        ========================
      */}

      <header className = 'lp-layout__header lp-layout__container'>

        <div className = 'lp-layout__header__titles'>
  
          <h1 className = 'lp-layout__header__title'>
            Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
          </h1>

          <p className = 'lp-layout__header__sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor turpis, blandit non velit nec, fermentum accumsan nisl. In elit massa, vehicula vel ante non, mattis pellentesque nisl. Vivamus feugiat iaculis 
          </p>

          <button className = 'lp-layout__button'>
            Quero participar
          </button>

        </div>

        <SelectedBox className = 'lp-layout__header__image' />

      </header>

      {/*
        ========================
        Header
        ========================
      */}

      <section className = 'lp-layout__section'>

        <h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit. </h2>

        <div className = 'lp-layout__list lp-layout__container'>

          <div className = 'lp-layout__column'>
  
            <div className = 'lp-layout__list-box'>
              <Check className = 'lp-layout__list-box__icon'/>
              <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet,  adipiscing elit.</span>Lorem ipsum dolor sit amet,  adipiscing elit.
              </p>
            </div>
    
            <div className = 'lp-layout__list-box'>
              <Check className = 'lp-layout__list-box__icon'/>
              <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet,  adipiscing elit.</span>Lorem ipsum dolor sit amet,  adipiscing elit.
              </p>
            </div>
  
            <div className = 'lp-layout__list-box'>
              <Check className = 'lp-layout__list-box__icon'/>
              <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet,  adipiscing elit.</span>Lorem ipsum dolor sit amet,  adipiscing elit.
              </p>
            </div>

          </div>

          <div className = 'lp-layout__column'>

            <div className = 'lp-layout__list-box'>
              <Close className = 'lp-layout__list-box__icon lp-layout__list-box__icon--not'/>
              <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet,  adipiscing elit.</span>Lorem ipsum dolor sit amet,  adipiscing elit.
              </p>
            </div>

            <div className = 'lp-layout__list-box'>
              <Close className = 'lp-layout__list-box__icon lp-layout__list-box__icon--not'/>
              <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet,  adipiscing elit.</span>Lorem ipsum dolor sit amet,  adipiscing elit.
              </p>
            </div>

            <div className = 'lp-layout__list-box'>
              <Close className = 'lp-layout__list-box__icon lp-layout__list-box__icon--not'/>
              <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet,  adipiscing elit.</span>Lorem ipsum dolor sit amet,  adipiscing elit.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/*
        ========================
        Header
        ========================
      */}

      <section className = 'lp-layout__section'>

        <h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet,  adipiscing elit. </h2>

        <div className = 'lp-layout__list lp-layout__container'>

          <div className = 'lp-layout__list-modules'>
            <img src = 'talks/front-in-floripa.jpg' className = 'lp-layout__list-modules__image'/>
            <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

            <Dropdown />
          </div>

          <div className = 'lp-layout__list-modules'>
            <img src = 'talks/front-in-floripa.jpg' className = 'lp-layout__list-modules__image'/>
            <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

            <Dropdown />
          </div>

          <div className = {`lp-layout__list-modules`}>
            <img src = 'talks/front-in-floripa.jpg' className = 'lp-layout__list-modules__image'/>
            <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

            <Dropdown />
            </div>

        </div>

        <div className = 'lp-layout__list lp-layout__container'>

<div className = 'lp-layout__list-modules'>
  <img src = 'talks/front-in-floripa.jpg' className = 'lp-layout__list-modules__image'/>
  <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

  <Dropdown />
</div>

<div className = 'lp-layout__list-modules'>
  <img src = 'talks/front-in-floripa.jpg' className = 'lp-layout__list-modules__image'/>
  <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

  <Dropdown />
</div>

<div className = {`lp-layout__list-modules`}>
  <img src = 'talks/front-in-floripa.jpg' className = 'lp-layout__list-modules__image'/>
  <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

  <Dropdown />
  </div>
</div>
      </section>


      {/*
        ========================
        Header
        ========================
      */}

      <section className = 'lp-layout__section'>

        <h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit. </h2>

        <div className = 'lp-layout__container lp-layout__container--short'>

          <div className = 'lp-layout__faq'>
            <Dropdown />
          </div>
          <div className = 'lp-layout__faq'>
            <Dropdown />
          </div>
          <div className = 'lp-layout__faq'>
            <Dropdown />
          </div>
          <div className = 'lp-layout__faq'>
            <Dropdown />
          </div>
          <div className = 'lp-layout__faq'>
            <Dropdown />
          </div>

        </div>

      </section>

      {/*
        ========================
        Header
        ========================
      */}

    <section className = 'lp-layout__section'>

      <h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit. </h2>

      <div className = 'lp-layout__container lp-layout__container--short'>
        
          <div className = 'lp-layout__list-modules lp-layout__list-modules--rows'>

            <div className = 'lp-layout__list-modules__image-container'>
              <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-modules__image'/>
            </div>

            <div className = 'lp-layout__list-modules__text-container'>

            <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

            <p className = 'lp-layout__text'>
                <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
              </p>

              </div>
          </div>

      </div>

      <div className = 'lp-layout__container lp-layout__container--short'>
        
        <div className = 'lp-layout__list-modules lp-layout__list-modules--rows'>

          <div className = 'lp-layout__list-modules__image-container'>
            <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-modules__image'/>
          </div>

          <div className = 'lp-layout__list-modules__text-container'>

          <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

          <p className = 'lp-layout__text'>
              <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
            </p>

            </div>
        </div>

    </div>

    <div className = 'lp-layout__container lp-layout__container--short'>
        
        <div className = 'lp-layout__list-modules lp-layout__list-modules--rows'>

          <div className = 'lp-layout__list-modules__image-container'>
            <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-modules__image'/>
          </div>

          <div className = 'lp-layout__list-modules__text-container'>

          <h3 className = 'lp-layout__sub-title'> Modulo 1 </h3>

          <p className = 'lp-layout__text'>
              <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
            </p>

            </div>
        </div>

    </div>

    </section>


      {/*
        ========================
        Header
        ========================
      */}

<section className = 'lp-layout__section'>

<div className = 'lp-layout__container'>
  
  <div className = 'lp-layout__list-modules lp-layout__list-modules--rows'>

    <div className = 'lp-layout__list-modules__image-container'>
      <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-modules__image'/>
    </div>

    <div className = 'lp-layout__list-modules__text-container'>

    <h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit. </h2>

    <p className = 'lp-layout__text'>
        <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
        <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
      </p>

      <p className = 'lp-layout__text'>
        <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
        <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
      </p>

      <p className = 'lp-layout__text'>
        <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
        <span className = 'lp-layout__text--highlight'>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.</span>Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.
      </p>

      </div>
  </div>

</div>

</section>


      {/*
        ========================
        Header
        ========================
      */}

<section className = 'lp-layout__section'>

<h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit. </h2>

<div className = 'lp-layout__list lp-layout__container'>

<div className = 'lp-layout__column'>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
<img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
<p className = 'lp-layout__text'>
  <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
  "Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.""
</p>
</div>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
<img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
<p className = 'lp-layout__text'>
  <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
  "Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.""
</p>
</div>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
<img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
<p className = 'lp-layout__text'>
  <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
  "Lorem ipsum dolor sit amet adipiscing elit.""
</p>
</div>

</div>

<div className = 'lp-layout__column'>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
<img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
<p className = 'lp-layout__text'>
  <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
  "Lorem ipsum dolor sit amet adipiscing elit.""
</p>
</div>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
<img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
<p className = 'lp-layout__text'>
  <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
  "Lorem ipsum dolor sit amet adipiscing elit.""
</p>
</div>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
<img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
<p className = 'lp-layout__text'>
  <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
  "Lorem ipsum dolor sit amet adipiscing elit.""
</p>
</div>

</div>

  <div className = 'lp-layout__column'>

  <div className = 'lp-layout__list-box lp-layout__list-box--top'>
  <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
  <p className = 'lp-layout__text'>
    <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
    "Lorem ipsum dolor sit amet adipiscing elit.""
  </p>
</div>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
  <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
  <p className = 'lp-layout__text'>
    <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
    "Lorem ipsum dolor sit amet adipiscing elit.""
  </p>
</div>

<div className = 'lp-layout__list-box lp-layout__list-box--top'>
  <img src = 'articles/how-i-became-a-senior-javascript-developer.jpg' className = 'lp-layout__list-box__image'/> 
  <p className = 'lp-layout__text'>
    <small className = 'lp-layout__text lp-layout__text--asign'> Afonso Pacifer </small>
    "Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit.""
  </p>
</div>

</div>

</div>
</section>


    <section className = 'lp-layout__section'>

      <h2 className = 'lp-layout__title'> Lorem ipsum dolor sit amet, <span className = 'lp-layout__title--highlight'>consectetur</span> adipiscing elit. </h2>

      <div className = 'lp-layout__container lp-layout__container--short'>

        <div className = 'lp-layout__cta'>
          
          <span className = 'lp-layout__cta__description'>xxxx <span className = 'lp-layout__cta__tag'>x% OFF</span> até xx/xx/xxxx!</span>
          <span className = 'lp-layout__cta__old-value'>De <span className = 'lp-layout__cta--through'>R$x,00</span> por apenas:</span>

          <span className = 'lp-layout__cta__new-value'>x0x <span className = 'lp-layout__cta--small'>de</span> R$ x,90</span>
          <span className = 'lp-layout__cta__total-value'>ou R$ x,99 a vista!</span>
          
          <button className = 'lp-layout__button'>
            Quero me inscrever!
          </button>

        </div>

      </div>

    </section>


    </LandingPageLayout>

  )
};

export default Mentorship;
