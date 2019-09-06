- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components are much more used than function components because function components didn't have hooks before. Class components allow you to have and set a single state, while function components use multiple states. Otherwise, function components are (arguably) far superior.

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount > runs after the component has mounted, useful for something like an axios call
    componentDidUnmount > runs after the component has been unmounted, useful for updating after a component is no longer mounted
    componentDidUpdate > runs as soon as the component has finished updating

- [ ] What is the purpose of a custom hook?

    Allows you to extract the state logic into a reusable bit of code that can be consumed in various parts of the app, while only being written once

- [ ] Why is it important to test our apps?

    Beause we don't want our apps to break when they are being used. We want to test and make sure our apps are functioning correctly.