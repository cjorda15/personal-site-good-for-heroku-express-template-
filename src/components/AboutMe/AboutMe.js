import React, {Component} from "react"
import style from './AboutMe.css'
import LinkList from '../LinkList/LinkList'

const AboutMe = () => {
return(
  <div id="about-me" className="about-me">
    <p className="home-text">
    I am a Front-End Developer who balances technical precision with creativity and strong interpersonal skills. I seek to be a part of a team that I can continuously learn from and contribute to in a meaningful way. My primary goal for the rest of my life is to become a true craftsman of my trade. After going to over 20 countries spanning across 5 continents, most by sailboat, I have a deep thirst for adventure and continuing to learn more about the world around me. This drive couples well with how I approach wanting to learn inside and out all that there is to know about being a Front-End Engineer.
    </p>
    <div className="about-me-poem">
  <h3>  Max Ehrmann</h3>


<h3>Desiderata</h3>
<p>
Go placidly amid the noise and haste,<br/>
and remember what peace there may be in silence.<br/>
As far as possible without surrender<br/>
be on good terms with all persons.<br/>
Speak your truth quietly and clearly;<br/>
and listen to others,<br/>
even the dull and the ignorant;<br/>
they too have their story.<br/>
Avoid loud and aggressive persons,<br/>
they are vexations to the spirit.<br/>
If you compare yourself with others,<br/>
you may become vain and bitter;<br/>
for always there will be greater and lesser persons than yourself.<br/>
Enjoy your achievements as well as your plans.<br/>
Keep interested in your own career, however humble;<br/>
it is a real possession in the changing fortunes of time.<br/>
Exercise caution in your business affairs;<br/>
for the world is full of trickery.<br/>
But let this not blind you to what virtue there is;<br/>
many persons strive for high ideals;<br/>
and everywhere life is full of heroism.<br/>
Be yourself.<br/>
Especially, do not feign affection.<br/>
Neither be cynical about love;<br/>
for in the face of all aridity and disenchantment<br/>
it is as perennial as the grass.<br/>
Take kindly the counsel of the years,<br/>
gracefully surrendering the things of youth.<br/>
Nurture strength of spirit to shield you in sudden misfortune.<br/>
But do not distress yourself with dark imaginings.<br/>
Many fears are born of fatigue and loneliness.<br/>
Beyond a wholesome discipline,<br/>
be gentle with yourself.<br/>
You are a child of the universe,<br/>
no less than the trees and the stars;<br/>
you have a right to be here.<br/>
And whether or not it is clear to you,<br/>
no doubt the universe is unfolding as it should.<br/>
Therefore be at peace with God,<br/>
whatever you conceive Him to be,<br/>
and whatever your labors and aspirations,<br/>
in the noisy confusion of life keep peace with your soul.<br/>
With all its sham, drudgery, and broken dreams,<br/>
it is still a beautiful world.<br/>
Be cheerful.<br/>
Strive to be happy.<br/>
Max Ehrmann, Desiderata, Copyright 1952.
    </p>
</div>
    <LinkList/>
  </div>
 )
}

export default AboutMe
