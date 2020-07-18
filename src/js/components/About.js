import React from 'react';
import { Divider,PageHeader,Breadcrumb  } from 'antd';
import './styles.css'




export default function About(){
    return(
        <section>

<PageHeader
    title="Coronavirus disease 2019 (COVID-19)"
    className="site-page-header"   
    subTitle={<div>Source: <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus" target="_blank" >HopkinsMedicine</a></div> }
    
 
  >

  </PageHeader>
            <Divider orientation="left"><b>Overview</b></Divider>
            <summary>
            Coronaviruses are a family of viruses that can cause illnesses such as the common cold, severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS). In 2019, a new coronavirus was identified as the cause of a disease outbreak that originated in China.
            The virus is now known as the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The disease it causes is called coronavirus disease 2019 (COVID-19). In March 2020, the World Health Organization (WHO) declared the COVID-19 outbreak a pandemic.
             Public health groups, including the U.S. Centers for Disease Control and Prevention (CDC) and WHO, are monitoring the pandemic and posting updates on their websites. These groups have also issued recommendations for preventing and treating the illness
    </summary>
    <Divider orientation="left"><b>What is Corona Virus?</b></Divider>
    <article className="iframe">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BtN-goy9VOY" frameborder="10" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>
    <Divider orientation="left"><b>How does the new coronavirus spread?</b></Divider>

    <summary>
    As of now, researchers know that the new coronavirus is spread through droplets released into the air when an infected person coughs or sneezes. The droplets generally do not travel more than a few feet, and they fall to the ground (or onto surfaces) in a few seconds — this is why physical distancing is effective in preventing the spread.
    </summary>
    
    <Divider orientation="left"><b>How did this new coronavirus spread to humans?</b></Divider>
    <summary>
    COVID-19 appeared in Wuhan, a city in China, in December 2019. Although health officials are still tracing the exact source of this new coronavirus, early hypotheses thought it may be linked to a seafood market in Wuhan, China. Some people who visited the market developed viral pneumonia caused by the new coronavirus. A study that came out on Jan. 25, 2020, notes that the individual with the first reported case became ill on Dec. 1, 2019, and had no link to the seafood market. Investigations are ongoing as to how this virus originated and spread. 
    </summary>
    <Divider orientation="left"><b>Causes</b></Divider>
    <summary>
    Infection with the new coronavirus (severe acute respiratory syndrome coronavirus 2, or SARS-CoV-2) causes coronavirus disease 2019 (COVID-19).

The virus appears to spread easily among people, and more continues to be discovered over time about how it spreads. Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone with the virus coughs, sneezes or talks. These droplets can be inhaled or land in the mouth or nose of a person nearby.

It can also spread if a person touches a surface with the virus on it and then touches his or her mouth, nose or eyes, although this isn't considered to be a main way it spreads.
    </summary>
    <Divider orientation="left"><b>What is the incubation period for COVID-19?</b></Divider>
    <summary>
    It appears that symptoms are showing up in people within 14 days of exposure to the virus.
    </summary>
    <Divider orientation="left"><b>How is COVID-19 diagnosed?</b></Divider>
    <summary>
    Diagnosis may be difficult with only a physical exam because mild cases of COVID-19 may appear similar to the flu or a bad cold. A laboratory test can confirm the diagnosis. 
    
    Learn more about COVID-19 testing.
    </summary>
    <Divider orientation="left"><b>How is COVID-19 treated?</b></Divider>

    <summary>
    As of now, there is not a specific treatment for the virus. People who become sick from COVID-19 should be treated with supportive measures: those that relieve symptoms. For severe cases, there may be additional options for treatment, including research drugs and therapeutics.
    </summary>
    <Divider orientation="left"><b>Does COVID-19 cause death?</b></Divider>
   <summary>
   As of July 17, 2020, 590,608 deaths have been attributed to COVID-19. However, 7,736,980 people have recovered from the illness. 
   </summary>
    <Divider orientation="left"><b>Is this coronavirus different from SARS?</b></Divider>
    <summary>
    SARS stands for severe acute respiratory syndrome. In 2003, an outbreak of SARS started in China and spread to other countries before ending in 2004. The virus that causes COVID-19 is similar to the one that caused the 2003 SARS outbreak: both are types of coronaviruses. Much is still unknown, but COVID-19 seems to spread faster than the 2003 SARS and also may cause less severe illness.
    </summary>
    <Divider orientation="left"><b>How do you protect yourself from this coronavirus?</b></Divider>
    <summary>
    It’s crucial to practice good hygiene, respiratory etiquette and physical distancing. Read more about ways to protect yourself.
    </summary>
        </section>
    )
}