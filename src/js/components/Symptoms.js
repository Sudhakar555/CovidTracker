import React from 'react';
import fever from '../assets/fever.gif'
import cough from '../assets/cough.gif'
import tiredness from '../assets/tiredness.gif'
import { PageHeader  } from 'antd';

export default function Symptoms(){

    return(
    <section>
        <PageHeader
    title="Symptoms"
    className="site-page-header"   
    
 
  >

  </PageHeader>
         <summary>
    Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear two to 14 days after exposure. This time after exposure and before having symptoms is called the incubation period. Common signs and symptoms can include:

    <ul>
      <b>
      <li>Fever</li>  
      <li>Cough</li>
      <li>Tiredness</li>
      </b>
    </ul>

    <span>
      {<img src={fever} alt="AtosSyntel" className='logo1' />} 
    
      {<img src={cough} alt="AtosSyntel" className='logo1' />}
    
     {<img src={tiredness} alt="AtosSyntel" className='logo1' />} 
     </span>
   <br></br>
    Early symptoms of COVID-19 may include a loss of taste or smell.
    <br></br>
    Other symptoms can include:
    <ul>
      <b>
      <li>Shortness of breath or difficulty breathing</li>  
      <li>Muscle aches</li>
      <li>Chills</li>
      <li>Sore throat</li>  
      <li>Runny nose</li>
      <li>Headache</li>
      <li>Chest pain</li>
      </b>
    </ul>
    This list is not all inclusive. Other less common symptoms have been reported, such as rash, nausea, vomiting and diarrhea. Children have similar symptoms to adults and generally have mild illness.

The severity of COVID-19 symptoms can range from very mild to severe. Some people may have only a few symptoms, and some people may have no symptoms at all. Some people may experience worsened symptoms, such as worsened shortness of breath and pneumonia, about a week after symptoms start.

People who are older have a higher risk of serious illness from COVID-19, and the risk increases with age. People who have existing chronic medical conditions also may have a higher risk of serious illness. Chronic medical conditions that increase the risk of serious illness from COVID-19 include:
    
<ul>
  <b>
      <li>Serious heart diseases, such as heart failure, coronary artery disease or cardiomyopathy</li>  
      <li>Chronic obstructive pulmonary disease (COPD)</li>
      <li>Type 2 diabetes</li>
      <li>Severe obesity</li>  
      <li>Chronic kidney disease</li>
      <li>Sickle cell disease</li>
      <li>Weakened immune system from solid organ transplants</li>
      </b>
    </ul>
    Other conditions may increase the risk of serious illness, such as:
    <ul>
      <b>
      <li>Asthma</li>  
      <li>Liver disease</li>
      <li>Chronic lung diseases such as cystic fibrosis</li>
      <li>Brain and nervous system conditions</li>  
      <li>Weakened immune system from bone marrow transplant, HIV or some medications</li>
      <li>Type 1 diabetes</li>
      <li>High blood pressure</li>
      </b>
    </ul>
    This list is not all inclusive. Other underlying medical conditions may increase your risk of serious illness from COVID-19.
    </summary>
    </section>)
}