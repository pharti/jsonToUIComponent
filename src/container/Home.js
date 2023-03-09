/* eslint-disable prettier/prettier */
import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { parseHtml } from '../helpers/ParserEngine';
import RenderEngine from '../helpers/RenderEngine';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const testHTML = `<div class="keyboard-quick-nav">
            <div class="keyboard-quick-nav--wrapper css-10usygl-Wrapper e453bx70">
                <div role="navigation" class="keyboard-quick-nav--list css-vn8ydf-Menu e453bx71"><a
                        class="keyboard-quick-nav--item text-color css-83xe2g-Item e453bx72" tabindex="0"
                        aria-label="Jump to content" href="#content">Content</a><a
                        class="keyboard-quick-nav--item text-color css-83xe2g-Item e453bx72" tabindex="0"
                        aria-label="Jump to header" href="#header">Header</a><a
                        class="keyboard-quick-nav--item text-color css-83xe2g-Item e453bx72" tabindex="0"
                        aria-label="Jump to navigation" href="#sidebar">Navigation</a></div>
            </div>
        </div>
        <div class="app-header" id="header" role="banner">
            <div class="page-header-wrapper">
                <header class="header-container with-logo css-xzwd3e-HeaderContainer e8ie319">
                    <div class="header-body css-128vhw6-HeaderBody e8ie318">
                        <div class="header-left-container css-f9webr-LeftContainer e8ie316"><a
                                href="/content/page/5a0f63d6e4b00a823dba01e7" title="Homepage" tabindex="0"><img
                                    class="header-logo css-731a9x-LogoImage e8ie310"
                                    src="https://cdn-us1.staffbase.com/production/image/upload/c_crop,x_0,y_0,w_1059,h_2388,/c_limit,h_2000,w_2000/c_limit,w_120,h_40/v1504028384/cbuoxYZ1dv6v5lGOIvq8eaGkTJuzM5tvSLGfSpuPRbxon6FOmtMpYnebTHQVRcYi0i15kdiiiKPVljpdBKiGm86zm4ANQ1yQOvWYAQBJzHwR36iLgfO4eww5sQM27br0KK5DJctegALwlpiaZcsUWyNVKRHS00ZtyZLwxEs1zA5wH3bwpDC8QyF3ZbJbISyB/u59a5a4c1e4b027edc3d03972/NBA.png"
                                    aria-hidden="true"></a></div><span
                            class="header-title css-vv85i7-Title e8ie317">Article: Philadelphia 76ers, Boston Celtics to
                            play regular-season game in London</span>
                        <div class="header-right-container actions css-iw1pvc-RightContainer e8ie315"></div>
                    </div>
                </header>
            </div>
            <menu class="with-search with-launchpad" id="menu">
                <div class="search-container false" data-menu-item-id="search">
                    <form role="search" class="ejn0ys0 css-1wu67px-StyledSearch-AppSearch e1bkqwbb3" height="32"
                        action=".">
                        <span height="32" class="we-icon e1bkqwbb0 css-7uebhy-IconStyled-SearchIconStyled e19il6tt0"
                            aria-label="Search icon">S</span><input type="search" name="search"
                            placeholder="Search NBA Team Tech..." aria-label="Search input" autocomplete="off"
                            tabindex="0" class="css-5h6a4r-Input eplbt0y0" value="">
                    </form>
                </div>
            </menu>
        </div>
        <div id="wrapper">
            <div id="sidebar" role="navigation" aria-live="polite">
                <h3>Navigation</h3>
                <div class="plugin-list"><a class="item" tabindex="0" data-menu-item-id="5a0f63d6e4b00a823dba01e7"
                        data-plugin-type="page" data-page-id="item-5a0f63d6e4b00a823dba01e7"
                        data-installation-id="5a0f63d6e4b00a823dba01e6" href="/content/page/5a0f63d6e4b00a823dba01e7"
                        aria-label="About the NBA"><span aria-hidden="true" class="we-icon we-icon-n">n</span>About the
                        NBA</a><a class="item" tabindex="0" data-menu-item-id="59a07e9ce4b048f22931ce70"
                        data-plugin-type="news" data-page-id="news-59a07e9ce4b048f22931ce70"
                        href="/content/news/59a07e9ce4b048f22931ce70" aria-label="News"><span aria-hidden="true"
                            class="we-icon we-icon-N">N</span>News</a><a class="item" tabindex="0"
                        data-menu-item-id="5a0f6445e4b00a823dba01f5" data-plugin-type="news"
                        data-page-id="news-5a0f6445e4b00a823dba01f5" href="/content/news/5a0f6445e4b00a823dba01f5"
                        aria-label="NBA International "><span aria-hidden="true" class="we-icon we-icon-N">N</span>NBA
                        International </a><a class="item" tabindex="0" data-menu-item-id="5a0f6472e4b00a823dba01f8"
                        data-plugin-type="page" data-page-id="item-5a0f6472e4b00a823dba01f8"
                        data-installation-id="5a0f6472e4b00a823dba01f7" href="/content/page/5a0f6472e4b00a823dba01f8"
                        aria-label="NBA Cares"><span aria-hidden="true" class="we-icon we-icon-n">n</span>NBA
                        Cares</a><a class="item last-of-category" tabindex="0"
                        data-menu-item-id="5a0f64dfe4b0611768e7e8f6" data-plugin-type="page"
                        data-page-id="item-5a0f64dfe4b0611768e7e8f6" data-installation-id="5a0f64dfe4b0611768e7e8f5"
                        href="/content/page/5a0f64dfe4b0611768e7e8f6" aria-label="NBA Green"><span aria-hidden="true"
                            class="we-icon we-icon-n">n</span>NBA Green</a><a class="item last-of-category" tabindex="0"
                        data-menu-item-id="about" data-page-id="about" href="/about" aria-label="About"><span
                            aria-hidden="true" class="we-icon we-icon-i">i</span>About</a>
                    <div class="public-login-hint">
                        <p class="description">Eligible users of NBA Team Tech get access to additional features after
                            sign
                            in:</p><button class="positive" id="public-login-hint">Sign In</button>
                    </div>
                </div>
            </div>
            <div class="page feed-post-page post-5a0f2629e4b00a823db9f7bb" role="main" id="content" tabindex="0"
                style="left: 0px;"
                aria-label="Article: Philadelphia 76ers, Boston Celtics to play regular-season game in London">
                <div class="page-content scrolling">
                    <div data-testid="scroller" class="scroller">
                        <div class="fullscreen-preview-wrapper">
                            <article
                                class="feed-post-detail feed-post-type-articles content-direction-ltr css-1mp9v1m-StyledPost e9wn8tq0"
                                data-post-id="5a0f2629e4b00a823db9f7bb" data-channel-id="5a0f1eb8e4b00a823db9f627"
                                tabindex="0">
                                <header>
                                    <h2 class="news-feed-post-headline css-53bmib-StyledFeedHeadline e1l5fzvo0">
                                        <span>Philadelphia 76ers, Boston Celtics to play regular-season game in
                                            London</span>
                                    </h2>
                                    <section class="news-detail-post-teaser css-z5c4sx-StyledDetailTeaser e2evovy0">
                                        <span>LONDON -- The National Basketball Association (NBA) and Anschutz
                                            Entertainment
                                            Group (AEG) announced today that the NBA London Game 2018 will feature the
                                            Philadelphia 76ers and Boston Celtics playing a regular-season game at The
                                            O2 on
                                            Thursday, Jan. 11. </span>
                                    </section>
                                    <figure class="news-detail-post-image-wrapper with-preview">
                                        <figure class="news-detail-post-image css-1gqjdun-DetailStyledMedia ekubfvf1"
                                            style="padding-bottom: 24.2%;"><img
                                                src="https://cdn-us1.staffbase.com/production/image/upload/c_crop,w_1765,h_428,x_0,y_0/c_limit,w_1000,h_242/v1510942191/Q28xEWy7f5lsefSzzZXuLhKXTDYeZPmMIS2LaqBKONjarSCzrKlkI4T5A06eSxIMwGnEmXoOKGb8ZwgmGA1Yz39q7zZIJ6r0tZHr1mzxzvEWjeT2Ve8JTuMVDq7lyYAWlA8QCjrUyM6GGYQVteUb2YJzNl06T13KLamOW3x23PwsVdgejlyR8VrHhAh215Sh/u59e909dee4b0a0cebc9ed619/nba%20london.png"
                                                data-preview-src="https://cdn-us1.staffbase.com/production/image/upload/c_crop,w_1765,h_428,x_0,y_0/c_limit,w_1765,h_428/v1510942191/Q28xEWy7f5lsefSzzZXuLhKXTDYeZPmMIS2LaqBKONjarSCzrKlkI4T5A06eSxIMwGnEmXoOKGb8ZwgmGA1Yz39q7zZIJ6r0tZHr1mzxzvEWjeT2Ve8JTuMVDq7lyYAWlA8QCjrUyM6GGYQVteUb2YJzNl06T13KLamOW3x23PwsVdgejlyR8VrHhAh215Sh/u59e909dee4b0a0cebc9ed619/nba%20london.png"
                                                data-preview-width="1765" data-preview-height="428" width="1000"
                                                height="563"
                                                alt="Philadelphia 76ers, Boston Celtics to play regular-season game in London">
                                        </figure>
                                    </figure>
                                </header>
                                <section class="rich-text news-detail-post-content css-1vvuvzw-StyledRichText edwugxd0">
                                    <p>Tickets for the game will go on sale in October 2017.&nbsp; Fans can register
                                        their
                                        interest for tickets to the NBA London Game 2018 and gain access to bespoke
                                        content,
                                        presale information and more by visiting<span>&nbsp;</span><a
                                            href="https://urldefense.proofpoint.com/v2/url?u=http-3A__www.NBA.com_London&amp;d=DwMFAg&amp;c=YYrawzBzzQ5Dj1FwyrpTdA&amp;r=Tlc2AXJ6LSulvBlBxS-gogHiTSTSisg7N7QLJNrySzk&amp;m=_KuVCMHneLKrfqKRdbvfthitnKrp93E7WV7oxRnNIrs&amp;s=-1-NE9CyBlM1nixvk15on2sppV2KI9wa-CXYTOs_Ujg&amp;e="
                                            class="clickable external-link" target="_blank"
                                            rel="noreferrer noopener">NBA.com/London</a>.&nbsp;</p>
                                    <p>The game will be broadcast live on BT Sport in the UK, by the NBA’s broadcast
                                        partners across EMEA and on NBA LEAGUE PASS International.</p>
                                    <p>The Philadelphia 76ers’ current roster features 2016-17 NBA All-Rookie First Team
                                        members Joel Embiid (Cameroon), who led all rookies in points and rebounds and
                                        Dario
                                        Šarić (Croatia), who was twice named Eastern Conference Rookie of the Month
                                        during
                                        the 2016-17 season, as well as 2016 and 2017 No. 1 overall draft picks, Ben
                                        Simmons
                                        (Australia) and Markelle Fultz (U.S.), respectively.&nbsp; The Celtics’ roster
                                        currently features two-time NBA All-Star Isaiah Thomas (U.S.), who last season
                                        led
                                        the team in scoring with a career-high 28.9 points per game, 2017 NBA All-Star
                                        Gordon Hayward (U.S.) and four-time NBA All-Star Al Horford (Dominican
                                        Republic),
                                        who last season led the team in rebounds.&nbsp; &nbsp;</p>
                                    <p>The game will mark the league’s eighth regular-season game in London and the
                                        Celtics’
                                        second game in the capital, having played a preseason game against the Minnesota
                                        Timberwolves in 2007. &nbsp;The 76ers will be playing their second game in the
                                        UK
                                        and first game in London, having previously played a preseason game in
                                        Manchester
                                        against the Oklahoma City Thunder in 2013.</p>
                                    <p>In addition to the oncourt action, the NBA London Game 2018 will feature a
                                        variety of
                                        interactive fan activities, NBA Cares community outreach initiatives and Jr. NBA
                                        basketball programming that will bring the NBA experience to fans in London.</p>
                                    <p>Fans in the UK can find more NBA information at<span>&nbsp;</span><a
                                            href="http://www.givemesport.com/nba?gr=www" class="clickable external-link"
                                            target="_blank" rel="noreferrer noopener">NBA.com/UK</a>, the league’s
                                        official
                                        online destination in the UK, and on Facebook (<a
                                            href="https://www.facebook.com/nbauk/?ref=bookmarks"
                                            class="clickable external-link" target="_blank"
                                            rel="noreferrer noopener">NBA
                                            UK</a>) and Twitter (<a
                                            href="https://twitter.com/NBAUK?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                            class="clickable external-link" target="_blank"
                                            rel="noreferrer noopener">@NBAUK</a>).&nbsp; Fans can also purchase all the
                                        latest 76ers and Celtics merchandise at<span>&nbsp;</span><a
                                            href="http://www.nbastore.eu/#_blank" class="clickable external-link"
                                            target="_blank" rel="noreferrer noopener">NBAStore.eu</a>and at The O2 on
                                        game
                                        night.</p>
                                </section>
                                <footer>
                                    <div class="news-detail-post-meta css-im2b6h-DetailStyledMeta eppmdyd0">
                                        <p>Published in <a class="internal-link news-feed-post-channel-link clickable"
                                                href="/content/news/archive/5a0f1eb8e4b00a823db9f627/articles/0"
                                                tabindex="0">NBA International Public</a> on <time
                                                datetime="2017-11-17T18:10:49.526Z">Nov 17 2017 at 11:40 pm</time></p>
                                    </div>
                                </footer>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
let htmlConfig;

parseHtml(testHTML).then((result) => {
    htmlConfig = result;
});




const HomeScreen = () => {


    const [openModal, setOpenModal] = React.useState(false);

    const _toggleModalState = () => {
        console.log("Toogle Modal");
        setOpenModal(!openModal);
    };

    const testConfig = {
        children: [
            // {
            //     type: 'div',
            //     id: 'container-div',
            //     class: 'container-class',
            //     attributes: {},
            //     styles: { padding: 8 },
            //     children: [
            //         {
            //             type: 'h6',
            //             id: 'para',
            //             class: 'para-class',
            //             attributes: {
            //                 paddingBottom: 8,
            //             },
            //             value: 'Login Form',
            //         },
            //         {
            //             type: 'p',
            //             id: 'para',
            //             class: 'para-class',
            //             attributes: {},
            //             value: 'Username',
            //         },
            //         {
            //             type: 'input',
            //             onTextChange: (text) => console.log('text ==> ', text),
            //         },
            //         {
            //             type: 'p',
            //             id: 'para',
            //             attributes: {
            //                 marginTop: 4
            //             },
            //             class: 'para-class',
            //             value: 'Password',
            //         },
            //         {
            //             type: 'input',
            //             onTextChange: (text) => console.log('text ==> ', text),
            //         },
            //         {
            //             type: 'button',
            //             attributes: {
            //                 marginTop: 8
            //             },
            //             style: {},
            //             onPress: (text) => console.log('Button Click'),
            //         }
            //     ]
            // },
            // {
            //     type: 'div',
            //     id: 'container-div',
            //     class: 'container-class',
            //     attributes: {},
            //     styles: { padding: 8 },
            //     children: [
            //         // {
            //         //     type: 'button',
            //         //     buttonText: 'Open Modal',
            //         //     attributes: {
            //         //         marginTop: 8
            //         //     },
            //         //     style: {},
            //         //     onPress: (text) => _toggleModalState(),
            //         // },
            //         // {
            //         //     type: 'modal',
            //         //     isOpen: openModal,
            //         //     children: [
            //         //         {
            //         //             type: 'modalContent',
            //         //             id: 'para',
            //         //             class: 'para-class',
            //         //             attributes: {
            //         //                 paddingBottom: 8,
            //         //                 backgroundColor: 'red',
            //         //             },
            //         //             children: [
            //         //                 {
            //         //                     type: 'modalHeader',
            //         //                     attributes: {},
            //         //                     styles: { color: 'black' },
            //         //                     children: [
            //         //                         {
            //         //                             type: 'p',
            //         //                             id: 'para',
            //         //                             attributes: {
            //         //                                 marginTop: 4
            //         //                             },
            //         //                             class: 'para-class',
            //         //                             value: 'Password',
            //         //                         },
            //         //                     ]
            //         //                 },
            //         //             ]
            //         //         },

            //         //     ]
            //         // },
            //         {
            //             type: 'checkBox'
            //         }

            //     ]
            // },
            // {
            //     type: 'carousel',
            //     data: [
            //         {
            //             name: 'Amit'
            //         },
            //         {
            //             name: 'Kailash'
            //         },
            //         {
            //             name: 'Gunnu'
            //         }
            //     ],
            //     renderItem: () => {
            //         return ({
            //             type: 'Element',
            //             tagName: 'p',
            //             attributes: {},
            //             children: [
            //                 {
            //                     type: 'Text',
            //                     content: 'Checkbox 1',
            //                 },
            //             ],
            //         })
            //     }
            // },
            {
                type: 'checkBox',
                children: [
                    {
                        type: 'Element',
                        tagName: 'p',
                        attributes: {},
                        children: [
                            {
                                type: 'Text',
                                content: 'Checkbox 1',
                            },
                        ],
                    },
                ]
            },
            {
                type: 'radioGroup',
                onPress: (value) => console.log('value ==> ', value),
                children: [
                    {
                        type: 'radioButton',
                        value: 1,
                        children: [
                            {
                                type: 'Element',
                                tagName: 'p',
                                attributes: {},
                                children: [
                                    {
                                        type: 'Text',
                                        content: 'Radio 1',
                                    },
                                ],
                            },
                        ]
                    },
                    {
                        type: 'radioButton',
                        value: 2,
                        children: [
                            {
                                type: 'Element',
                                tagName: 'p',
                                attributes: {},
                                children: [
                                    {
                                        type: 'Text',
                                        content: 'Radio 2',
                                    },
                                ],
                            },
                        ]
                    },
                ]
            }

        ]
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {testConfig && RenderEngine(testConfig)}
            </ScrollView>
        </SafeAreaView >
    );
};

export default HomeScreen;

