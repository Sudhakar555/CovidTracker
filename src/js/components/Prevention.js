import React from 'react';
import { Divider,PageHeader,Breadcrumb  } from 'antd';
import './styles.css'
import washhands from '../assets/washhands.gif'
import noface from '../assets/noface.gif'
import nohugs from '../assets/nohugs.gif'
import nocough from '../assets/nocough.gif'
import clean from '../assets/clean.gif'
import noshare from '../assets/noshare.gif'
import apart from '../assets/apart.gif'
import no from '../assets/no.gif'
import food from '../assets/food.gif'
import washv from '../assets/washv.gif'
import mask from '../assets/mask.gif'
import isolation from '../assets/isolation.gif'


export default function Prevention(){

   return(
       <section>
          <PageHeader
    title="Coronavirus(COVID-19) - Prevention"
    className="site-page-header"   
    subTitle={<div>Source: <a href="https://www.healthline.com/health/coronavirus-prevention" target="_blank" >Healthline</a></div> }
 
  >

  </PageHeader>
  <Divider orientation="left"></Divider>
  The global spread of coronavirus means that many people will now need to take certain action steps to help reduce its transmission.
<br></br>
<br></br>
Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), which some people refer to as coronavirus, causes coronavirus disease 19 (COVID-19).
    <section>
        <br></br>
<h2 className="tips"><b>Tips for prevention </b> </h2>

Follow the guidelines to help protect yourself from contracting and transmitting SARS-CoV-2.
<br></br>
<br></br>

<h3 className="tips-list">
    <b>
    1. Wash your hands frequently and carefully</b></h3>
    <summary className="tips-summary">
    Use warm water and soap and rub your hands for at least 20 seconds. Work the lather to your wrists, between your fingers, and under your fingernails. You can also use an antibacterial and antiviral soap.

   Use hand sanitizer when you cannot wash your hands properly. Rewash your hands several times a day, especially after touching anything, including your phone or laptop.
    
    <br></br>

     {<img src={washhands} alt="washhands" style={{marginLeft:'150px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    2. Avoid touching your face</b></h3>
    <summary className="tips-summary">
    SARS-CoV-2 can live on some surfaces for up to 72 hours. You can get the virus on your hands if you touch a surface like:
    
    <ul>
      <b>
      <li>gas pump handle</li>  
      <li>your cell phone</li>
      <li>a doorknob</li>
      </b>
    </ul>
   
    Avoid touching any part of your face or head, including your mouth, nose, and eyes. Also avoid biting your fingernails. This can give SARS-CoV-2 a chance to go from your hands into your body.    
    <br></br>

     {<img src={noface} alt="noface" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    3. Stop shaking hands and hugging people — for now</b></h3>
    <summary className="tips-summary">
    
    Similarly, avoid touching other people. Skin-to-skin contact can transmit SARS-CoV-2 from one person to another.
   
    <br></br>

     {<img src={nohugs} alt="nohugs" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    4. Don’t share personal items</b></h3>
    <summary className="tips-summary">
    Do not share personal items like:

    
    <ul>
      <b>
      <li>makeup</li>  
      <li>your cell phone</li>
      <li>combs</li>
      </b>
    </ul>
    It’s also important not to share eating utensils and straws. Teach children to recognize their reusable cup, straw, and other dishes for their own use only.
        <br></br>

     {<img src={noshare} alt="noshare" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    5. Cover your mouth and nose when you cough and sneeze</b></h3>
    <summary className="tips-summary">
    SARS-CoV-2 is found in high amounts in the nose and mouth. This means it can be carried by air droplets to other people when you cough, sneeze, or talk. It can also land on hard surfaces and stay there for up to 3 days.    
    Use a tissue or sneeze into your elbow to keep your hands as clean as possible. Wash your hands carefully after you sneeze or cough, regardless.
    <br></br>

     {<img src={nocough} alt="nocough" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    6. Clean and disinfect surfaces</b></h3>
    <summary className="tips-summary">
    Use alcohol-based disinfectants to clean hard surfaces in your home like:

    
    <ul>
      <b>
      <li>countertops</li>  
      <li>door handles</li>
      <li>furniture and toys</li>
      </b>
    </ul>
   
    Also, clean your phone, laptop, and anything else you use regularly several times a day.

Disinfect areas after you bring groceries or packages into your home.

Use white vinegar or hydrogen peroxide solutions for general cleaning in between disinfecting surfaces.    <br></br>

     {<img src={clean} alt="clean" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    7. Take physical (social) distancing seriously</b></h3>
    <summary className="tips-summary">
    If you’re carrying the SARS-CoV-2 virus, it’ll be found in high amounts in your spit (sputum). This can happen even if you don’t have symptoms.

Physical (social) distancing, also means staying home and working remotely when possible.

If you must go out for necessities, keep a distance of 6 feet (2 m) from other people. You can transmit the virus by speaking to someone in close contact to you.
    <br></br>

     {<img src={apart} alt="apart" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    8. Do not gather in groups</b></h3>
    <summary className="tips-summary">
    Being in a group or gathering makes it more likely that you’ll be in close contact with someone.

This includes avoiding all religious places of worship, as you may have to sit or stand too close to another congregant. It also includes not congregating at parks or beaches.
    <br></br>

     {<img src={no} alt="no" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    9. Avoid eating or drinking in public places</b></h3>
    <summary className="tips-summary">
    Now is not the time to go out to eat. This means avoiding restaurants, coffee shops, bars, and other eateries.

The virus can be transmitted through food, utensils, dishes, and cups. It may also be temporarily airborne from other people in the venue.

You can still get delivery or takeaway food. Choose foods that are thoroughly cooked and can be reheated.

High heat (at least 132°F/56°C, according to one recent, not-yet-peer-reviewed lab study) helps to kill coronaviruses.

This means it may be best to avoid cold foods from restaurants and all food from buffets and open salad bars.
    <br></br>

     {<img src={food} alt="food" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    10. Wash fresh groceries</b></h3>
    <summary className="tips-summary">
    Wash all produce under running water before eating or preparing.

     The CDCTrusted Source and the FDATrusted Source do not recommend using soap, detergent, or commercial produce wash on things like fruits and vegetables. Be sure to wash hands before and after handling these items.
    <br></br>

     {<img src={washv} alt="wash" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <hr></hr>
    <h3 className="tips-list">
    <b>
    11. Wear a (homemade) mask</b></h3>
    <summary className="tips-summary">
    The Centers for Disease Control and Prevention (CDC) recommendsTrusted Source that almost everyone wears a cloth face mask in public settings where physical distancing may be difficult, such as grocery stores.

When used correctly, these masks can help prevent people who are asymptomatic or undiagnosed from transmitting SARS-CoV-2 when they breathe, talk, sneeze, or cough. This, in turn, slows the transmission of the virus.

The CDC’s website provides instructionsTrusted Source for making your own mask at home, using basic materials such as a T-shirt and scissors.

Some pointers to keep in mind:    
    <ul>
      <b>
      <li>Wearing a mask alone will not prevent you from getting a SARS-CoV-2 infection. Careful handwashing and physical distancing must also be followed.</li>  
      <li>Cloth masks aren’t as effective as other types of masks, such as surgical masks or N95 respirators. However, these other masks should be reserved for healthcare workers and first responders.</li>
      <li>Wash your hands before you put on your mask.</li>
      <li>Wash your mask after each use.</li>
      <li>You can transfer the virus from your hands to the mask. If you’re wearing a mask, avoid touching the front of it.</li>
      <li>You can also transfer the virus from the mask to your hands. Wash your hands if you touch the front of the mask.</li>
      <li>A mask shouldn’t be worn by a child under 2 years old, a person who has trouble breathing, or a person who can’t remove the mask on their own.</li>
      </b>
    </ul>
   
    <br></br>

     {<img src={mask} alt="mask" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
    <h3 className="tips-list">
    <b>
    12. Self-quarantine if sick</b></h3>
    <summary className="tips-summary">
    Call your doctor if you have any symptoms. Stay home until you recover. Avoid sitting, sleeping, or eating with your loved ones even if you live in the same home.

Wear a mask and wash your hands as much as possible. If you need urgent medical care, wear a mask and let them know you may have COVID-19.
    <br></br>

     {<img src={isolation} alt="isolation" style={{marginLeft:'150px',height:'300px',width:'500px'}} className='logo1' />} 
    </summary>
    <br></br>
<summary>
    Taking these prevention strategies seriously is extremely important to stop the transmission of this virus.

Practicing good hygiene, following these guidelines, and encouraging your friends and family to do the same will go a long way in preventing the transmission of SARS-CoV-2.
</summary>
</section>
       </section>
   ) 
}