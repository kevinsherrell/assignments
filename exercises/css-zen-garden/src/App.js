import React, { Component } from 'react';
import './general.css'
import './components/Header/Header.css'
import './components/Main/Main.css'
import './components/Footer/Footer.css'
import enso from './images/enso.svg'


class App extends Component {
    render() {
        return (
            <div class="REMOVE AFTER BROKEN INTO COMPONENTS">
                {/* HEADER */}
                <header>
                        <div className="headerContainer">
                            <img src={enso} alt="" className="topCircleImage" />
    
                            <h2 className="pageHeading">CSS ZEN GARDEN</h2>
                            <h4 className="pageSubHeading">The Beauty of <abbr title="Cascading Style Sheets">CSS</abbr> Design</h4>
                            <div className="topMobileNav">
                                    <div></div>
                                    <div><a href="#"><h3>VIEW ALL DESIGNS</h3></a></div>
                                    <div className="arrowContainer">{'>'}</div>
                            </div>
                        </div>
                </header>
                {/* END HEADER */}
                <main>
                    <section>
                        <div>
                            <p className="intro">
                                A demonstration of what can be accomplished through <abbr title="Cascading Style Sheets">CSS</abbr>-based design. Select any style sheet from the list to load it into this page.
                            </p>
                            <p className="download">Download the example <span><a href="#">HTML FILE</a></span> and
                         <span> <a href="#">CSS FILE</a></span></p>
                        </div>
                        <div>
                            <h2>THE ROAD TO ENLIGHTENMENT</h2>
                            <p>Littering a dark and dreary road lay the past relics of browser-specific tags, incompatible DOMs, broken <abbr title="Cascading Style Sheets">CSS</abbr> support, and abandoned browsers.</p>
                            <p>We must clear the mind of the past. Web enlightenment has been achieved thanks to the tireless efforts of folk like the <abbr title="World Wide Web Consotium">W3C</abbr>, <abbr title="Web  Standards Project">WASP</abbr>, and the major browser creators.</p>
                            <p>The <abbr title="Cascading Style Sheets">CSS</abbr> Zen Garden invites you to relax and meditate on the important lessons of the masters. Begin to see with clarity. Learn to use the time-honored techniques in new and invigorating fashion. Become one with the web.</p>
                        </div>
                        <div>
                            <h2>SO WHAT IS THIS ABOUT?</h2>
                            <p>There is a continuing need to show the power of <abbr title="Cascading Style Sheets">CSS</abbr>. The Zen Garden aims to excite, inspire, and encourage participation. To begin, view some of the existing designs in the list. Clicking on any one will load the style sheet into this very page. The HTML remains the same, the only thing that has changed is the external <abbr title="Cascading Style Sheets">CSS</abbr> file. Yes, really.</p>
                            <p><abbr title="Cascading Style Sheets">CSS</abbr> allows complete and total control over the style of a hypertext document. The only way this can be illustrated in a way that gets people excited is by demonstrating what it can truly be, once the reins are placed in the hands of those able to create beauty from structure. Designers and coders alike have contributed to the beauty of the web; we can always push it further.</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2>PARTICIPATION</h2>
                            <p>Strong visual design has always been our focus. You are modifying this page, so strong <abbr title="Cascading Style Sheets">CSS</abbr> skills are necessary too, but the example files are commented well enough that even <abbr title="Cascading Style Sheets">CSS</abbr> novices can use them as starting points. Please see the <a href="#"><abbr title="Cascading Style Sheets">CSS</abbr> Resource Guide</a> for advanced tutorials and tips on working with <abbr title="Cascading Style Sheets">CSS</abbr>.</p>
                            <p>You may modify the style sheet in any way you wish, but not the HTML. This may seem daunting at first if you’ve never worked this way before, but follow the listed links to learn more, and use the sample files as a guide.</p>
                            <p>Download the sample <a href="#">HTML</a> and <a href="#"><abbr title="Cascading Style Sheets">CSS</abbr></a> to work on a copy locally. Once you have completed your masterpiece (and please, don’t submit half-finished work) upload your <abbr title="Cascading Style Sheets">CSS</abbr> file to a web server under your control. <a href="#">Send us a link</a> to an archive of that file and all associated assets, and if we choose to use it we will download it and place it on our server.</p>
                            <h2>BENEFITS</h2>
                            <p>Why participate? For recognition, inspiration, and a resource we can all refer to showing people how amazing <abbr title="Cascading Style Sheets">CSS</abbr> really can be. This site serves as equal parts inspiration for those working on the web today, learning tool for those who will be tomorrow, and gallery of future techniques we can all look forward to.</p>
                        </div>
                    </section>
                    <section>
                        <h2>REQUIREMENTS</h2>
                        <p>Where possible, we would like to see mostly <abbr title="Cascading Style Sheets">CSS</abbr> 1 & 2 usage. <abbr title="Cascading Style Sheets">CSS</abbr> 3 & 4 should be limited to widely-supported elements only, or strong fallbacks should be provided. The <abbr title="Cascading Style Sheets">CSS</abbr> Zen Garden is about functional, practical <abbr title="Cascading Style Sheets">CSS</abbr> and not the latest bleeding-edge tricks viewable by 2% of the browsing public. The only real requirement we have is that your <abbr title="Cascading Style Sheets">CSS</abbr> validates.</p>
                        <p>Luckily, designing this way shows how well various browsers have implemented <abbr title="Cascading Style Sheets">CSS</abbr> by now. When sticking to the guidelines you should see fairly consistent results across most modern browsers. Due to the sheer number of user agents on the web these days — especially when you factor in mobile — pixel-perfect layouts may not be possible across every platform. That’s okay, but do test in as many as you can. Your design should work in at least IE9+ and the latest Chrome, Firefox, iOS and Android browsers (run by over 90% of the population).</p>
                        <p>We ask that you submit original artwork. Please respect copyright laws. Please keep objectionable material to a minimum, and try to incorporate unique and interesting visual themes to your work. We’re well past the point of needing another garden-related design.</p>
                        <p>This is a learning exercise as well as a demonstration. You retain full copyright on your graphics (with limited exceptions, see <a href="#">submission guidelines</a>), but we ask you release your <abbr title="Cascading Style Sheets">CSS</abbr> under a Creative Commons license identical to the <a href="#">one on this site</a> so that others may learn from your work.</p>
                    </section>
                </main>
                <footer>
                    <section>
                        <p>By Dave Shea. Bandwidth graciously donated by mediatemple. Now available: Zen Garden, the book.</p>
                    </section>
                    <section>
                        {/* INSERT ICONS HERE // HTML5 CSS3 CC HANDICAP GITHUB */}
                    </section>
                    <section>
                        <div>
                            <div>
                                <h3>MID CENTURY MODERN</h3>
                                <sub>by Andrew Lohman</sub>
                            </div>
                            <div>
                                <h3>MID CENTURY MODERN</h3>
                                <sub>by Andrew Lohman</sub>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>MID CENTURY MODERN</h3>
                                <sub>by Andrew Lohman</sub>
                            </div>
                            <div>
                                <h3>MID CENTURY MODERN</h3>
                                <sub>by Andrew Lohman</sub>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>MID CENTURY MODERN</p>
                                <sub>by Andrew Lohman</sub>
                            </div>
                            <div>
                                <p>MID CENTURY MODERN</p>
                                <sub>by Andrew Lohman</sub>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>MID CENTURY MODERN</p>
                                <sub>by Andrew Lohman</sub>
                            </div>
                            <div>
                                <p>MID CENTURY MODERN</p>
                                <sub>by Andrew Lohman</sub>
                            </div>
                        </div>

                    </section>
                    <section>
                        <div>
                            <div><p>VIEW THIS DESIGN'S <abbr title="Cascading Style Sheets">CSS</abbr></p></div>
                            <div><p><abbr title="Cascading Style Sheets">CSS</abbr> RESOURCES</p></div>
                        </div>
                        <div>
                            <div><p>FAQ</p></div>
                            <div><p>SUBMIT A DESIGN</p></div>
                        </div>
                        <div>
                            <div>TRANSLATIONS</div>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}

export default App