# Poker Game 

This is a very simple version of the poker game. 
 
For the layout, I broke my React elements into containers and components. Containers being any React element that returns additional react elements. Because it was such a simple application I really only needed the HomePage and then the Game itself as containers. All of the other elements were stand alone react components to render. I did this to keep the code and layout clean and with clear design purpose throughout the applicaiton. 
 
The game I kept low maintenance as well. I created three buttons that complete the functionality of the application itself by using axios to make all the necessary requests just for ease and quick coding. For the state of the application I wanted to go use Redux so I decided to use Redux Toolkit to cut down on any boilerplate code for such a simple application. For state changes I followed a similar design standpoint by creating reducers for each state element to keep the process clean and clear to follow. Furthermore, this is more applicable to how state is managed in larger applications especially since an application like this can be completed simply by using useState. 

For the state, the first thing that is essential is the deckId that is retrieved and grabbed with clicking the first button that enables the second two for the player to begin dealing cards, since the id is parameter of the other two queries. I also went ahead and added a check to the draw button that checks remaining cards and automatically reshuffles if the deck is going to run out before the user encounters any issues. 
 
For the actual display of the hands and previous hands, I did a simple loop over the state arrays and conditionally rendered the two fields based on whether a hand or previous hands were available. The previous hands I decided to make simple buttons that would pop up a modal with a full display of the previous hand for ease. 


