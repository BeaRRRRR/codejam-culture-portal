# codejam-culture-portal
## About
А fully-fledged modern website about famous Belarusian architects, deployed to Heroku.
Built with:
 - React
 - Redux
 - TypeScript
 - Material UI
 - Styleguidist
 - Node.js
 - Contentful

Build version is available at the following link: https://codejam-culture-portal.herokuapp.com/#/

Styleguide is available at the following link: https://eager-beaver-1c41cc.netlify.com/

### Workflow

*in your first terminal tab*
`cd frontend`
`npm run buildDev`

*in your second terminal tab*
`cd backend`
`npm run build && npm start`

*then navigate to localhost:3000 in your browser*


### Team worklog
Alexander Fraltsov
| Feature                                  | Time spent | Start date | End date |
|------------------------------------------|------------|------------|----------|
| init search component                    | 3h         | 15.02      | 15.02    |
| added .editorconfig                      | 0.25 h     | 15.02      | 15.02    |
| studing and added material-ui in project | 3h         | 16.02      | 16.02    |
| studied styleguidist docs                | 5h         | 17.02      | 20.02    |
| maked first styleguidist components      | 2h         | 21.02      | 21.02    |
| added styleguidist to project            | 9h         | 22.02      | 22.02    |
| added some styleguidist components       | 5h         | 23.02      | 23.02    |
| implemented search component             | 2h         | 23.02      | 23.02    |
| added some styleguidist components       | 3h         | 24.02      | 24.02    |
| fixed search component styles            | 2h         | 24.02      | 24.02    |
| fixed styles of typography, styleguide   | 2h         | 25.02      | 27.02 |
| added favicon                            | 0.25 h     | 28.02      | 28.02 |

<br/><br/>
Pavel Burya
| Feature                                             | Time spent | Start date | End date |
|-----------------------------------------------------|------------|------------|----------|
| create main page basic layout and file structure    | 3h         | 15.02      | 15.02    |
| create worklog basic layout and component structure | 3h         | 16.02      | 16.02    |
| main page material ui stylization                   | 2h         | 17.02      | 17.02    |
| main page data loading, create 404 page             | 3h         | 20.02      | 20.02    |
| scroll top button                                   | 1h         | 23.02      | 23.02    |
| theme changer                                       | 3h         | 24.02      | 24.02    |
| resolve styleguide and redux conflict               | 2h         | 24.02      | 24.02    |
| fix typescript errors, icons, markup, stylization   | 2,5h       | 25.02      | 26.02    |
| worklog data                                        | 2h         | 28.02      | 29.02    |

<br/><br/>
Alex Andreyenkov
| Feature                                               | Time spent | Start date | End date |
|-------------------------------------------------------|------------|------------|----------|
| Participate in routing implementation                 | 2h         | 15.02      | 16.02    |
| Lay down the foundation for redux                     | 8h         | 17.02      | 22.02    |
| Implement the translation                             | 6h         | 22.02      | 26.02    |
| Change style of change language and change theme btns | 2h         | 27.02      | 27.02    |
| Add theme and language to session storage             | 2h         | 29.02      | 29.02    |
| Fix minor bugs in sessionStorage and Buttons          | 1h         | 29.02      | 29.02    |

<br/><br/>
Mikhail Kedzel
| Feature                             | Time spent | Start date | End date |
|-------------------------------------|------------|------------|----------|
| Implement basic directory structure | 2h  | 12.02 | 13.02 |
| Bug fixes                           | 2h  | 15.02 | 16.02 |
| Backend                             | 12h | 16.02 | 20.02 |
| Connect frontend with backend       | 2h  | 20.02 | 21.02 |
| Deploy the whole project to heroku  | 4h  | 21.02 | 23.02 |
| More api routes in backend          | 4h  | 23.02 | 26.02 |
| Reducing web bunlde size            | 8h  | 26.02 | 27.02 |

<br/><br/>
Vitali Satsura
| Feature                                                | Time spent | Start date | End date |
|--------------------------------------------------------|------------|------------|----------|
| create basic-info basic layout and component structure | 2h         | 15.02      | 15.02    |
| create biography basic layout and component structure  | 2h         | 15.02      | 15.02    |
| create works-list basic layout and component structure | 2h         | 15.02      | 15.02    |
| add material ui components to works-list               | 3h         | 17.02      | 17.02    |
| create error indicator and add its logic to app        | 3h         | 24.02      | 24.02    |
| create team page and add components there              | 1h         | 24.02      | 24.02    |
| update Team page styles                                | 2h         | 24.02      | 24.02    |
| update Home page styles                                | 3h         | 26.02      | 26.02    |
| update Architect page styles                           | 3h         | 26.02      | 26.02    |

<br/><br/>
Vladyslav Danilochkin
| Feature                                                  | Time spent | Start date | End date |
|----------------------------------------------------------|------------|------------|----------|
| Create basic header with simple navigation               | 2h   | 15.02 | 15.02 |
| Add Gallery for architect page                           | 2h   | 15.02 | 15.02 |
| Add Youtube player for architect page                    | 2h   | 15.02 | 15.02 |
| Add embed Google Maps for architect page                 | 1h   | 16.02 | 16.02 |
| Replace header navigation with Tabs from Material UI     | 1h   | 16.02 | 16.02 |
| Replace embed Maps with Google Maps API                  | 3h   | 19.02 | 19.02 |
| Update Redux actions and reducer                         | 5h   | 22.02 | 22.02 |
| Implement data display for architect's pages             | 8h   | 22.02 | 25.02 |
| Update Gallery and Youtube components for responsiveness | 3h   | 26.02 | 26.02 |
| Implement data display for team page                     | 1,5h | 28.02 | 28.02 |

### Self Evaluation

Min scope - 50/50
- [x] 10 Main page + page with a list of authors + author's page (only pages with content without widgets);
- [x] 10 Page with team members + page with worklog
- [x] 10 Page with list of authors contains search widget;
- [x] 20 Portal has two languages;

Normal scope - 140/140
- [x] 20 Portal has page with styleguide;
- [x] 10 Mobile version is okey
- [x] 10 Ipad/tablet version is okey
- [x] 10 Author's page contains timeline;
- [x] 10 Author's page contains video overlay;
- [x] 20 Author's page contains photo gallery;
- [x] 10 Author's page contains map (geowidget);
- [x] 20 Design (typography, icons, colors, links + buttons + input are styled)
- [x] 20 Material-ui / bootstrap is used
- [x] 10 Portal has third language;

Extra scope - 80/90
- [x] 10 Confidence of the project presentation;
- [ ] 10 Project is made using gatsbyjs;
- [x] 10 Contentful / netlify cms is used for content management
- [x] 20 Animations / special effects like paralax
- [x] 20 Outstanding design;
- [x] 20 Storybook/styleguidist/other react styleguide tool usage for the page with styles

Total: 50 + 140 + 80 = 270
