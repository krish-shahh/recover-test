import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Resources() {
    return (
        <>
            <div className='resources'>
                <h1 style={{ fontSize: '75px', padding: '40px' }}>RESOURCES</h1>
                <ul style={{ padding: "0px 100px", textAlign: 'left' }}>
                    <a style={{ color: "rgb(103, 217, 246)" }} href='https://www.aa.org/'>https://www.aa.org/</a>
                    <p>Alcoholics Anonymous is an international fellowship of men and women who have had a drinking problem. It is nonprofessional, self-supporting, multiracial, apolitical, and available almost everywhere. There are no age or education requirements. Membership is open to anyone who wants to do something about his or her drinking problem.</p>
                    <br></br>
                    <br></br>
                    <a style={{ color: "rgb(103, 217, 246)" }} href='https://www.smartrecovery.org/'>https://www.smartrecovery.org/</a>
                    <p>SMART Recovery aims to support individuals who have chosen to abstain, or are considering abstinence from any type of addictive behaviors (substances or activities), by teaching how to change self-defeating thinking, emotions, and actions; and to work towards long-term satisfactions and quality of life.</p>
                    <br></br>
                    <br></br>
                    <a style={{ color: "rgb(103, 217, 246)" }} href='https://www.celebraterecovery.com/'>https://www.celebraterecovery.com/</a>
                    <p>Celebrate Recovery is a Christ-centered, 12 step recovery program for anyone struggling with hurt, pain or addiction of any kind. Celebrate Recovery is a safe place to find community and freedom from the issues that are controlling our life.</p>
                    <br></br>
                    <br></br>
                    <a style={{ color: "rgb(103, 217, 246)" }} href='https://al-anon.org/'>https://al-anon.org/</a>
                    <p>Al‑Anon is a mutual support program for people whose lives have been affected by someone else’s drinking. By sharing common experiences and applying the Al-Anon principles, families and friends of alcoholics can bring positive changes to their individual situations, whether or not the alcoholic admits the existence of a drinking problem or seeks help.</p>
                    <br></br>
                    <br></br>
                    <a style={{ color: "rgb(103, 217, 246)" }} href='https://lifering.org/'>https://lifering.org/</a>
                    <p>LifeRing Secular Recovery is an abstinence-based, worldwide network of individuals seeking to live in recovery from addiction to alcohol or to other non-medically indicated drugs. In LifeRing, we offer each other peer-to-peer support in ways that encourage personal growth and continued learning through personal empowerment.</p>
                    <br></br>
                    <br></br>
                    <a style={{ color: "rgb(103, 217, 246)" }} href='https://www.samhsa.gov/find-help/national-helpline'>https://www.samhsa.gov/find-help/national-helpline</a>
                    <p>
                        SAMHSA’s National Helpline,
                        <a style={{ color: "rgb(103, 217, 246)" }} href="tel:+18006624357"> 1-800-662-HELP (4357) </a>
                        , (also known as the Treatment Referral Routing Service) or TTY:
                        <a style={{ color: "rgb(103, 217, 246)" }} href="tel:18004874889"> 1-800-487-4889 </a>
                        is a confidential, free, 24-hour-a-day, 365-day-a-year, information service, in English and Spanish, for individuals and family members facing mental and/or substance use disorders. This service provides referrals to local treatment facilities, support groups, and community-based organizations.</p>
                    <br></br>
                    <br></br>
                </ul>
            </div>
            <Footer />
        </>
    );
}