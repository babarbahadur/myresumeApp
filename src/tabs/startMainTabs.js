import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("assignment", 30),
        Icon.getImageSource("code", 30),
        Icon.getImageSource("contacts", 30),
        Icon.getImageSource("menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "id.ResumeTab",
                    label: "Resume",
                    title: "Resume",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    } 
                },
                {
                    screen: "id.ProjectsTab",
                    label: "Projects",
                    title: "Projects",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "id.SocialLinksTab",
                    label: "Contact",
                    title: "Contact",
                    icon: sources[2],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[3],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    } 
                    
                }

            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "#20DEFC"
            },

            drawer: {
                left: {
                    screen: "id.SocialLinksTab"
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: "#20DEFC"
            },
        });
    });
};

export default startTabs;